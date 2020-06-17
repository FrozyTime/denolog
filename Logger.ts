import ITransport from "./transports/ITransport.ts";
import LogLevel from "./LogLevel.ts";

export default class Logger {
	transports: ITransport[] = [];

	constructor() {
		
	}

	addTransport(transport: ITransport): void {
		this.transports.push(transport);
	}

	error(msg: any): void {
		this.log(LogLevel.ERROR, msg);
	}

	warn(msg: any) {
		this.log(LogLevel.WARNING, msg);
	}

	info(msg: any) {
		this.log(LogLevel.INFO, msg);
	}

	log(level: LogLevel, msg: any) {
		for(let transport of this.transports) {
			if (
				transport.levels.includes(LogLevel.ALL) ||
				transport.levels.includes(level)
				) {
					transport.log(level, msg);
				}
			
		}
	}

}