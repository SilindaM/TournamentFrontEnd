import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './Components/dashboard/add-player/add-player.component';
import { AddTeamComponent } from './Components/dashboard/add-team/add-team.component';
import { AddchairmanComponent } from './Components/dashboard/addchairman/addchairman.component';
import { ChairmanDetailsComponent } from './Components/dashboard/chairman-details/chairman-details.component';
import { ChairmanEditComponent } from './Components/dashboard/chairman-edit/chairman-edit.component';
import { ChairmanListComponent } from './Components/dashboard/chairman-list/chairman-list.component';
import { CoachDetailsComponent } from './Components/dashboard/coach-details/coach-details.component';
import { CoachEditComponent } from './Components/dashboard/coach-edit/coach-edit.component';
import { CoachListComponent } from './Components/dashboard/coach-list/coach-list.component';
import { PlayerDetailsComponent } from './Components/dashboard/player-details/player-details.component';
import { PlayerEditComponent } from './Components/dashboard/player-edit/player-edit.component';
import { PlayerListComponent } from './Components/dashboard/player-list/player-list.component';
import { TeamDetailsComponent } from './Components/dashboard/team-details/team-details.component';
import { TeamEditComponent } from './Components/dashboard/team-edit/team-edit.component';
import { TeamListComponent } from './Components/dashboard/team-list/team-list.component';

const routes: Routes = [
  {path:'',redirectTo:'teams',pathMatch:'full'},
  {path:'addteam',component:AddTeamComponent},
  {path:'teamdetails/:id',component:TeamDetailsComponent},
  {path:'updateteam/:id',component:TeamEditComponent},
  {path:'addplayer',component:AddPlayerComponent},
  {path:'playerdetails/:id',component:PlayerDetailsComponent},
  {path:'updateplayer/:id',component:PlayerEditComponent},
  {path:'coachteam',component:AddTeamComponent},
  {path:'coachdetails',component:CoachDetailsComponent},
  {path:'updatecoach/:id',component:CoachEditComponent},
  {path:'addchairman',component:AddchairmanComponent},
  {path:'chairmandetails',component:ChairmanDetailsComponent},
  {path:'updatechairman/:id',component:ChairmanEditComponent},
  {path:'playerlist',component:PlayerListComponent},
  {path:'coachlist',component:CoachListComponent},
  {path:'chairmanlist',component:ChairmanListComponent},
  {path:'teamlist',component:TeamListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
