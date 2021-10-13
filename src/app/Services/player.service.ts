import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../Models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //fetch from Api
  baseUrl="http://localhost:8081/players/all";

  constructor(private http:HttpClient) { }

  //getAllPLayers
  getAllPlayers():Observable<Player>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get player by id
  getPlayerId(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
   //delete employee
   deletePlayer(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  //update Player
  updateEmployee(id:number,player:Player):Observable<Player>{
    return this.http.put(`${this.baseUrl}/${id}`,player);
  }
  //create Player
  createPlayer(player:Player):Observable<Player>{
    return this.http.post(`${this.baseUrl}`,player);
  }
}
