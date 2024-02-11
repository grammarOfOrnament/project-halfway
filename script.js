
// const latlong = 23;
// const firstLocationUrl = `https://api.openweathermap.org/data/2.5/weather?${latlong}&appid=2d026a9674bff2efe34ba784093e9b79`;


//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log("Washington DC");

//     kelvinTemp = data.main.temp;
//     console.log(`Kelvin Temp: ${kelvinTemp}`);
//     console.log(`Fahrenheit Temp: ${9/5*(kelvinTemp-273)+32}`);

//   }
//   )

// Google Maps API Key: AIzaSyBR49VxuvbhRoWSP5slRrooGBkZoTHSK1U



// Pseudocode
// User inputs location into INPUT 1
// User inputs location into INPUT 2

// User hits submit button

// In backend, convert "spaces" in user inputs to "%20" (Google Maps API format)

// Fetch Google Maps API JSON data for INPUT 1 to find lat/long coordinates
// Fetch Google Maps API JSON data for INPUT 2 to find lat/long coordinates

// Perform Isabelle's formula on the two lat/long coordinates to get the distance between them

// Use geocoding to convert the lat/long coordinates back into an address

// Display the address (the Halfway point)
// Show a link to Google Maps querying what's around the address (restaurants, etc.)



// 52%20Ackermann%20Avenue%20Oradell%20NJ

// https://maps.googleapis.com/maps/api/geocode/json?address=Washington&key=


// SOOO GOOD - Finds info on address
// https://maps.googleapis.com/maps/api/geocode/json?address=52%20Ackermann%20Avenue%20Oradell%20NJ&key=AIzaSyBR49VxuvbhRoWSP5slRrooGBkZoTHSK1U


let thingsToDo = document.getElementById("thingsToDo");
let restaurants = document.getElementById("restaurants");
let coffeeShops = document.getElementById("coffeeShops");
let museums = document.getElementById("museums");
let bookStores = document.getElementById("bookStores");
let libraries = document.getElementById("libraries");
let scenicViews = document.getElementById("scenicViews");
let parks = document.getElementById("parks");
let shopping = document.getElementById("shopping");
let halfwayPointCoordinates = document.getElementById("halfwayPointCoordinates");
let viewHalfwayPoint = document.getElementById("viewHalfwayPoint");
let results = document.getElementById("results");
let linkList = document.getElementById("linkList");

const firstLocationInputElement = document.getElementById("firstLocationInput");
const secondLocationInputElement = document.getElementById("secondLocationInput");

