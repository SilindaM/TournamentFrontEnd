import { Person } from "./person";
import { Team } from "./team";

export class Player extends Person{
    id?:number;
    salary?:number;
    rating?:number;
    team?:Team;
    position?:string;
}
