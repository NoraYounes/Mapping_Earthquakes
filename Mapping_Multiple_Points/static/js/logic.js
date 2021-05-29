// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// setView([center],zoom)
let map = L.map('mapid').setView([29.7604, -95.3698], 4);

// Get data from cities.js
let cityData = cities;


// Loop through the cities array and create one marker for each city.
// Add a popup to the marker
cityData.forEach(function(city){
    console.log(city),
    L.circleMarker(city.location ,{
        radius: city.population/100000,
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: '0.2'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map)
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

