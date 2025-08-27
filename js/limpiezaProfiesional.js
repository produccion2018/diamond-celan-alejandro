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
