import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  //fetch from Api
  baseUrl="http://localhost:8081/teams/all";

  constructor(private http:HttpClient) { }

  //getAllTeams
  getAllTeams():Observable<Team>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get Team by id
  getTeamId(id:number):Observable<Team>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
   //delete Team
   deleteTeam(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  //update Team
  updateTeam(id:number,player:Team):Observable<Team>{
    return this.http.put(`${this.baseUrl}/${id}`,player);
  }
  //create Team
  createTeam(team:Team):Observable<Team>{
    return this.http.post(`${this.baseUrl}`,team);
  }
}
