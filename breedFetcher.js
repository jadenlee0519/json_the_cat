const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds", function(error, response, body) {
    let data = JSON.parse(body);
    let found = false;
    let desc;
    data.forEach(element => {
      if (breedName === element.name) {
        desc = element.description;
        found = true;
      }
    });
    if (!found) {
      desc = "Breed not found";
    }
    callback(error, desc);
  });

};
module.exports = {
  fetchBreedDescription,
};