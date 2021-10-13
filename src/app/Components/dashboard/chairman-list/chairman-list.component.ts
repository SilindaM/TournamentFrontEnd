import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChairmanService } from 'src/app/Services/chairman.service';

@Component({
  selector: 'app-chairman-list',
  templateUrl: './chairman-list.component.html',
  styleUrls: ['./chairman-list.component.css']
})
export class ChairmanListComponent implements OnInit {

  id?:number;
  chairman?:any;
  team?:any;
   constructor(private router:Router, private servi:ChairmanService) { }
 
   ngOnInit(): void {
     this.getAllPlayer();
   }
   //get all players
   getAllPlayer(){
     this.servi.getAllChairman().subscribe(
       data=>{
         this.chairman=data;
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
 