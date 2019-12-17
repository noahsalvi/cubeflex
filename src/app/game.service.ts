import { Injectable } from "@angular/core";

type ReasonTypes = "time" | "cube";

@Injectable({
	providedIn: "root"
})
export class GameService {
	seconds: number;
	level: number;
	isGameover: boolean;
	reason: ReasonTypes;

	constructor() {
		this.reset();
	}

	gameover(reason: ReasonTypes) {
		this.reason = reason;
		this.isGameover = true;
	}

	reset(): void {
		this.level = 1;
		this.seconds = 2;
		this.isGameover = false;
		this.reason = null;
	}
}
