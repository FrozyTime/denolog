import ITransport from "./ITransport.ts";
import LogLevel from "../LogLevel.ts";

export default class ConsoleTransport implements ITransport {
	public levels: LogLevel[];
	public logFile: Deno.File;

	constructor(file: Deno.File, ...levels: LogLevel[]) {
		if(!levels || levels.length == 0) this.levels = [LogLevel.ALL];
		else this.levels = levels;
	
		if(!file) throw new Error("File is not valid!");
		this.logFile = file;
	}
	
	log(level: LogLevel, msg: any) {
		let encoder = new TextEncoder();
		let data: Uint8Array = new Uint8Array();

		// If it is an instance of an error then do custom log
		if(msg instanceof Error)
			data = encoder.encode(`${level.toString()} - ${msg.stack}\n`);
		else 
			data = encoder.encode(`${level.toString()} - ${msg}\n`);
		
		this.logFile.writeSync(data);
	}
}