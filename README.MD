#denolog

## Small logger I made for deno

```ts
import Logger, {ConsoleTransport, FileTransport} from "https://deno.land/x/gh:FrozyTime:denolog/mod.ts";

const logger = new Logger();

const logFile = Deno.open("logs.log", {
    "append": true
});

logger.addTransport(new ConsoleTransport());
logger.addTransport(new FileTransport(logFile));

logger.error(new Error("xd error happened!"));

```
<3