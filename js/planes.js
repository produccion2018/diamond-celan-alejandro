// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");
const texts = {
  h1: document.querySelector(".limpieza-texto h1"),
  p1: document.querySelector(".limpieza-texto p"),
  h2Servicios: document.querySelectorAll(".limpieza-texto h2")[0],
  h2PorQue: document.querySelectorAll(".limpieza-texto h2")[1],
  ulServicios: document.querySelector(".limpieza-texto ul"),
  navLinks: document.querySelectorAll(".nav-links > li > a"),
  dropdownLinks: document.querySelectorAll(".dropdown-menu > li > a"),
  btnContacto: document.querySelector(".btn-contacto"),
};

const translations = {
  es: {
    h1: "NUESTROS PLANES DE LIMPIEZA",
    p1: "Descubre los planes de limpieza de DIAMOND CELAN, diseñados para adaptarse a tus necesidades. Garantizamos espacios impecables, saludables y organizados, cuidando cada detalle.",
    h2Servicios: "Planes Disponibles:",
    ulServicios: [
      "Plan Básico: Limpieza ligera semanal de áreas comunes y superficies.",
      "Plan Estándar: Limpieza completa semanal, incluyendo baños y cocina.",
      "Plan Premium: Limpieza profunda diaria con mantenimiento de alfombras y tapicería.",
      "Plan Corporativo: Servicio personalizado para oficinas y empresas, con supervisión periódica.",
      "Plan a Medida: Ajustamos la frecuencia y servicios según tus necesidades específicas."
    ],
    h2PorQue: "¿Por qué elegir nuestros planes?",
    navLinks: ["Inicio", "Limpieza Profesional ▾", "Planes", "Nosotros", "Cobertura", "Trabajá con nosotros"],
    dropdownLinks: [
      "Limpieza Profesional",
      "Hogares impecables, confianza total",
      "Limpieza que transforma tu hogar",
      "Tu hogar brilla con profesionalismo",
      "Confianza y calidad en cada rincón",
      "Tu espacio limpio, tu tranquilidad",
      "Servicio de Ama de Llaves",
      "Tu Perro, Nuestro Compromiso"
    ],
    btnContacto: "Contacto",
  },
  en: {
    h1: "OUR CLEANING PLANS",
    p1: "Discover DIAMOND CELAN cleaning plans, designed to fit your needs. We guarantee spotless, healthy, and organized spaces, paying attention to every detail.",
    h2Servicios: "Available Plans:",
    ulServicios: [
      "Basic Plan: Light weekly cleaning of common areas and surfaces.",
      "Standard Plan: Complete weekly cleaning, including bathrooms and kitchen.",
      "Premium Plan: Daily deep cleaning with carpet and upholstery maintenance.",
      "Corporate Plan: Personalized service for offices and businesses, with periodic supervision.",
      "Custom Plan: Frequency and services tailored to your specific needs."
    ],
    h2PorQue: "Why choose our plans?",
    navLinks: ["Home", "Professional Cleaning ▾", "Plans", "About Us", "Coverage", "Work with us"],
    dropdownLinks: [
      "Professional Cleaning",
      "Impeccable Homes, Total Trust",
      "Cleaning that Transforms Your Home",
      "Your Home Shines with Professionalism",
      "Trust and Quality in Every Corner",
      "Your Clean Space, Your Peace of Mind",
      "Housekeeping Service",
      "Your Dog, Our Commitment"
    ],
    btnContacto: "Contact",
  },
  nl: {
    h1: "ONZE REINIGINGSPLANNEN",
    p1: "Ontdek de reinigingsplannen van DIAMOND CELAN, ontworpen om aan uw behoeften te voldoen. We garanderen vlekkeloze, gezonde en georganiseerde ruimtes.",
    h2Servicios: "Beschikbare plannen:",
    ulServicios: [
      "Basisplan: Wekelijkse lichte reiniging van gemeenschappelijke ruimtes en oppervlakken.",
      "Standaardplan: Volledige wekelijkse reiniging, inclusief badkamers en keuken.",
      "Premiumplan: Dagelijkse diepe reiniging met onderhoud van tapijten en bekleding.",
      "Corporate Plan: Gepersonaliseerde service voor kantoren en bedrijven, met periodiek toezicht.",
      "Maatwerkplan: Frequentie en diensten aangepast aan uw specifieke behoeften."
    ],
    h2PorQue: "Waarom voor onze plannen kiezen?",
    navLinks: ["Home", "Professionele Reiniging ▾", "Plannen", "Over Ons", "Dekking", "Werk met ons"],
    dropdownLinks: [
      "Professionele Reiniging",
      "Onberispelijke Huizen, Volledig Vertrouwen",
      "Reiniging die uw Huis Transformeert",
      "Uw Huis Schittert met Professionaliteit",
      "Vertrouwen en Kwaliteit in Elk Hoekje",
      "Uw Schone Ruimte, Uw Rust",
      "Huishoudservice",
      "Uw Hond, Onze Verbintenis"
    ],
    btnContacto: "Contact",
  }
};

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  texts.h1.textContent = translations[lang].h1;
  texts.p1.textContent = translations[lang].p1;
  texts.h2Servicios.textContent = translations[lang].h2Servicios;
  texts.h2PorQue.textContent = translations[lang].h2PorQue;
  texts.btnContacto.textContent = translations[lang].btnContacto;

  texts.ulServicios.innerHTML = "";
  translations[lang].ulServicios.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    texts.ulServicios.appendChild(li);
  });

  texts.navLinks.forEach((link, i) => {
    link.textContent = translations[lang].navLinks[i];
  });

  texts.dropdownLinks.forEach((link, i) => {
    link.textContent = translations[lang].dropdownLinks[i];
  });
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});