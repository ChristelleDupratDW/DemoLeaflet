

// Pour initialiser la map
var map = L.map('map').setView([0, 0], 1);
// Onajoute une couche à notre map
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=SA2qJl5cRyhkG995Udqz', { attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' 
}).addTo(map);


var leafletIcon = L.icon ({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38,95],
    iconAnchor:[22,94],
    shadowAnchor: [4,62],
    popupAnchor:[12,-98],
})




var marker = L.marker([50.9650778, 1.8623022],{icon:leafletIcon}).addTo(map); L.marker([50.9502753, 1.8608720]).addTo(map); L.marker([50.8076230, 2.1248257]).addTo(map);

var circle = L.circle([50.9650778, 1.8623022], {
    color: 'black',
    fillColor:'#f03',
    fillOpacity: 0.5,
    radius: 450,
}).addTo(map);


var polygon = L.polygon([
    [50.95024, 1.860872], 
    [50.950275, 1.860873], 
    [50.950276, 1.861], 

]).addTo(map);

 marker.bindPopup("<b>Eurovélo </b><br> Roulez ici !").openPopup(); 
 circle.bindPopup("Le vélo c'est super !");
 polygon.bindPopup("Faites une pause !");
