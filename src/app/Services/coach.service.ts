import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../Models/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {


  //fetch from Api
  baseUrl="http://localhost:8081/coachs/all";

  constructor(private http:HttpClient) { }

  //getAllcoach
  getAllCoachs():Observable<Coach>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get coach by id
  getCoachId(id:number):Observable<Coach>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
   //delete coach
   deleteCoach(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  //update coach
  updateCoach(id:number,coach:Coach):Observable<Coach>{
    return this.http.put(`${this.baseUrl}/${id}`,coach);
  }
  //create coach
  createCoach(coach:Coach):Observable<Coach>{
    return this.http.post(`${this.baseUrl}`,coach);
  }
}
