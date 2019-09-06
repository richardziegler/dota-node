const axios = require("axios");

exports.getSteamUserID = async function(steamAPIKey, steamUsername) {
  try {
    let response = await axios.get(
      `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${steamUsername}`
    );
    return response.data.response.steamid.substr(3) - 61197960265728;
  } catch (error) {
    console.error(error);
  }
};
