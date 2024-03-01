function toggleSectionVisibility() {

  var bloque1 = document.querySelector(".bloque1");

  if (bloque1.style.display === "none") {

    bloque1.style.display = "block";

  } else {

    bloque1.style.display = "none";

  }

}



function changeSectionBackgroundColor() {

  var bloque1 = document.querySelector(".bloque1");

  var newColor = prompt("Introduce un nuevo color de fondo (en formato hexadecimal, por ejemplo, #ff0000 para rojo):");

  if (newColor) {

    bloque1.style.backgroundColor = newColor;

  }

}

document.getElementById("btnCreditos").addEventListener("click", function() {



  alert("Autor: Sandra González Fernández\nCurso y Grupo: 2ºB");



});

document.querySelector(".bloque1").addEventListener("mouseover", function() {

  alert("Fecha actual: " + new Date());

});



var bloque2 = document.querySelector(".bloque2");



bloque2.addEventListener("mouseover", function() {

  bloque2.style.backgroundColor = "lightgreen";

});



bloque2.addEventListener("mouseout", function() {

  bloque2.style.backgroundColor = "silver";

});
function mostrarUbicacion(latitud, longitud) {
  var ubicacion = "Tu ubicación actual es:\nLatitud: " + latitud + "\nLongitud: " + longitud;
  alert(ubicacion);
}

function mostrarMapa(latitud, longitud) {
  var mapa = L.map('map').setView([latitud, longitud], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);
  L.marker([latitud, longitud]).addTo(mapa)
    .bindPopup('¡Aquí estás!').openPopup();
}

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      mostrarUbicacion(latitud, longitud); // Mostrar ubicación en una alerta
      mostrarMapa(latitud, longitud); // Mostrar mapa después de obtener la ubicación
    }, function(error) {
      alert("Hubo un error al obtener la ubicación: " + error.message);
    });
  } else {
    alert("La geolocalización no está soportada por este navegador.");
  }
}
