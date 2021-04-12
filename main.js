//////////////////////////////////////////////////////////////////////////////////////
// DOG SECTION

// Get button DOM element
const button = document.querySelector("#dogbutton");
// Get img DOM element
const randomDog = document.querySelector("#dogPic");

// Add event listener click function
button.addEventListener("click", function () {
  console.log("button clicked");

  // Make a request to a URL
  const dogURL = "https://dog.ceo/api/breeds/image/random";

  // Step 1: Make a GET request to the Dog API URL
  fetch(dogURL)
    // Step 2: Extract JSON from response
    .then((response) => response.json())

    // Step 3: Process JSON as we please
    .then((data) => {
      console.log("success!", data);
      randomDog.src = data.message;
    });
  // =================
  // =================
});

//////////////////////////////////////////////////////////////////////////////////////
// WEATHER SECTION

// Get search input DOM element
const cityInput = document.querySelector("#city");

// Create three `div` elements that will store the temperature, wind,
// and description data fetched from the API
const temp = document.querySelector("#weather-temp");
const wind = document.querySelector("#weather-wind");
const descrip = document.querySelector("#weather-description");

// Get button DOM element, add a click event listener on that button
document.querySelector("#search").addEventListener("click", function () {
  // When the button is clicked...
  console.log("button clicked!");

  // Step 1: Create a variable for the URL
  const cityWeatherURL = `https://goweather.herokuapp.com/weather/${cityInput.value}`;

  // Step 2: Make a request to a URL
  fetch(cityWeatherURL)
    // Step 3: Process the raw response into an object
    .then(function (response) {
      console.log("RAW RESPONSE", response);
      return response.json();
    })

    // Step 4: Take that object and do whatever you like
    .then(function (data) {
      console.log("JSON", data);
      if (data.message === "NOT_FOUND") {
        alert("No weather data for this city.");
        return;
      }

      // Set p tags inside divs innerHTML using JSON
      temp.innerHTML = data.temperature;
      wind.innerHTML = data.wind;
      descrip.innerHTML = data.description;
    });
  // =================
  // =================
});

//////////////////////////////////////////////////////////////////////////////////////
// FOOD SECTION

// Get button DOM element
const hungry = document.querySelector("#foodButton");
// Get img DOM element
const randomDish = document.querySelector("#foodPic");

// Add event listener click function
hungry.addEventListener("click", function () {
  console.log("button clicked");

  // Make a request to a URL
  const foodURL = "https://foodish-api.herokuapp.com/api/";

  // Step 1: Make a GET request to the food API URL
  fetch(foodURL)
    // Step 2: Extract JSON from response
    .then((response) => response.json())

    // Step 3: Process JSON as we please
    .then((data) => {
      console.log("success!", data);
      randomDish.src = data.image;
    });
  // =================
  // =================
});
