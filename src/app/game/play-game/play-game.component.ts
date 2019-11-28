import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GameService } from "src/app/game.service";

@Component({
	selector: "app-play-game",
	templateUrl: "./play-game.component.html",
	styleUrls: ["./play-game.component.scss"]
})
export class PlayGameComponent implements OnInit, AfterViewInit {
	rand: number;
	interval;
	timeLeft: number;

	constructor(private gameService: GameService) {}

	ngOnInit() {
		for (let i = 1; i <= 2; i++) {
			document
				.getElementById("c-" + i)
				.addEventListener("click", () => this.checkCube("c-" + i));
		}
	}

	ngAfterViewInit() {
		this.chooseCube();
		this.setActiv();
		this.startCountdown().then(() => console.log("fertig"));
	}

	chooseCube() {
		let randNr = Math.floor(Math.random() * 12) + 1;
		this.rand = randNr;
	}

	setActiv() {
		document.getElementById("c-" + this.rand).classList.add(".activ");
	}

	checkCube(id: String) {
		if (id == "c-" + this.rand) {
			this.countdown = 0;
		} else {
			this.gameService.gameover = true;
		}
	}

	async startCountdown() {
		this.timeLeft = 2;
		this.interval = setInterval(() => {
			if (this.timeLeft > 0) {
				this.timeLeft--;
			} else {
				this.timeLeft = 60;
			}
			console.log(this.timeLeft);
		}, 1000);
	}
}
