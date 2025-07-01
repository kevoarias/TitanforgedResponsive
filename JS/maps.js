navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var map = L.map('mapita', {
        center:[latitude, longitude],
        zoom: 5
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Coordenadas del punto de destino
    var destinoLat = 43.7347;
    var destinoLng = 7.4204;


    function calcularDistancia(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radio de la Tierra en kilómetros
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distancia = R * c;
        return distancia; 
    }

    var distancia = calcularDistancia(latitude, longitude, destinoLat, destinoLng);

    var distanciaHTML = "<p>Distancia al destino: " + distancia.toFixed(2) + " km</p>";
    document.getElementById('ubicate').insertAdjacentHTML('beforeend', distanciaHTML);

    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(destinoLat, destinoLng)
        ],
        language: 'es',
        show: false
    }).addTo(map);
});
