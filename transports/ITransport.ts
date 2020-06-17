import LogLevel from "../LogLevel.ts";

export default interface ITransport {
	levels: LogLevel[];
	log(level: LogLevel, msg: any) : void;

}