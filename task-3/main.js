//Task 3 - sub task 1 - XXXXcomplete -  ✅

//Using fetch, get a random cat image URL using the API URL: https://api.thecatapi.com/v1/images/search
// breaking this challenge down, do the following:
//// create async function to fetch data from API:
// write code that sends get request to https://api.thecatapi.com/v1/images/search
// await response of the fetch call
// retrieve json data from the response
// await the json-formatted data from the response

const url = `https://api.thecatapi.com/v1/breeds`;

const api_key = "live_CKrRhltr8KevBSGNypBdnyLoTODP17fuIsaS6HQragdgkVqnyPAeb2KMvAkyG0AK";

// a variable to store the information about the breeds

let storedBreeds = [];

// a function to select a random breed

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


// a function to show images and information of the breeds
function showCatImageAndInformation(index) {

// This will display the image of the cat
  document.getElementById("cat_image").src = storedBreeds[index].image.url;

// This will get the breed name
  document.getElementById("breed_name").innerHTML = storedBreeds[index].name;

// This will get the wiki link
  document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;

  document.getElementById("wiki_link").innerHTML =
    storedBreeds[index].wikipedia_url;  

// This will get the characteristics of the cat
  document.getElementById("breed_json").textContent =
    storedBreeds[index].temperament;
}


// a function to retrieve data from the API
fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Storing the retrieved data from the API in our variable
    storedBreeds = data;


    // Using the random function to select a specific breed. Then extracting information from that breed
    showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1));
  })
  .catch(function (error) {
    console.log(error);
  });

  document.getElementById("new_cat_button").addEventListener("click", function() {
    showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1));
  });
  