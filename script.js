window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});





// Seleccionamos todas las tarjetas de servicio
const servicioCards = document.querySelectorAll('.servicio-card');

// Iteramos sobre cada tarjeta
servicioCards.forEach(card => {
  card.addEventListener('click', () => {
    // Obtenemos el enlace del atributo data-link
    const link = card.getAttribute('data-link');
    // Redirigimos a la página
    window.location.href = link;
  });
});


// Para manejar envío del formulario con alerta de éxito
const form = document.getElementById('form-contacto');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recargar la página
  // Envía el formulario a Formspree
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok) {
      alert('Mensaje enviado correctamente. ¡Gracias!');
      form.reset();
    } else {
      alert('Hubo un error, intenta de nuevo.');
    }
  })
  .catch(error => alert('Hubo un error, intenta de nuevo.'));
});







// Filtro
function filtrar(categoria) {
  const productos = document.querySelectorAll(".card");
  productos.forEach(prod => {
    prod.style.display = (categoria === "todos" || prod.dataset.cat === categoria) ? "block" : "none";
  });
}




function buscarProductos() {
  const input = document.getElementById("buscador").value.toLowerCase();
  const productos = document.getElementById("productos").getElementsByClassName("card");

  for (let i = 0; i < productos.length; i++) {
    let nombre = productos[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    let descripcion = productos[i].getElementsByTagName("p")[0].innerText.toLowerCase();

    if (nombre.includes(input) || descripcion.includes(input)) {
      productos[i].style.display = "block";
    } else {
      productos[i].style.display = "none";
    }
  }
}
