import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency-decorators";

interface PagesHomeArgs {}

export default class PagesHome extends Component<PagesHomeArgs> {
  @service("db") db: any;
  @tracked showRecipeModal = false;

  constructor(owner, args) {
    super(owner, args);

    this.fetchRecipes.perform();
  }

  @task
  *fetchRecipes() {
    const recipes = yield this.db.db.recipes.orderBy("calories").toArray();

    return recipes;
  }

  get recipes() {
    if (!this.fetchRecipes.lastSuccessful) {
      return [];
    }

    return this.fetchRecipes.lastSuccessful.value;
  }

  @action
  openRecipeModal() {
    if (this.showRecipeModal) {
      this.showRecipeModal = false;
      return;
    }

    this.showRecipeModal = true;
  }

  @action
  async addRecipe(recipe: object) {
    await this.db.db.recipes.add(recipe);

    this.showRecipeModal = false;

    await this.fetchRecipes.perform();
  }
}
