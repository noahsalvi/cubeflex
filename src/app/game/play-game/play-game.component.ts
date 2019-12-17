import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { GameService } from "src/app/game.service";
import { Router } from "@angular/router";
import { ThrowStmt, templateJitUrl } from "@angular/compiler";
import { Howl, Howler } from "howler";

@Component({
	selector: "app-play-game",
	templateUrl: "./play-game.component.html",
	styleUrls: ["./play-game.component.scss"]
})
export class PlayGameComponent implements OnInit, AfterViewInit, OnDestroy {
	rand: number;
	level: number;

	seconds: number;
	secondsRounded: number;
	interval;
	redirectTimeout;

	correctHowl;
	wrongHowl;

	constructor(private gameService: GameService, private router: Router) {}

	ngOnInit() {
		this.setup();
	}

	setup() {
		for (let i = 1; i <= 12; i++) {
			document
				.getElementById("c-" + i)
				.addEventListener("click", () => this.checkCube("c-" + i));
		}

		this.level = this.gameService.level;
		this.correctHowl = new Howl({ src: ["assets/sounds/correct.wav"] });
		this.wrongHowl = new Howl({ src: ["assets/sounds/wrong.mp3"] });
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
		let temp;
		do {
			temp = Math.floor(Math.random() * 12) + 1;
		} while (temp == this.rand);
		this.rand = temp;
	}

	setActive() {
		document.getElementById("c-" + this.rand).classList.add("active");
	}

	removeActive() {
		document.getElementById("c-" + this.rand).classList.remove("active");
	}

	updateSeconds() {
		let subtrahend = 0.1;

		if (this.gameService.seconds <= 0.6) {
			subtrahend = 0.05;
		}

		this.gameService.seconds -= subtrahend;
	}

	checkCube(id: string) {
		if (!this.gameService.isGameover) {
			if (id == "c-" + this.rand) {
				clearInterval(this.interval);

				this.updateSeconds();
				this.gameService.level++;

				this.level = this.gameService.level;

				this.correctHowl.play();
				this.removeActive();
				this.game();
			} else {
				clearInterval(this.interval);
				this.gameService.gameover("cube");
				document.getElementById(id).classList.add("wrong");
				this.wrongHowl.play();
				this.redirectTimeout = setTimeout(
					() => this.router.navigate(["/game/end"]),
					2000
				);
			}
		}
	}

	startCountdown() {
		this.seconds = this.gameService.seconds;

		this.interval = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds -= 0.01;
			} else {
				clearInterval(this.interval);
				this.gameService.gameover("time");
				this.removeActive();
				document.getElementById("seconds").classList.add("expired");
				this.redirectTimeout = setTimeout(
					() => this.router.navigate(["/game/end"]),
					2500
				);
			}
		}, 10);
	}

	ngOnDestroy() {
		clearTimeout(this.redirectTimeout);
		clearInterval(this.interval);
	}
}
