const axios = require("axios");

exports.getWinsAndLosses = async function(openDotaAPIKey, steamUserID) {
  try {
    let response = await axios.get(
      `https://api.opendota.com/api/players/${steamUserID}/wl?api_key=${openDotaAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
