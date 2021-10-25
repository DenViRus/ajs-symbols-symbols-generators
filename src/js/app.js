// TODO: write your code here
import { Team } from "./Team.js";
import { Person } from "./Person.js";

export { Team };

const char1 = new Person('Bob', 'Swordman', 100, 1, 50, 20);
const char2 = new Person('Sam', 'Bowman', 100, 1, 50, 20);
const char3 = new Person('Jack', 'Magician', 100, 1, 50, 20);
const char4 = new Person('John', 'Magician', 100, 1, 50, 20);

const team1 = new Team(char1, char2, char3, char4);

for (const pers of team1) {
  console.log(pers);
}
