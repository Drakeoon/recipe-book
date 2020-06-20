import Component from "@glimmer/component";
import { action } from "@ember/object";

interface SharedInputArgs {
  label: string;
  name: string;
  type: "text" | "textarea";
  onChange(name: string, value: string | number): any;
}

export default class SharedInput extends Component<SharedInputArgs> {
  @action
  handleChange(e: Event) {
    const { value, type } = e.target as HTMLInputElement;
    const { name, onChange } = this.args;

    if (type === "number") {
      onChange(name, parseInt(value));
      return;
    }

    onChange(name, value);
  }
}
