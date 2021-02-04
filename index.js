const fs = require("fs");
const Turn = require("node-turn");

var turnServer;

function loadConfig(file) {
    let content = fs.readFileSync(file);
    return JSON.parse(content);
}

function start() {
    let config = loadConfig("config.json");
    config.debug = onDebug;
    turnServer = new Turn(config);
    turnServer.start();
}

function onDebug(level, msg) {
    console.log("[" + level + "] " + msg);
}

start();