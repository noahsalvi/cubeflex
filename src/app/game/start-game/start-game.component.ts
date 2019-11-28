import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/game.service";

@Component({
	selector: "app-start-game",
	templateUrl: "./start-game.component.html",
	styleUrls: ["./start-game.component.scss"]
})
export class StartGameComponent implements OnInit {
	level: number;
	seconds: number;
	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.level = this.gameService.level;
		this.seconds = this.gameService.seconds;
	}
}
