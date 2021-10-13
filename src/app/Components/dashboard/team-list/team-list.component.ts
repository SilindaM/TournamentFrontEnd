import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  id?:number;
  player?:any;
  coach?:any;
  chairman?:any;
  team?:any;
   constructor(private router:Router, private servi:TeamService) { }
 
   ngOnInit(): void {
     this.getAllTeams();
   }
   //get all players
   getAllTeams(){
     this.servi.getAllTeams().subscribe(
       data=>{
         this.team=data;
       },
       error=>{
         console.log(error);
       }
     )
   }
   //Navigate on button click
   Navigate(navi:any,id:any){
     if(id===''){
       this.router.navigate([navi]);
     }
     else{
       this.router.navigate([navi+'/'+id]);
     }
   }
   //delete by id
 
 }
 