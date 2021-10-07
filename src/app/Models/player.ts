import { Person } from "./person";
import { Team } from "./team";

export class Player extends Person{
    salary?:number;
    rating?:number;
    team?:Team;
    position?:string;
}
