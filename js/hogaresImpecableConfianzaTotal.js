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
