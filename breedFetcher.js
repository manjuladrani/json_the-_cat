const request = require('request');

const breedName = process.argv[2];
//console.log(breedName);
const fetchBreedDescription = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    //   console.log(typeof body)hit
    if (response.statusCode === 404) {
      return console.log("Message", error);
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data)
    const firstEle =  data[0];

    if (firstEle) {
      console.log(firstEle.description);
    } else {
      console.log("Breed is not found");
    }

  });
};
fetchBreedDescription();
module.exports = { fetchBreedDescription };