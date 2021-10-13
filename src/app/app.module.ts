import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './Components/player/player.component';
import { ChairmanComponent } from './Components/chairman/chairman.component';
import { CoachComponent } from './Components/coach/coach.component';
import { TeamComponent } from './Components/team/team.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddPlayerComponent } from './Components/dashboard/add-player/add-player.component';
import { PlayerDetailsComponent } from './Components/dashboard/player-details/player-details.component';
import { TeamEditComponent } from './Components/dashboard/team-edit/team-edit.component';
import { AddCoachComponent } from './Components/dashboard/add-coach/add-coach.component';
import { CoachDetailsComponent } from './Components/dashboard/coach-details/coach-details.component';
import { ChairmanEditComponent } from './Components/dashboard/chairman-edit/chairman-edit.component';
import { AddTeamComponent } from './Components/dashboard/add-team/add-team.component';
import { TeamDetailsComponent } from './Components/dashboard/team-details/team-details.component';
import { CoachEditComponent } from './Components/dashboard/coach-edit/coach-edit.component';
import { AddchairmanComponent } from './Components/dashboard/addchairman/addchairman.component';
import { ChairmanDetailsComponent } from './Components/dashboard/chairman-details/chairman-details.component';
import { PlayerEditComponent } from './Components/dashboard/player-edit/player-edit.component';
import { PlayerListComponent } from './Components/dashboard/player-list/player-list.component';
import { CoachListComponent } from './Components/dashboard/coach-list/coach-list.component';
import { ChairmanListComponent } from './Components/dashboard/chairman-list/chairman-list.component';
import { TeamListComponent } from './Components/dashboard/team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ChairmanComponent,
    CoachComponent,
    TeamComponent,
    DashboardComponent,
    AddPlayerComponent,
    PlayerDetailsComponent,
    TeamEditComponent,
    AddCoachComponent,
    CoachDetailsComponent,
    ChairmanEditComponent,
    AddTeamComponent,
    TeamDetailsComponent,
    CoachEditComponent,
    AddchairmanComponent,
    ChairmanDetailsComponent,
    PlayerEditComponent,
    PlayerListComponent,
    CoachListComponent,
    ChairmanListComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
