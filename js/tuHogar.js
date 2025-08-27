// ===== Menu hamburguesa responsive =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;

  // Cambiar todos los elementos con data-es
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

