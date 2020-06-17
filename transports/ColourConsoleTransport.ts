import ITransport from "./ITransport.ts";
import LogLevel from "../LogLevel.ts";
import {red, reset, yellow, white} from "../deps.ts";

export default class ConsoleTransport implements ITransport {
	public levels: LogLevel[];

	constructor()
	constructor(...levels: LogLevel[]) {
		if(!levels || levels.length == 0) this.levels = [LogLevel.ALL];
		else this.levels = levels;
	}
	
	log(level: LogLevel, msg: any) {

		switch(level) {
			case LogLevel.ERROR:
				console.log(
					`${red(level.toString())} -`, msg
				);
				return;
			case LogLevel.WARNING:
				console.log(
					`${yellow(level.toString())} -`, msg
				);
				return;
			case LogLevel.INFO:
				console.log(
					`${white(level.toString())} -`, msg
				);
				return;
			default:
				console.log(
					`${level.toString()} -`, msg
				);
				return;
		}
	}
}