import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
	selector: "app-landing-page",
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
	constructor(gameService: GameService) {
		gameService.reset();
	}

	ngOnInit() {}
}
