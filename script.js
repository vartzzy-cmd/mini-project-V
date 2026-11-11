const map = L.map("map").setView([8.38214, 124.86737], 13
);
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
 attribution: '&copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}
).addTo(map);

const marker = L.marker([ 8.40298, 124.88880 ]).addTo(map);
marker.bindPopup("<b>Lingion</b><p>Welcome to Lingion</p>"
);


L.circle([8.39965, 124.88777], {
color: "blue",
fillColor: "#30a3ec",
fillOpacity: 0.3,
radius: 2000
}).addTo(map);


map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "School", lat: 8.40124, lng: 124.88721 },
{ name: "Vart Home", lat: 8.41616, lng:124.89658  },



];

locations.forEach(function(place) {
L.marker([place.lat, place.lng])
.addTo(map)
.bindPopup(place.name);
});