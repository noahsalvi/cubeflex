import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class GameService {
	seconds: number;
	level: number;
	gameover: boolean = false;

	constructor() {
		this.reset();
	}

	reset(): void {
		this.level = 1;
		this.seconds = 3;
		this.gameover = false;
	}
}
