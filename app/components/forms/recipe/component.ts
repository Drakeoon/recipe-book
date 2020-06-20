import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

interface FormsRecipeArgs {}

interface Recipe {
  name: string;
  description: string;
  [key: string]: string;
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
  };

  inputFields: InputField[] = [
    {
      label: "Recipe name",
      name: "name",
      type: "text",
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
  createRecipe() {
    // validate

    // logic with creating recipe
    debugger;
  }
}
