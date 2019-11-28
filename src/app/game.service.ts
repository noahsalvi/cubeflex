import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class GameService {
	seconds: number;
	level: number;
	gameover: boolean;

	constructor() {
		this.seconds = 3;
		this.level = 1;
		this.gameover = false;
	}
}
