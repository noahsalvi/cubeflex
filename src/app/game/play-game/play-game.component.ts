import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GameService } from "src/app/game.service";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";

@Component({
	selector: "app-play-game",
	templateUrl: "./play-game.component.html",
	styleUrls: ["./play-game.component.scss"]
})
export class PlayGameComponent implements OnInit, AfterViewInit {
	rand: number;
	level: number;
	seconds: number;
	secondsRounded: number;
	interval;

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
		this.secondsRounded = this.gameService.seconds;
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

	checkCube(id: String) {
		if (id == "c-" + this.rand) {
			clearInterval(this.interval);
			this.gameService.seconds = this.gameService.seconds - 0.1;
			this.gameService.level++;
			this.level = this.gameService.level;
			this.removeActive();
			this.game();
		} else {
			this.gameService.gameover = true;
			clearInterval(this.interval);
			this.router.navigate(["/game/end"]);
		}
	}

	startCountdown() {
		this.seconds = this.gameService.seconds;
		this.interval = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds = this.seconds - 0.1;
				this.secondsRounded = Math.round(this.seconds * 100) / 100;
			} else {
				clearInterval(this.interval);
				this.gameService.gameover = true;
				// this.router.navigate(["/game/end"]);
			}
			console.log(this.seconds);
		}, 100);
	}
}
