const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const steamController = require("./SteamController.js");
const openDotaController = require("./OpenDotaController.js");

const dotenv = require("dotenv");
dotenv.config();

const steamAPIKey = process.env.STEAM_API_KEY;
const openDotaApiKey = process.env.OPEN_DOTA_API_KEY;
console.log(
  "   ___  ____  _________     ___  ___  ____  __________   ____\n" +
    "  / _ \\/ __ \\/_  __/ _ |   / _ \\/ _ \\/ __ \\/ __/  _/ /  / __/\n" +
    " / // / /_/ / / / / __ |  / ___/ , _/ /_/ / _/_/ // /__/ _/  \n" +
    "/____/\\____/ /_/ /_/ |_| /_/  /_/|_|\\____/_/ /___/____/___/  \n" +
    "                                                             "
);

readline.question(`What is your Steam username?\n`, name => {
  steamController.getSteamUserID(steamAPIKey, name).then(res => {
    openDotaController
      .getWinsAndLosses(openDotaApiKey, res)
      .then(res => console.log(res));
  });
});
