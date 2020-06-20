import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

interface PagesHomeArgs {}

export default class PagesHome extends Component<PagesHomeArgs> {
  @tracked showRecipeModal = false;

  @action
  openRecipeModal() {
    if (this.showRecipeModal) {
      this.showRecipeModal = false;
      return;
    }

    this.showRecipeModal = true;
  }
}
