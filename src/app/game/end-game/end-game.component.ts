import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/game.service";

@Component({
	selector: "app-end-game",
	templateUrl: "./end-game.component.html",
	styleUrls: ["./end-game.component.scss"]
})
export class EndGameComponent implements OnInit {
	seconds: number;
	level: number;

	constructor(private gameService: GameService) {
		this.seconds = Math.round(this.gameService.seconds * 100) / 100;
		this.level = gameService.level;

		this.gameService.reset();
	}

	ngOnInit() {}
}
