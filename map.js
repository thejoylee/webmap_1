'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlam95bGVlIiwiYSI6ImNrN3BmZnZ5NDBqYjQzbW1pNGs0MWFiejkifQ.9stnbzBJqom6XYjX73VYcA'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.96024, 40.80877],
    zoom: 1
})
