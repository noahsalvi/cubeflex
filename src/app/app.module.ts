import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { GameComponent } from "./game/game.component";
import { StartGameComponent } from "./game/start-game/start-game.component";
import { EndGameComponent } from "./game/end-game/end-game.component";
import { PlayGameComponent } from './game/play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GameComponent,
    StartGameComponent,
    EndGameComponent,
    PlayGameComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
