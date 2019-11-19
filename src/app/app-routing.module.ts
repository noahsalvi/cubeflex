import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { GameComponent } from "./game/game.component";
import { StartGameComponent } from "./game/start-game/start-game.component";
import { PlayComponent } from "./game/play/play.component";
import { EndGameComponent } from "./game/end-game/end-game.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {
    path: "game",
    component: GameComponent,
    children: [
      { path: "", component: StartGameComponent },
      { path: "play", component: PlayComponent },
      { path: "end", component: EndGameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
