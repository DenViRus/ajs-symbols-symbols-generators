import { Person } from "./Person.js";

export class Team {
  constructor(...objects) {
    this.team = [...objects];
  }

  * [Symbol.iterator]() {
    for (const item of this.team) {
      yield item;
    }
  }
}
