'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlam95bGVlIiwiYSI6ImNrN3BmZnZ5NDBqYjQzbW1pNGs0MWFiejkifQ.9stnbzBJqom6XYjX73VYcA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-74.001818,40.701878],
    zoom: 12
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

let marker = new mapboxgl.Marker()
marker.setLngLat([-73.967473,40.802487])
marker.addTo(map)

let popup = new mapboxgl.Popup()
popup.setHTML('This is where you can find the best bagels on the UWS<br /><img src="https://assets3.thrillist.com/v1/image/1778387/size/tmg-venue_carousel_mobile.jpg" />')
marker.setPopup(popup)

let data = [
    {
        location: [-74.010176,40.703292],
        content: 'America’s first ice cream shop in 1774 with Philip Lenzi on Dock Street (now Water St/Coenties Slip)'
    },
    {
        location: [-74.009444,40.704526],
        content: 'Hanover Square–the center of commerce in colonial New York'
    },
     {
        location: [-74.010293,40.705635],
        content: 'Delmonicos opened as a small confectionery shop on 23 William Street in 1827'
    },
     {
        location: [-74.009444,40.704526],
        content: 'Haagen-Dazs, created in the Bronx by Reuben and Rose Mattus, opened its first ice cream shop in 1976 on 120 Montague Street, Brooklyn Heights'
    },
    {
        location: [-73.987400,40.711476],
        content: 'In 1789 Martha Washington would make several batches of ice cream from the Washington home on Cherry Street'
    },
    ]

data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
