import { Person } from "./person";
import { Team } from "./team";

export class Coach extends Person {
    team?:Team;
}
