import Component from "@glimmer/component";
import { action } from "@ember/object";

interface SharedInputArgs {
  label: string;
  name: string;
  type: "text" | "textarea";
  onChange(name: string, value: string): any;
}

export default class SharedInput extends Component<SharedInputArgs> {
  @action
  handleChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const { name, onChange } = this.args;

    onChange(name, value);
  }
}
