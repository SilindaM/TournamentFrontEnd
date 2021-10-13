import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/Models/player';
import { PlayerService } from 'src/app/Services/player.service';
import { PlayerListComponent } from '../player-list/player-list.component';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent  implements OnInit {
  id=0;
  player?:any;
  constructor(private servi:PlayerService,private router:Router,private acti:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.acti.snapshot.params['id'];
    this.player=new Player();
    this.servi.getPlayerId(this.id).subscribe(
        data=>{
          console.log(data);
          this.player=data;
        },
        error=>{
          console.log(error);
        });
    }
  }

  

 


