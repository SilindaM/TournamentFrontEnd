import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/player';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
 id?:number;
 player?:any;
 team?:any;
  constructor(private router:Router, private servi:PlayerService) { }

  ngOnInit(): void {
    this.getAllPlayer();
  }
  //get all players
  getAllPlayer(){
    this.servi.getAllPlayers().subscribe(
      data=>{
        this.player=data;
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
