import { Component, OnInit, OnDestroy } from "@angular/core";
import { GameService } from "src/app/game.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-end-game",
	templateUrl: "./end-game.component.html",
	styleUrls: ["./end-game.component.scss"]
})
export class EndGameComponent implements OnInit, OnDestroy {
	seconds: number;
	level: number;
	reason: string;

	constructor(private gameService: GameService, private router: Router) {
		if (!gameService.gameover) {
			console.log(gameService.gameover);
			router.navigate(["/game"]);
		}
		document.getElementById("logo-cube").classList.add("orange-color");

		this.seconds = Math.round(this.gameService.seconds * 100) / 100;
		this.level = gameService.level;
		if (gameService.reason == "time") {
			this.reason = "You ran out of time!";
		} else {
			this.reason = "You got the wrong Cube!";
		}

		this.gameService.reset();
	}

	ngOnInit() {}

	ngOnDestroy() {
		document.getElementById("logo-cube").classList.remove("orange-color");
	}
}
