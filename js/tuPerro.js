// Navbar responsive
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Traducciones nav
const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Limpieza Profesional ▾",
      "pro-clean": "Limpieza Profesional",
      housekeeping: "Servicio de Ama de Llaves",
      plans: "Planes",
      about: "Nosotros",
      coverage: "Cobertura",
      jobs: "Trabajá con nosotros",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Professional Cleaning ▾",
      "pro-clean": "Professional Cleaning",
      housekeeping: "Housekeeping Service",
      plans: "Plans",
      about: "About Us",
      coverage: "Coverage",
      jobs: "Work with us",
      contact: "Contact",
    },
  },
  nl: {
    nav: {
      home: "Startpagina",
      services: "Professionele Schoonmaak ▾",
      "pro-clean": "Professionele Schoonmaak",
      housekeeping: "Huishoudservice",
      plans: "Plannen",
      about: "Over ons",
      coverage: "Dekking",
      jobs: "Werken bij ons",
      contact: "Contact",
    },
  },
};

const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  if (!translations[lang]) return;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang].nav[key]) {
      el.textContent = translations[lang].nav[key];
    }
  });
});



// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});