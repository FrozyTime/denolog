import ITransport from "./ITransport.ts";
import LogLevel from "../LogLevel.ts";

export default class ConsoleTransport implements ITransport {
	public levels: LogLevel[];

	constructor()
	constructor(...levels: LogLevel[]) {
		if(!levels || levels.length == 0) this.levels = [LogLevel.ALL];
		else this.levels = levels;
	}
	
	log(level: LogLevel, msg: any) {
		console.log(
			`${level.toString()} -`, msg
		);
	}
}