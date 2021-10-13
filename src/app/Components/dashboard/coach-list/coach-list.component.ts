import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from 'src/app/Services/coach.service';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  id?:number;
  coach?:any;
  team?:any;
   constructor(private router:Router, private servi:CoachService) { }
 
   ngOnInit(): void {
     this.getAllPlayer();
   }
   //get all players
   getAllPlayer(){
     this.servi.getAllCoachs().subscribe(
       data=>{
         this.coach=data;
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
 