function getLocation() {
  let firstLocationEncoded = firstLocationInputElement.value.replace(/ /g, "%20");
  console.log(firstLocationEncoded);

  let secondLocationEncoded = secondLocationInputElement.value.replace(/ /g, "%20");
  console.log(secondLocationEncoded);


    const firstLocationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${firstLocationEncoded}&key=AIzaSyBR49VxuvbhRoWSP5slRrooGBkZoTHSK1U`
    const secondLocationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${secondLocationEncoded}&key=AIzaSyBR49VxuvbhRoWSP5slRrooGBkZoTHSK1U`

    fetch(firstLocationUrl)
    .then(res => res.json())
    .then(data => {
        console.log("First Location Lat/Long Coordinates");

        var latitude1 = data.results[0].geometry.location.lat;
        var longitude1 = data.results[0].geometry.location.lng;

        console.log(`Latitude: ${latitude1}`);
        console.log(`Longitude: ${longitude1}`);

    fetch(secondLocationUrl)
    .then(res => res.json())
    .then(data => {
        console.log("Second Location Lat/Long Coordinates");

        var latitude2 = data.results[0].geometry.location.lat;
        var longitude2 = data.results[0].geometry.location.lng;

        console.log(`Latitude: ${latitude2}`);
        console.log(`Longitude: ${longitude2}`);

        let halfwayPointLat = latitude1 + (latitude2-latitude1) / 2;
        let halfwayPointLng = longitude1 + (longitude2-longitude1) / 2;

        console.log("Midpoint Latitude: " + halfwayPointLat);
        console.log("Midpoint Longitude: " + halfwayPointLng);

        halfwayPointCoordinates.innerHTML = `Halfway between ${firstLocationInputElement.value} and ${secondLocationInputElement.value} is <b>${halfwayPointLat}, ${halfwayPointLng}</b>`;
        viewHalfwayPoint.setAttribute("href", `https://www.google.com/maps/search/${halfwayPointLat},+${halfwayPointLng}/@${halfwayPointLat},${halfwayPointLng},13z`);

        thingsToDo.setAttribute("href", `https://www.google.com/maps/search/things+to+do/@${halfwayPointLat},${halfwayPointLng},15z`);
        restaurants.setAttribute("href", `https://www.google.com/maps/search/restaurants/@${halfwayPointLat},${halfwayPointLng},15z`);
        coffeeShops.setAttribute("href", `https://www.google.com/maps/search/coffee+shops/@${halfwayPointLat},${halfwayPointLng},15z&forceweb=1`);
        museums.setAttribute("href", `https://www.google.com/maps/search/museums/@${halfwayPointLat},${halfwayPointLng},15z&center=${halfwayPointLat},${halfwayPointLng}`);
        bookStores.setAttribute("href", `https://www.google.com/maps/search/book+stores/@${halfwayPointLat},${halfwayPointLng},15z`);
        libraries.setAttribute("href", `https://www.google.com/maps/search/libraries/@${halfwayPointLat},${halfwayPointLng},15z`);
        scenicViews.setAttribute("href", `https://www.google.com/maps/search/scenic+views/@${halfwayPointLat},${halfwayPointLng},15z`);
        parks.setAttribute("href", `https://www.google.com/maps/search/parks/@${halfwayPointLat},${halfwayPointLng},15z`);
        shopping.setAttribute("href", `https://www.google.com/maps/search/shopping/@${halfwayPointLat},${halfwayPointLng},15z`);

        results.setAttribute("style", "display: block;");
        linkList.setAttribute("style", "display: block;");
    })
})

// https://www.google.com/maps/search/restaurants/@${latitude},${longitude},15z
// https://www.google.com/maps/search/Restaurants/@27.8010528,-101.3154739,12z/data=!3m1!4b1!4m6!2m5!3m4!2zMjfCsDQ4JzA1LjYiTiAxMDHCsDEzJzM4LjMiVw!4m2!1d-101.2272986!2d27.8015499?entry=ttu

}



// // Initialize the Google Places Autocomplete service
// var autocomplete = new google.maps.places.Autocomplete(firstLocationInputElement);

// // Set options (if needed)
// autocomplete.setFields(['address_components', 'geometry', 'formatted_address']);

// // Add event listener for when a place is selected
// autocomplete.addListener('place_changed', function() {
//     var place = autocomplete.getPlace();

//     // Access the place details, such as address components and coordinates
//     console.log(place.address_components);
//     console.log(place.geometry.location.lat());
//     console.log(place.geometry.location.lng());
// });



// Your halfway point is... 40.958554, -74.034291. View on Google Maps.
// toggle on visibility of HTML elements when the getLocations button is clicked (can't be toggled off)

// Use Google Places API to autosuggest addresses as user types in the input fields


// Google Maps mapping between location 1, location 2, and halfway point:
// https://www.google.com/maps/dir/276+Alpine+Dr,+Paramus,+NJ+07652/40.9429952,-74.0722418/495+Wilson+Avenue,+Paramus,+NJ/@40.945578,-74.0844714,14.5z/data=!4m15!4m14!1m5!1m1!1s0x89c2fb0f09d72d85:0x8def19fe72998780!2m2!1d-74.0907645!2d40.935588!1m0!1m5!1m1!1s0x89c2fac786d0bdb9:0x888a2e618fc5f179!2m2!1d-74.0537191!2d40.9504025!3e0?entry=ttu

// Change: Show the halfway point address and the lat/long coordinates. If there is no address, just show the lat/long coordinates.