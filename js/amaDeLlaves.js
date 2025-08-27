// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Dropdown en mobile =====
document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.classList.toggle("show");
    }
  });
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");

const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Limpieza Profesional ▾",
      "pro-clean": "Limpieza Profesional",
      "final-work": "Limpieza Final de Obras",
      office: "Limpieza de Oficinas",
      deposit: "Limpieza de Depósito",
      retail: "Establecimientos Comerciales y Retailes",
      events: "Limpieza Final de Eventos",
      housekeeping: "Servicio Ama de Llaves",
      plans: "Planes",
      about: "Nosotros",
      coverage: "Cobertura",
      jobs: "Trabajá con nosotros",
      contact: "Contacto",
    },
    title: "CONFÍA TU HOGAR A NUESTRO SERVICIO AMA DE LLAVES",
    paragraph1:
      "En DIAMOND CELAN ofrecemos un servicio integral de ama de llaves que asegura la limpieza, organización y cuidado completo de su hogar. Nuestro personal altamente capacitado garantiza un ambiente seguro y confortable.",
    servicesTitle: "Servicios Incluidos:",
    servicesList: [
      "Limpieza y orden de todas las habitaciones",
      "Cuidado de la cocina, baños y áreas comunes",
      "Mantenimiento de ropa y textiles del hogar",
      "Apoyo en organización y tareas domésticas",
      "Atención personalizada según sus necesidades",
    ],
    whyTitle: "¿Por qué elegirnos?",
    whyText:
      "Porque combinamos experiencia, confiabilidad y atención al detalle para que su hogar siempre esté impecable y usted pueda disfrutar de tranquilidad total.",
  },
  en: {
    nav: {
      home: "Home",
      services: "Professional Cleaning ▾",
      "pro-clean": "Professional Cleaning",
      "final-work": "Final Construction Cleaning",
      office: "Office Cleaning",
      deposit: "Warehouse Cleaning",
      retail: "Commercial & Retail",
      events: "Event Cleaning",
      housekeeping: "Housekeeping Service",
      plans: "Plans",
      about: "About Us",
      coverage: "Coverage",
      jobs: "Work with us",
      contact: "Contact",
    },
    title: "TRUST YOUR HOME TO OUR HOUSEKEEPING SERVICE",
    paragraph1:
      "At DIAMOND CELAN we offer a comprehensive housekeeping service that ensures cleaning, organization, and complete care of your home. Our highly trained staff guarantees a safe and comfortable environment.",
    servicesTitle: "Included Services:",
    servicesList: [
      "Cleaning and tidying all rooms",
      "Care of kitchen, bathrooms, and common areas",
      "Maintenance of clothing and home textiles",
      "Support in organization and domestic tasks",
      "Personalized attention according to your needs",
    ],
    whyTitle: "Why choose us?",
    whyText:
      "Because we combine experience, reliability, and attention to detail so that your home is always spotless and you can enjoy total peace of mind.",
  },
  nl: {
    nav: {
      home: "Startpagina",
      services: "Professionele Schoonmaak ▾",
      "pro-clean": "Professionele Schoonmaak",
      "final-work": "Eindschoonmaak Bouw",
      office: "Kantoorschoonmaak",
      deposit: "Magazijnreiniging",
      retail: "Winkels & Retail",
      events: "Evenementenreiniging",
      housekeeping: "Huishoudservice",
      plans: "Plannen",
      about: "Over ons",
      coverage: "Dekking",
      jobs: "Werken bij ons",
      contact: "Contact",
    },
    title: "VERTROUW JE HUIS TOE AAN ONZE HUISMEIDEN SERVICE",
    paragraph1:
      "Bij DIAMOND CELAN bieden we een volledige huishoudservice die zorgt voor reiniging, organisatie en volledige verzorging van uw huis. Ons hoogopgeleide personeel garandeert een veilige en comfortabele omgeving.",
    servicesTitle: "Inclusief Diensten:",
    servicesList: [
      "Schoonmaken en opruimen van alle kamers",
      "Zorg voor keuken, badkamers en gemeenschappelijke ruimtes",
      "Onderhoud van kleding en huistextiel",
      "Ondersteuning bij organisatie en huishoudelijke taken",
      "Persoonlijke aandacht volgens uw wensen",
    ],
    whyTitle: "Waarom kiezen voor ons?",
    whyText:
      "Omdat we ervaring, betrouwbaarheid en oog voor detail combineren, zodat uw huis altijd schoon is en u volledige gemoedsrust kunt ervaren.",
  },
};

// Detecta cambio de idioma
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;

  if (!translations[lang]) return;

  // Navbar
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang].nav[key]) {
      el.textContent = translations[lang].nav[key];
    }
  });

  // Contenido principal
  const textSection = document.querySelector(".limpieza-texto");
  if (textSection) {
    textSection.querySelector("h1").textContent = translations[lang].title;
    textSection.querySelector("p").textContent =
      translations[lang].paragraph1;
    textSection.querySelectorAll("h2")[0].textContent =
      translations[lang].servicesTitle;
    textSection.querySelectorAll("li").forEach((li, i) => {
      li.textContent =
        translations[lang].servicesList[i] || li.textContent;
    });
    textSection.querySelectorAll("h2")[1].textContent =
      translations[lang].whyTitle;
    textSection.querySelectorAll("p")[1].textContent =
      translations[lang].whyText;
  }
});
