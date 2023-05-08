#!/usr/bin/env node


import minimist from 'minimist';
import moment from 'moment-timezone';
import fetch from "node-fetch";

// Command line options
var options = minimist(process.argv.slice(2));

// Help option
if (options.h) {
    console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE");
    console.log("    -h            Show this help message and exit.");
    console.log("    -n, -s        Latitude: N positive; S negative.");
    console.log("    -e, -w        Longitude: E positive; W negative.");
    console.log("    -z            Time zone: uses tz.guess() from moment-timezone by default.");
    console.log("    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.");
    console.log("    -j            Echo pretty JSON from open-meteo API and exit.");
    process.exit(0);
}

// Timezone
const timezone = options.z ?? moment.tz.guess();
// Latitude
const latitude = options.n || (-1 * options.s);
//Longitude
const longitude = options.e || (-1 * options.w);

// Open-Meteo API
const openMeteo = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&daily=precipitation_hours&current_weather=true&timezone=" + timezone);
// Open-Meteo API Data
const meteoData = await openMeteo.json();

// Json Option
if (options.j) {
    console.log(meteoData);
    process.exit(0);
}

// Day
const day = arg.d ?? 1;
var dayVar;
if (day == 1) {
    dayVar = " tomorrow.";
} else if (day > 1 && day < 7) {
    dayVar = " in " + day " days.";
} else if (day == 0) {
    dayVar = " today."
}

// Percipitation
const dailyPer = meteoData.daily.percipitation_hours[day];
if (dailyPer > 0) {
    console.log("You might need your galoshes" + dayVar);
} else {
    console.log("You will not need your galoshes" + dayVar);
}

