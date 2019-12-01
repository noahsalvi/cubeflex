import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/game.service";
import { Howl, Howler } from "howler";

@Component({
	selector: "app-start-game",
	templateUrl: "./start-game.component.html",
	styleUrls: ["./start-game.component.scss"]
})
export class StartGameComponent implements OnInit {
	level: number;
	seconds: number;
	startHowl;

	constructor(private gameService: GameService) {
		this.startHowl = new Howl({
			src: ["assets/sounds/start.wav"]
		});
	}

	ngOnInit() {
		this.level = this.gameService.level;
		this.seconds = this.gameService.seconds;
	}

	playSound() {
		//this.startHowl.play();
	}
}
