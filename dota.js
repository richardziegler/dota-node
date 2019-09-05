const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const axios = require("axios");

const steamAPIKey = "xxxx";
// const openDotaApiKey = 'xxxx';
let steamUsername = "";

console.log(
  "   ___  ____  _________     ___  ___  ____  __________   ____\n" +
    "  / _ \\/ __ \\/_  __/ _ |   / _ \\/ _ \\/ __ \\/ __/  _/ /  / __/\n" +
    " / // / /_/ / / / / __ |  / ___/ , _/ /_/ / _/_/ // /__/ _/  \n" +
    "/____/\\____/ /_/ /_/ |_| /_/  /_/|_|\\____/_/ /___/____/___/  \n" +
    "                                                             "
);

readline.question(`What is your Steam username?`, name => {
  steamUsername = name;
});

let getSteamId = axios
  .get(
    `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${steamUsername}`
  )
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log("error: " + error);
  })
  .finally(function() {});
