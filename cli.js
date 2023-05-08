#!/usr/bin/env node

import * as yargs from 'yargs';

const options = yargs
 .option("h", { alias: "help", describe: "Help message", type: "string" })
 .option("n", { alias: "north", describe: "Latitude: N positive", type: "string" })
 .option("s", { alias: "south", describe: "Latitude: S negative", type: "string" })
 .option("e", { alias: "east", describe: "Longitude: E positive", type: "string" })
 .option("w", { alias: "west", describe: "Longitude: W negative", type: "string" })
 .option("z", { alias: "zone", describe: "Time zone", type: "string" })
 .option("d", { alias: "day", describe: "Day to retrieve weather", type: "string" })
 .option("j", { alias: "json", describe: "Echo pretty JSON and exit", type: "string" })
 .argv;

if (options.help) {
  console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE");
  console.log("    -h            Show this help message and exit.");
  console.log("    -n, -s        Latitude: N positive; S negative.");
  console.log("    -e, -w        Longitude: E positive; W negative.");
  console.log("    -z            Time zone: uses tz.guess() from moment-timezone by default.");
  console.log("    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.");
  console.log("    -j            Echo pretty JSON from open-meteo API and exit.");
}
