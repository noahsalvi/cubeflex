import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GameService } from "src/app/game.service";

@Component({
	selector: "app-play-game",
	templateUrl: "./play-game.component.html",
	styleUrls: ["./play-game.component.scss"]
})
export class PlayGameComponent implements OnInit, AfterViewInit {
	rand: number;
	seconds: number;
	secondsRounded: number;
	interval: NodeJS.Timer;

	constructor(private gameService: GameService) {}

	ngOnInit() {
		for (let i = 1; i <= 12; i++) {
			document
				.getElementById("c-" + i)
				.addEventListener("click", () => this.checkCube("c-" + i));
		}
	}

	ngAfterViewInit() {
		this.game();
	}

	game() {
		this.chooseCube();
		this.setActive();
		this.startCountdown();
	}

	chooseCube() {
		let randNr = Math.floor(Math.random() * 12) + 1;
		this.rand = 1;
	}

	setActive() {
		document.getElementById("c-" + this.rand).classList.add(".active");
	}

	removeActive() {
		document.getElementById("c-" + this.rand).classList.remove(".active");
	}

	checkCube(id: String) {
		if (id == "c-" + this.rand) {
			clearInterval(this.interval);
			this.gameService.seconds = this.gameService.seconds - 0.1;
			this.removeActive();
			this.game();
		} else {
			this.gameService.gameover = true;
			clearInterval(this.interval);

			console.log("Interval gekilled");
		}
	}

	async startCountdown() {
		this.seconds = this.gameService.seconds;
		this.interval = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds = this.seconds - 0.1;
				this.secondsRounded = Math.round(this.seconds * 100) / 100;
			} else {
				clearInterval(this.interval);
			}
			console.log(this.seconds);
		}, 100);
	}
}
