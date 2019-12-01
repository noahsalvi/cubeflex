import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";
import { of } from "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { PlayGameComponent } from "./play-game/play-game.component";
@Component({
	selector: "app-game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
	constructor(gameSerivce: GameService) {}

	ngOnInit() {}
}
