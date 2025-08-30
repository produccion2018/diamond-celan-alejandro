// ===== Menu hamburguesa =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-text-es]').forEach(el => {
    if(lang === 'es') el.textContent = el.dataset.textEs;
    if(lang === 'en') el.textContent = el.dataset.textEn;
    if(lang === 'nl') el.textContent = el.dataset.textNl;
  });
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});