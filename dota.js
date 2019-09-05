const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const controller = require("./SteamController.js")

const dotenv = require('dotenv');
dotenv.config();

const steamAPIKey = process.env.STEAM_API_KEY;
// const openDotaApiKey = 'xxxx';

let steam32 = 0;

console.log(
    "   ___  ____  _________     ___  ___  ____  __________   ____\n" +
    "  / _ \\/ __ \\/_  __/ _ |   / _ \\/ _ \\/ __ \\/ __/  _/ /  / __/\n" +
    " / // / /_/ / / / / __ |  / ___/ , _/ /_/ / _/_/ // /__/ _/  \n" +
    "/____/\\____/ /_/ /_/ |_| /_/  /_/|_|\\____/_/ /___/____/___/  \n" +
    "                                                             "
);

readline.question(`What is your Steam username?`, name => {
    controller.getSteamUserID(steamAPIKey, name).then(res => console.log(res))
    // controller.getCatFact().then(vars => console.log(vars))
});