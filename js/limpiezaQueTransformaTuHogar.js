// ===== Traducciones =====
const translations = {
  es: {
    title: "HOGARES IMPECABLES",
    paragraph1: "Brindamos un servicio especializado en limpieza de hogares, asegurando espacios higiénicos y confortables. Garantizamos un ambiente seguro y agradable para su familia, cuidando cada detalle del hogar.",
    servicesTitle: "Servicios Incluidos:",
    service1: "Limpieza de pisos y superficies",
    service2: "Desinfección de baños y cocinas",
    service3: "Limpieza de muebles y electrodomésticos",
    service4: "Organización de espacios",
    service5: "Mantenimiento general del hogar",
    whyTitle: "¿Por qué elegirnos?",
    whyText: "Porque entendemos la importancia de un hogar limpio y seguro, ofreciendo personal confiable y técnicas avanzadas de limpieza.",
    nav: {
      inicio: "Inicio",
      limpieza: "Limpieza Profesional ▾",
      profesional: "Limpieza Profesional",
      impecable: "Hogares impecables, confianza total",
      transforma: "Limpieza que transforma tu hogar",
      brilla: "Tu hogar brilla con profesionalismo",
      confianza: "Confianza y calidad en cada rincón",
      espacio: "Tu espacio limpio, tu tranquilidad",
      ama: "Servicio de Ama de Llaves",
      perro: "Tu Perro, Nuestro Compromiso",
      planes: "Planes",
      nosotros: "Nosotros",
      cobertura: "Cobertura",
      trabaja: "Trabajá con nosotros",
      contacto: "Contacto"
    }
  },
  en: {
    title: "IMPECCABLE HOMES",
    paragraph1: "We provide specialized home cleaning services, ensuring hygienic and comfortable spaces. We guarantee a safe and pleasant environment for your family, taking care of every detail in your home.",
    servicesTitle: "Services Included:",
    service1: "Cleaning of floors and surfaces",
    service2: "Disinfection of bathrooms and kitchens",
    service3: "Cleaning of furniture and appliances",
    service4: "Organization of spaces",
    service5: "General home maintenance",
    whyTitle: "Why choose us?",
    whyText: "Because we understand the importance of a clean and safe home, offering reliable staff and advanced cleaning techniques.",
    nav: {
      inicio: "Home",
      limpieza: "Professional Cleaning ▾",
      profesional: "Professional Cleaning",
      impecable: "Impeccable Homes",
      transforma: "Cleaning that Transforms Your Home",
      brilla: "Your Home Shines with Professionalism",
      confianza: "Trust and Quality in Every Corner",
      espacio: "Clean Space, Peace of Mind",
      ama: "Housekeeping Service",
      perro: "Your Dog, Our Commitment",
      planes: "Plans",
      nosotros: "About Us",
      cobertura: "Coverage",
      trabaja: "Work with Us",
      contacto: "Contact"
    }
  },
  nl: {
    title: "ONBERISPELIJKE HUIZEN",
    paragraph1: "Wij bieden gespecialiseerde schoonmaakdiensten voor huizen, zodat ruimtes hygiënisch en comfortabel zijn. Wij garanderen een veilige en aangename omgeving voor uw gezin, met aandacht voor elk detail van het huis.",
    servicesTitle: "Inbegrepen diensten:",
    service1: "Reiniging van vloeren en oppervlakken",
    service2: "Desinfectie van badkamers en keukens",
    service3: "Reiniging van meubels en apparaten",
    service4: "Organisatie van ruimtes",
    service5: "Algemeen huishoudelijk onderhoud",
    whyTitle: "Waarom ons kiezen?",
    whyText: "Omdat we het belang van een schoon en veilig huis begrijpen, met betrouwbaar personeel en geavanceerde schoonmaaktechnieken.",
    nav: {
      inicio: "Startpagina",
      limpieza: "Professionele Schoonmaak ▾",
      profesional: "Professionele Schoonmaak",
      impecable: "Onberispelijke Huizen",
      transforma: "Schoonmaak die uw huis transformeert",
      brilla: "Uw huis straalt professionaliteit uit",
      confianza: "Vertrouwen en kwaliteit in elke hoek",
      espacio: "Schone ruimte, gemoedsrust",
      ama: "Huishoudservice",
      perro: "Uw hond, onze toewijding",
      planes: "Plannen",
      nosotros: "Over ons",
      cobertura: "Bereik",
      trabaja: "Werk met ons",
      contacto: "Contact"
    }
  }
};

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  const texts = translations[lang];

  // Contenido principal
  document.querySelector(".limpieza-texto h1").textContent = texts.title;
  const paragraphs = document.querySelectorAll(".limpieza-texto p");
  paragraphs[0].textContent = texts.paragraph1;
  paragraphs[1].textContent = texts.whyText;

  const subtitles = document.querySelectorAll(".limpieza-texto h2");
  subtitles[0].textContent = texts.servicesTitle;
  subtitles[1].textContent = texts.whyTitle;

  const listItems = document.querySelectorAll(".limpieza-texto ul li");
  listItems[0].textContent = texts.service1;
  listItems[1].textContent = texts.service2;
  listItems[2].textContent = texts.service3;
  listItems[3].textContent = texts.service4;
  listItems[4].textContent = texts.service5;

  // Navegación
  const nav = texts.nav;
  document.querySelector(".nav-links > li:nth-child(1) > a").textContent = nav.inicio;
  const dropdown = document.querySelector(".nav-links .dropdown > a");
  dropdown.textContent = nav.limpieza;
  const dropdownItems = document.querySelectorAll(".dropdown-menu li a");
  dropdownItems[0].textContent = nav.profesional;
  dropdownItems[1].textContent = nav.impecable;
  dropdownItems[2].textContent = nav.transforma;
  dropdownItems[3].textContent = nav.brilla;
  dropdownItems[4].textContent = nav.confianza;
  dropdownItems[5].textContent = nav.espacio;
  dropdownItems[6].textContent = nav.ama;
  dropdownItems[7].textContent = nav.perro;
  document.querySelector(".nav-links > li:nth-child(3) > a").textContent = nav.planes;
  document.querySelector(".nav-links > li:nth-child(4) > a").textContent = nav.nosotros;
  document.querySelector(".nav-links > li:nth-child(5) > a").textContent = nav.cobertura;
  document.querySelector(".nav-links > li:nth-child(6) > a").textContent = nav.trabaja;
  document.querySelector(".btn-contacto").textContent = nav.contacto;
});

// ===== Menú hamburguesa y dropdown =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    navLinks.classList.remove('active');
    dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
  }
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});