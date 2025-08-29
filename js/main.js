// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Traducciones =====
const languageSelect = document.getElementById("language-select");

const translations = {
  es: {
    heroTitle: "EMPRESA DE LIMPIEZA PROFESIONAL",
    heroButton: "Contáctanos",
    instalaciones: "Conocé los detalles de las distintas instalaciones donde brindamos nuestro trabajo!",
    nav: ["Limpieza Profesional", "Planes", "Nosotros", "Cobertura", "Trabajá con nosotros"],
    cards: [
      { title: "Final de obra", desc: "Garantizamos satisfacción y eficacia para la limpieza.", btn: "Más información" },
      { title: "Industrias y fábricas", desc: "Ofrecemos un servicio personalizado para tu establecimiento.", btn: "Más información" },
      { title: "Establecimientos comerciales y retail", desc: "Seguridad y limpieza integral y continua del local en manos de profesionales.", btn: "Más información" },
      { title: "Oficinas", desc: "Mantenemos tus espacios de trabajo limpios y ordenados.", btn: "Más información" },
      { title: "Depósitos", desc: "Limpieza profunda de áreas de almacenamiento y logística.", btn: "Más información" },
      { title: "Eventos", desc: "Nos encargamos de la limpieza antes y después de cualquier evento.", btn: "Más información" }
    ],
    servicioTitle: "¿Qué es un servicio de limpieza profesional?",
    servicioDesc: "Un servicio de limpieza profesional consiste en realizar limpiezas meticulosas llevadas a cabo por profesionales capacitados en el área para limpiar, desinfectar e higienizar de manera adecuada. En Limptech, te aseguramos un servicio profesional mientras te garantizamos que tu espacio esté limpio y en buenas condiciones.",
    servicioWhy: "¿Por qué elegirnos?",
    servicioList: ["Institucional", "Hospitales, Sanatorios y Laboratorios", "Industrial y Fábricas", "Limpieza de Oficinas", "Hotelería", "Residencial y Consorcios", "Restaurantes", "Depósitos", "Final de Eventos", "Tratamiento de Pisos", "Limpieza de Alfombras", "Final de Obra"],
    expertosTitle: "¡Somos expertos en limpieza para todo tipo de ambiente, incluido el tuyo!",
    expertosCards: [
      { title: "Satisfacción Garantizada", desc: "Aseguramos resultados óptimos y sumamente profesionales que superan todas las expectativas." },
      { title: "Atención Personalizada", desc: "Ofrecemos un trato directo y horarios flexibles, nos adaptamos a todas tus necesidades." },
      { title: "Personal Capacitado", desc: "Profesionales altamente capacitados en técnicas de limpieza y manipulación de insumos sensibles." },
      { title: "Presupuesto Personalizado", desc: "Proveemos un servicio profesional que se adapta a tus expectativas y necesidades." }
    ],
    planesTitle: "Nuestros Planes",
    planesDesc: [
      "Nuestra prioridad como profesionales de la limpieza es proveer lugares de trabajo seguros e higiénicos.",
      "Contamos con insumos de primera calidad y técnicas de limpieza certificadas desde nuestros comienzos, y en la constante actualización de nuestro servicio hemos reforzado las capacitaciones a nuestros operarios.",
      "Contratar nuestra empresa es contar con la seguridad de que se está a la vanguardia en la lucha contra todo tipo de virus y bacterias."
    ],
    planesContact: "Contactanos y conoce el plan que tenemos para tu negocio:",
    footerContactTitle: "CONTACTO",
    footerEmail: "ventas@limpiezapro.com.ar",
    footerPhone1: "(011) 111111111",
    footerPhone2: "(011) 11111111",
    footerRights: "© 2025 LimpiezaPro - Todos los derechos reservados.",
    footerDesign: "Diseño web: Buenos Aires IT"
  },
  en: {
    heroTitle: "PROFESSIONAL CLEANING COMPANY",
    heroButton: "Contact us",
    instalaciones: "Discover the details of the different facilities where we provide our work!",
    nav: ["Professional Cleaning", "Plans", "About Us", "Coverage", "Work with us"],
    cards: [
      { title: "Post-Construction Cleaning", desc: "We guarantee satisfaction and efficiency in cleaning.", btn: "More info" },
      { title: "Industries & Factories", desc: "We provide personalized service for your establishment.", btn: "More info" },
      { title: "Commercial & Retail Spaces", desc: "Complete and continuous cleaning of your premises handled by professionals.", btn: "More info" },
      { title: "Offices", desc: "We keep your workspaces clean and organized.", btn: "More info" },
      { title: "Warehouses", desc: "Deep cleaning of storage and logistics areas.", btn: "More info" },
      { title: "Events", desc: "We handle cleaning before and after any event.", btn: "More info" }
    ],
    servicioTitle: "What is a professional cleaning service?",
    servicioDesc: "A professional cleaning service involves meticulous cleaning carried out by trained professionals to clean, disinfect, and sanitize properly. At Limptech, we provide a professional service while ensuring your space is clean and in excellent condition.",
    servicioWhy: "Why choose us?",
    servicioList: ["Institutional", "Hospitals, Clinics & Laboratories", "Industrial & Factories", "Office Cleaning", "Hospitality", "Residential & Condos", "Restaurants", "Warehouses", "Event Cleaning", "Floor Treatment", "Carpet Cleaning", "Post-Construction Cleaning"],
    expertosTitle: "We are cleaning experts for every type of environment, including yours!",
    expertosCards: [
      { title: "Guaranteed Satisfaction", desc: "We ensure optimal, highly professional results that exceed all expectations." },
      { title: "Personalized Attention", desc: "We offer direct service and flexible schedules, adapting to all your needs." },
      { title: "Trained Staff", desc: "Highly trained professionals in cleaning techniques and handling sensitive products." },
      { title: "Custom Quote", desc: "We provide professional service tailored to your expectations and needs." }
    ],
    planesTitle: "Our Plans",
    planesDesc: [
      "Our priority as cleaning professionals is to provide safe and hygienic workplaces.",
      "We use top-quality products and certified cleaning techniques from the beginning, constantly updating our service and training our staff.",
      "Hiring our company ensures you are at the forefront in the fight against all kinds of viruses and bacteria."
    ],
    planesContact: "Contact us and discover the plan we have for your business:",
    footerContactTitle: "CONTACT",
    footerEmail: "sales@limpiezapro.com.ar",
    footerPhone1: "(011) 111111111",
    footerPhone2: "(011) 11111111",
    footerRights: "© 2025 LimpiezaPro - All rights reserved.",
    footerDesign: "Web design: Buenos Aires IT"
  },
  nl: {
    heroTitle: "PROFESSIONEEL SCHOONMAAKBEDRIJF",
    heroButton: "Neem contact met ons op",
    instalaciones: "Ontdek de details van de verschillende faciliteiten waar wij ons werk leveren!",
    nav: ["Professionele Reiniging", "Plannen", "Over ons", "Dekking", "Werk met ons"],
    cards: [
      { title: "Eindschoonmaak", desc: "Wij garanderen tevredenheid en efficiëntie bij het schoonmaken.", btn: "Meer info" },
      { title: "Industrieën & Fabrieken", desc: "Wij bieden gepersonaliseerde service voor uw bedrijf.", btn: "Meer info" },
      { title: "Commerciële & Retailruimtes", desc: "Volledige en continue reiniging van uw pand door professionals.", btn: "Meer info" },
      { title: "Kantoren", desc: "Wij houden uw werkruimtes schoon en georganiseerd.", btn: "Meer info" },
      { title: "Magazijnen", desc: "Diepe reiniging van opslag- en logistieke gebieden.", btn: "Meer info" },
      { title: "Evenementen", desc: "Wij zorgen voor de schoonmaak voor en na elk evenement.", btn: "Meer info" }
    ],
    servicioTitle: "Wat is een professionele schoonmaakdienst?",
    servicioDesc: "Een professionele schoonmaakdienst omvat grondige reiniging uitgevoerd door getrainde professionals om op de juiste manier te reinigen, desinfecteren en saneren. Bij Limptech bieden we een professionele service en zorgen we dat uw ruimte schoon en in uitstekende staat is.",
    servicioWhy: "Waarom ons kiezen?",
    servicioList: ["Institutioneel", "Ziekenhuizen, Klinieken & Laboratoria", "Industrieel & Fabrieken", "Kantoorreiniging", "Gastvrijheid", "Residentieel & Verenigingen", "Restaurants", "Magazijnen", "Evenementenreiniging", "Vloerbehandeling", "Tapijtreiniging", "Eindschoonmaak"],
    expertosTitle: "Wij zijn schoonmaakexperts voor elk type omgeving, inclusief de uwe!",
    expertosCards: [
      { title: "Tevredenheid Gegarandeerd", desc: "Wij zorgen voor optimale, zeer professionele resultaten die alle verwachtingen overtreffen." },
      { title: "Persoonlijke Aandacht", desc: "Wij bieden directe service en flexibele werktijden, afgestemd op al uw behoeften." },
      { title: "Getraind Personeel", desc: "Hoogopgeleide professionals in schoonmaaktechnieken en het omgaan met gevoelige producten." },
      { title: "Aangepaste Offerte", desc: "Wij bieden professionele service die is afgestemd op uw verwachtingen en behoeften." }
    ],
    planesTitle: "Onze Plannen",
    planesDesc: [
      "Onze prioriteit als schoonmaakprofessionals is het bieden van veilige en hygiënische werkplekken.",
      "Wij gebruiken hoogwaardige producten en gecertificeerde schoonmaaktechnieken vanaf het begin, waarbij we onze service voortdurend updaten en ons personeel trainen.",
      "Het inhuren van ons bedrijf zorgt ervoor dat u voorop loopt in de strijd tegen alle soorten virussen en bacteriën."
    ],
    planesContact: "Neem contact met ons op en ontdek het plan dat we voor uw bedrijf hebben:",
    footerContactTitle: "CONTACT",
    footerEmail: "sales@limpiezapro.com.ar",
    footerPhone1: "(011) 111111111",
    footerPhone2: "(011) 11111111",
    footerRights: "© 2025 LimpiezaPro - Alle rechten voorbehouden.",
    footerDesign: "Webdesign: Buenos Aires IT"
  }
};

