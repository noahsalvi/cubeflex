import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameComponent } from './game/game.component';
import { StartGameComponent } from './game/start-game/start-game.component';
import { EndGameComponent } from './game/end-game/end-game.component';
import { PlayComponent } from './game/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GameComponent,
    StartGameComponent,
    EndGameComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
