import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chairman } from '../Models/chairman';

@Injectable({
  providedIn: 'root'
})
export class ChairmanService {

  //fetch from Api
  baseUrl="http://localhost:8081/chairmans/all";

  constructor(private http:HttpClient) { }

  //getAllChairman
  getAllChairman():Observable<Chairman>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get Chairman by id
  getChairmanId(id:number):Observable<Chairman>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
   //delete Chairman
   deleteChairman(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  //update chairman
  updateChairman(id:number,chairman:Chairman):Observable<Chairman>{
    return this.http.put(`${this.baseUrl}/${id}`,chairman);
  }
  //create chairman
  createChairman(chairman:Chairman):Observable<Chairman>{
    return this.http.post(`${this.baseUrl}`,chairman);
  }
}