// ===== Cambio de idioma =====
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;

  // Hero
  document.querySelector(".hero-content h1").textContent = translations[lang].heroTitle;
  document.querySelector(".hero-content .btn-contacto").textContent = translations[lang].heroButton;

  // Instalaciones título
  document.querySelector(".instalaciones h2").textContent = translations[lang].instalaciones;

  // Navbar
  const navItems = document.querySelectorAll("#nav-links > li > a");
  navItems.forEach((item, i) => {
    if (translations[lang].nav[i]) item.textContent = translations[lang].nav[i];
  });

  // Cards Instalaciones
  const cards = document.querySelectorAll(".cards-container .card");
  cards.forEach((card, i) => {
    card.querySelector("h3").textContent = translations[lang].cards[i].title;
    card.querySelector("p").textContent = translations[lang].cards[i].desc;
    card.querySelector("button").textContent = translations[lang].cards[i].btn;
  });

  // Servicio
  document.querySelector(".servicio-texto h2").textContent = translations[lang].servicioTitle;
  document.querySelector(".servicio-texto p").textContent = translations[lang].servicioDesc;
  document.querySelector(".servicio-texto h3").textContent = translations[lang].servicioWhy;

  const listItems = document.querySelectorAll(".servicio-texto ul li");
  translations[lang].servicioList.forEach((text, i) => {
    if(listItems[i]) listItems[i].textContent = text;
  });

  // Expertos
  document.querySelector(".expertos h2").textContent = translations[lang].expertosTitle;
  const expCards = document.querySelectorAll(".expertos-container .card-exp");
  expCards.forEach((card, i) => {
    card.querySelector("h3").textContent = translations[lang].expertosCards[i].title;
    card.querySelector("p").textContent = translations[lang].expertosCards[i].desc;
  });

  // Planes
  document.querySelector(".planes-text h2").textContent = translations[lang].planesTitle;
  const planesPs = document.querySelectorAll(".planes-text p");
  translations[lang].planesDesc.forEach((text, i) => {
    if(planesPs[i]) planesPs[i].textContent = text;
  });
  document.querySelector(".planes-text h4").textContent = translations[lang].planesContact;

  // Footer
  document.querySelector(".footer-contact h4").textContent = translations[lang].footerContactTitle;
  document.querySelector(".footer-contact a[href^='mailto']").textContent = translations[lang].footerEmail;
  const phoneLinks = document.querySelectorAll(".footer-contact a[href^='tel']");
  phoneLinks[0].textContent = translations[lang].footerPhone1;
  phoneLinks[1].textContent = translations[lang].footerPhone2;
  document.querySelector(".footer-bottom p:first-child").textContent = translations[lang].footerRights;
  document.querySelector(".footer-bottom p:last-child").textContent = translations[lang].footerDesign;
});

