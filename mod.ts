import Logger from "./Logger.ts";
import LogLevel from "./LogLevel.ts";
import ITransport from "./transports/ITransport.ts";
import FileTransport from "./transports/FileTransport.ts";
import ColourConsoleTransport from "./transports/ColourConsoleTransport.ts";
import ConsoleTransport from "./transports/ConsoleTransport.ts";

export {
	LogLevel,
	ITransport,
	FileTransport,
	ColourConsoleTransport,
	ConsoleTransport,
	Logger,
	Logger as default
};
