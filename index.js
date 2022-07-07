const { fetchBreedDescription, } = require("./breedFetcher");
const breedName = process.argv.slice(2).join("").toLowerCase().replaceAll(" ", "").replaceAll("-", "");
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});