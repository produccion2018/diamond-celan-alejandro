// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;

  // Cambiar todo el contenido con atributos data-es/data-en/data-nl
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// ===== Botón contacto =====
document.getElementById("btn-contacto").addEventListener("click", () => {
  alert("Gracias por contactarnos, pronto te responderemos.");
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});