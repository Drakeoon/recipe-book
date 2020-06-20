import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

interface FormsRecipeArgs {
  onSubmit(recipe: Recipe): void;
}

interface Recipe {
  name: string;
  description: string;
  calories: number;
  [key: string]: string | number;
}

interface InputField {
  label: string;
  name: string;
  type: string;
}

export default class FormsRecipe extends Component<FormsRecipeArgs> {
  @tracked recipe: Recipe = {
    name: "",
    description: "",
    calories: 0,
  };

  inputFields: InputField[] = [
    {
      label: "Recipe name",
      name: "name",
      type: "text",
    },
    {
      label: "Calories",
      name: "calories",
      type: "number",
    },
    {
      label: "Description (Markdown)",
      name: "description",
      type: "textarea",
    },
  ];

  get inputFieldsWithValue() {
    return this.inputFields.map((inputField) => {
      const value = this.recipe[inputField.name];

      return { ...inputField, value };
    });
  }

  @action
  handleChange(name: "name" | "description", value: string) {
    this.recipe[name] = value;
  }

  @action
  createRecipe(e: any) {
    e.preventDefault();

    const { onSubmit } = this.args;
    const { name, description } = this.recipe;

    if (!name || !description) {
      return;
    }

    onSubmit(this.recipe);
  }
}
