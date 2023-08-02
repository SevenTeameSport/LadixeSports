// Función para habilitar el desplazamiento suave al hacer clic en los enlaces
function enableSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a.scroll-down');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Función para mostrar el contenido de la página una vez que se ha cargado completamente
function showPageContent() {
  document.body.style.opacity = 1;
}

// Evento DOMContentLoaded para habilitar el desplazamiento suave al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  enableSmoothScroll();
});

// Evento load para mostrar el contenido de la página una vez que se ha cargado completamente
window.addEventListener('load', showPageContent);
