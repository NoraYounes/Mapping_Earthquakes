// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// setView([center],zoom)
let map = L.map('mapid').setView([34.0522,-118.2437], 14);
//let map = L.map('mapid',{center: [40.7, -94.5], zoom: 4});

// Add a marker to the map for Los Angeles, California.
//var marker = L.marker([34.0522,-118.2437]).addTo(map);

// Add a circle to the map
// var circle = L.circle([34.0522,-118.2437],{
//     radius: 100,
//     fillColor: 'red',
//     fillOpacity: 0.5,
//     color: 'black'
// }).addTo(map);

// Add a circleMarker to the map
var circleMarker = L.circleMarker([34.0522,-118.2437],{
    radius: 300,
    fillColor: 'yellow',
    fillOpacity: 0.2,
    color: 'black'
}).addTo(map);

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

