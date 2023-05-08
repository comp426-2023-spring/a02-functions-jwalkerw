#!/usr/bin/env node

import yargs from 'yargs/yargs';
import moment from 'moment-timezone';

const options = yargs(process.argv.slice(2))
 .usage("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE")
 .help("h")
 .option("n", { alias: "north", describe: "Latitude: N positive", type: "string" })
 .option("s", { alias: "south", describe: "Latitude: S negative", type: "string" })
 .option("e", { alias: "east", describe: "Longitude: E positive", type: "string" })
 .option("w", { alias: "west", describe: "Longitude: W negative", type: "string" })
 .option("z", { alias: "zone", describe: "Time zone", type: "string" })
 .option("d", { alias: "day", describe: "Day to retrieve weather", type: "string" })
 .option("j", { alias: "json", describe: "Echo pretty JSON and exit", type: "string" })
 .argv;

const timezone = moment.tz.guess();
