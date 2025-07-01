// Inicialización del mapa
var map = L.map('mapa').setView([0, 0], 2); // Vista inicial global
 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

// Coordenadas del punto de destino
var destinoLat = 43.7347;
var destinoLng = 7.4204;

// Creaciòn del punto de destino
var destino  = L.latLng(destinoLat, destinoLng);
 
// Obtención de la ubicación del usuario (si está disponible)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
 
        // Marcador
        L.marker([lat, lon]).addTo(map)
            .bindPopup("Estas aquí")
            .openPopup();

        // Calcular y mostrar ruta
        L.Routing.control({
            waypoints: [
                L.latLng(lat, lon), //posicion del usuario
                destino
            ],
            routeWhileDragging: true,
            lineOptions: {
                styles: [{color: 'red', opacity: 0.8, weight: 5}]
            }
        }).addTo(map);
    });
} else{
    console.warn("No se puede acceder a tu ubicacion");
}