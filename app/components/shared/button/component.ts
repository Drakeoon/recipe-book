import Component from "@glimmer/component";
import { action } from "@ember/object";

interface SharedButtonArgs {
  type: string;
  onClick?(): void;
}

export default class SharedButton extends Component<SharedButtonArgs> {
  get type() {
    return this.args.type || "button";
  }

  @action
  handleClick() {
    const { onClick } = this.args;

    if (onClick) {
      onClick();
    }
  }
}
