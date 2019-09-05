const axios = require("axios");
const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';



exports.getSteamUserID = async function (steamAPIKey, steamUsername) {
    try {
        let response = await axios.get(
            `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamAPIKey}&vanityurl=${steamUsername}`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

exports.getCatFact = async () => {
    try {
        let response = await axios.get('https://catfact.ninja/fact');
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