// whatsapp
(function () {
  const wa = document.querySelector('.whatsapp-float');
  if (!wa) return;

  const langSel = document.getElementById('language-select');
  const number = '5491111111111'; // <-- tu número

  function msgFor(lang) {
    switch (lang) {
      case 'en': return 'Hello Diamond Clean, I would like a quote.';
      case 'nl': return 'Hallo Diamond Clean, ik wil graag een offerte.';
      default:   return 'Hola Diamond Clean, quiero pedir un presupuesto.';
    }
  }

  function updateLink() {
    const lang = (langSel && langSel.value) || 'es';
    const txt = encodeURIComponent(msgFor(lang));
    wa.setAttribute('href', `https://wa.me/${number}?text=${txt}`);
  }

  updateLink();
  if (langSel) langSel.addEventListener('change', updateLink);
})();





const playlist = [
  { title: "Compy Jazz", url: "https://freepd.com/music/Compy%20Jazz.mp3" },
  { title: "Martini Sunset", url: "https://freepd.com/music/Martini%20Sunset.mp3" },
  { title: "Groovin", url: "https://freepd.com/music/Groovin.mp3" },
  { title: "Bebop 25", url: "https://audionautix.com/Music/Bebop25.mp3" },
  { title: "Big Swing Band", url: "https://audionautix.com/Music/BigSwingBand.mp3" }
];

let current = 0;
const player = document.getElementById("jazzPlayer");
const titleElem = document.getElementById("trackTitle");

function loadTrack(index) {
  current = index;
  player.src = playlist[current].url;
  titleElem.textContent = playlist[current].title;
  player.play().catch(err => console.log("Reproducción automática bloqueada:", err));
}

player.addEventListener("ended", () => {
  loadTrack((current + 1) % playlist.length);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  loadTrack((current - 1 + playlist.length) % playlist.length);
});
document.getElementById("nextBtn").addEventListener("click", () => {
  loadTrack((current + 1) % playlist.length);
});

// Inicia en la primera pista
loadTrack(0);


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});
