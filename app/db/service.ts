import Service from "@ember/service";
import Dexie from "dexie";

import { tracked } from "@glimmer/tracking";

export default class Db extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  @tracked db: Dexie | null = null;

  constructor() {
    super(...arguments);

    this.setup();
  }

  setup() {
    const db = new Dexie("RecipeBookDb");

    db.version(2).stores({ recipes: "++id, name, calories, description" });

    this.db = db;
  }
}

declare module "@ember/service" {
  interface Registry {
    db: Db;
  }
}
