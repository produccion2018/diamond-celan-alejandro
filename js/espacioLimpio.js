// ===== Menu hamburguesa =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById('language-select');

const translations = {
  es: {
    nav: {
      home: "Inicio",
      professional: "Limpieza Profesional ▾",
      submenu: [
        "Limpieza Profesional",
        "Hogares impecables, confianza total",
        "Limpieza que transforma tu hogar",
        "Tu hogar brilla con profesionalismo",
        "Confianza y calidad en cada rincón",
        "Tu espacio limpio, tu tranquilidad",
        "Servicio de Ama de Llaves",
        "Tu Perro, Nuestro Compromiso"
      ],
      plans: "Planes",
      about: "Nosotros",
      coverage: "Cobertura",
      work: "Trabajá con nosotros",
      contact: "Contacto"
    },
    title: "CONFIANZA Y CALIDAD EN CADA RINCÓN",
    paragraph1: "En DIAMOND CELAN nos especializamos en ofrecer limpieza profesional que transforma cualquier espacio. Garantizamos entornos higiénicos, organizados y agradables, cuidando cada detalle con dedicación.",
    servicesTitle: "Servicios Incluidos:",
    list: [
      "Limpieza completa de escritorios, sillas y áreas de trabajo",
      "Higienización profunda de baños y cocinas",
      "Mantenimiento de alfombras, tapicería y suelos",
      "Limpieza y brillo de vidrios, cristales y superficies",
      "Cuidado de áreas comunes y espacios de uso compartido"
    ],
    whyTitle: "¿Por qué elegirnos?",
    whyText: "Porque combinamos experiencia, tecnología de punta y personal confiable para garantizar resultados impecables y un ambiente saludable para su equipo."
  },
  en: {
    nav: {
      home: "Home",
      professional: "Professional Cleaning ▾",
      submenu: [
        "Professional Cleaning",
        "Impeccable Homes, Total Trust",
        "Cleaning that Transforms Your Home",
        "Your Home Shines with Professionalism",
        "Trust and Quality in Every Corner",
        "Your Clean Space, Your Peace",
        "Housekeeping Service",
        "Your Dog, Our Commitment"
      ],
      plans: "Plans",
      about: "About Us",
      coverage: "Coverage",
      work: "Work with Us",
      contact: "Contact"
    },
    title: "TRUST AND QUALITY IN EVERY CORNER",
    paragraph1: "At DIAMOND CELAN we specialize in professional cleaning that transforms any space. We guarantee hygienic, organized and pleasant environments, taking care of every detail with dedication.",
    servicesTitle: "Included Services:",
    list: [
      "Complete cleaning of desks, chairs and work areas",
      "Deep sanitation of bathrooms and kitchens",
      "Maintenance of carpets, upholstery and floors",
      "Cleaning and polishing of glass, windows and surfaces",
      "Care of common areas and shared spaces"
    ],
    whyTitle: "Why choose us?",
    whyText: "Because we combine experience, cutting-edge technology and reliable staff to ensure impeccable results and a healthy environment for your team."
  },
  nl: {
    nav: {
      home: "Startpagina",
      professional: "Professionele Schoonmaak ▾",
      submenu: [
        "Professionele Schoonmaak",
        "Onberispelijke Huizen, Volledig Vertrouwen",
        "Schoonmaak die je Huis Transformeert",
        "Je Huis Straalt met Professionaliteit",
        "Vertrouwen en Kwaliteit in Elk Hoekje",
        "Jouw Schone Ruimte, Jouw Rust",
        "Huismeester Service",
        "Jouw Hond, Onze Toewijding"
      ],
      plans: "Plannen",
      about: "Over Ons",
      coverage: "Dekking",
      work: "Werk met Ons",
      contact: "Contact"
    },
    title: "VERTROUWEN EN KWALITEIT IN ELK HOEKJE",
    paragraph1: "Bij DIAMOND CELAN specialiseren we ons in professionele schoonmaak die elke ruimte transformeert. We garanderen hygiënische, georganiseerde en prettige omgevingen en zorgen voor elk detail met toewijding.",
    servicesTitle: "Inbegrepen diensten:",
    list: [
      "Volledige reiniging van bureaus, stoelen en werkruimtes",
      "Diepgaande desinfectie van badkamers en keukens",
      "Onderhoud van tapijten, bekleding en vloeren",
      "Reiniging en glans van ramen, glas en oppervlakken",
      "Zorg voor gemeenschappelijke ruimtes en gedeelde ruimtes"
    ],
    whyTitle: "Waarom voor ons kiezen?",
    whyText: "Omdat we ervaring, geavanceerde technologie en betrouwbaar personeel combineren om onberispelijke resultaten en een gezonde omgeving voor uw team te garanderen."
  }
};

// Función que actualiza todo el contenido según el idioma seleccionado
languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  const texto = translations[lang];

  // ====== NAV ======
  const navItems = document.querySelectorAll(".nav-links > li > a");
  navItems[0].textContent = texto.nav.home;             // Inicio
  navItems[1].textContent = texto.nav.professional;     // Limpieza Profesional ▾
  navItems[2].textContent = texto.nav.plans;            // Planes
  navItems[3].textContent = texto.nav.about;            // Nosotros
  navItems[4].textContent = texto.nav.coverage;         // Cobertura
  navItems[5].textContent = texto.nav.work;             // Trabajá con nosotros

  // Submenú
  const submenuItems = document.querySelectorAll(".dropdown-menu li a");
  submenuItems.forEach((el, i) => {
    el.textContent = texto.nav.submenu[i];
  });

  // Botón contacto
  document.querySelector(".btn-contacto").textContent = texto.nav.contact;

  // ====== CONTENIDO ======
  document.querySelector(".limpieza-texto h1").textContent = texto.title;
  document.querySelector(".limpieza-texto p:nth-of-type(1)").textContent = texto.paragraph1;
  document.querySelector(".limpieza-texto h2:nth-of-type(1)").textContent = texto.servicesTitle;

  // Actualizar lista de servicios
  const ul = document.querySelector(".limpieza-texto ul");
  ul.innerHTML = "";
  texto.list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  // Actualizar segundo título y párrafo
  document.querySelector(".limpieza-texto h2:nth-of-type(2)").textContent = texto.whyTitle;
  document.querySelector(".limpieza-texto p:nth-of-type(2)").textContent = texto.whyText;
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});