// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");

// Mapear los textos a cambiar por id o clase
const texts = {
  h1: document.querySelector(".limpieza-texto h1"),
  p1: document.querySelector(".limpieza-texto p"),
  h2Servicios: document.querySelectorAll(".limpieza-texto h2")[0],
  h2PorQue: document.querySelectorAll(".limpieza-texto h2")[1],
  ulServicios: document.querySelector(".limpieza-texto ul"),
  navLinks: document.querySelectorAll(".nav-links > li > a"), // links principales
  dropdownLinks: document.querySelectorAll(".dropdown-menu > li > a"), // links del dropdown
  btnContacto: document.querySelector(".btn-contacto"),
};

// Traducciones
const translations = {
  es: {
    h1: "CONFIANZA Y CALIDAD EN CADA RINCÓN",
    p1: "En DIAMOND CELAN nos especializamos en ofrecer limpieza profesional que transforma cualquier espacio. Garantizamos entornos higiénicos, organizados y agradables, cuidando cada detalle con dedicación.",
    h2Servicios: "Servicios Incluidos:",
    ulServicios: [
      "Limpieza completa de escritorios, sillas y áreas de trabajo",
      "Higienización profunda de baños y cocinas",
      "Mantenimiento de alfombras, tapicería y suelos",
      "Limpieza y brillo de vidrios, cristales y superficies",
      "Cuidado de áreas comunes y espacios de uso compartido"
    ],
    h2PorQue: "¿Por qué elegirnos?",
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
    h1: "TRUST AND QUALITY IN EVERY CORNER",
    p1: "At DIAMOND CELAN we specialize in providing professional cleaning that transforms any space. We guarantee hygienic, organized, and pleasant environments, paying attention to every detail with dedication.",
    h2Servicios: "Included Services:",
    ulServicios: [
      "Complete cleaning of desks, chairs and work areas",
      "Deep cleaning of bathrooms and kitchens",
      "Maintenance of carpets, upholstery and floors",
      "Cleaning and polishing of windows, glass and surfaces",
      "Care of common areas and shared spaces"
    ],
    h2PorQue: "Why choose us?",
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
    h1: "VERTROUWEN EN KWALITEIT IN ELK HOEKJE",
    p1: "Bij DIAMOND CELAN zijn we gespecialiseerd in professionele reiniging die elke ruimte transformeert. We garanderen hygiënische, georganiseerde en aangename omgevingen, waarbij we op elk detail letten.",
    h2Servicios: "Inbegrepen diensten:",
    ulServicios: [
      "Volledige reiniging van bureaus, stoelen en werkruimtes",
      "Diepe reiniging van badkamers en keukens",
      "Onderhoud van tapijten, bekleding en vloeren",
      "Reiniging en glans van ramen, glas en oppervlakken",
      "Zorg voor gemeenschappelijke ruimtes en gedeelde ruimtes"
    ],
    h2PorQue: "Waarom voor ons kiezen?",
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

  // Cambiar textos principales
  texts.h1.textContent = translations[lang].h1;
  texts.p1.textContent = translations[lang].p1;
  texts.h2Servicios.textContent = translations[lang].h2Servicios;
  texts.h2PorQue.textContent = translations[lang].h2PorQue;
  texts.btnContacto.textContent = translations[lang].btnContacto;

  // Cambiar lista de servicios
  texts.ulServicios.innerHTML = "";
  translations[lang].ulServicios.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    texts.ulServicios.appendChild(li);
  });

  // Cambiar nav principal
  texts.navLinks.forEach((link, i) => {
    link.textContent = translations[lang].navLinks[i];
  });

  // Cambiar links del dropdown
  texts.dropdownLinks.forEach((link, i) => {
    link.textContent = translations[lang].dropdownLinks[i];
  });
});
