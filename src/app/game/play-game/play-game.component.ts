import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GameService } from "src/app/game.service";

@Component({
	selector: "app-play-game",
	templateUrl: "./play-game.component.html",
	styleUrls: ["./play-game.component.scss"]
})
export class PlayGameComponent implements OnInit, AfterViewInit {
	constructor(private gameService: GameService) {}

	ngOnInit() {}

	ngAfterViewInit() {
		document.getElementById("c-1").addEventListener("click", this.test);
	}
	chooseCard() {
		let randNr = Math.floor(Math.random() * 6) + 1;
		console.log(randNr);
	}

	test() {
		document
			.getElementById("c-1")
			.addEventListener("click", this.chooseCard);
	}
}
