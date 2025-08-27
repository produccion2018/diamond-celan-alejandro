// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Cambio de idioma =====
const languageSelect = document.getElementById("language-select");

const translations = {
  es: {
    heroTitle: "EMPRESA DE LIMPIEZA PROFESIONAL",
    heroButton: "Contáctanos",
    instalaciones: "Conocé los detalles de las distintas instalaciones donde brindamos nuestro trabajo!",
    nav: ["Limpieza Profesional", "Planes", "Nosotros", "Cobertura", "Trabajá con nosotros"]
  },
  en: {
    heroTitle: "PROFESSIONAL CLEANING COMPANY",
    heroButton: "Contact us",
    instalaciones: "Discover the details of the different facilities where we provide our work!",
    nav: ["Professional Cleaning", "Plans", "About Us", "Coverage", "Work with us"]
  },
  nl: {
    heroTitle: "PROFESSIONEEL SCHOONMAAKBEDRIJF",
    heroButton: "Neem contact met ons op",
    instalaciones: "Ontdek de details van de verschillende faciliteiten waar wij ons werk leveren!",
    nav: ["Professionele Reiniging", "Plannen", "Over ons", "Dekking", "Werk met ons"]
  },
};

languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;

  // Hero
  document.querySelector(".hero-content h1").textContent = translations[lang].heroTitle;
  document.querySelector(".hero-content .btn-contacto").textContent = translations[lang].heroButton;

  // Instalaciones título
  document.querySelector(".instalaciones h2").textContent = translations[lang].instalaciones;

  // Navbar (ajustamos los primeros li visibles, sin dropdowns)
  const navItems = document.querySelectorAll("#nav-links > li > a");
  navItems.forEach((item, i) => {
    if (translations[lang].nav[i]) {
      item.textContent = translations[lang].nav[i];
    }
  });
});

// ===== Botón flotante de WhatsApp =====
const whatsappButton = document.createElement("a");
whatsappButton.href = "https://wa.me/5491125687707"; // <-- tu número real en formato internacional
whatsappButton.target = "_blank";
whatsappButton.innerHTML = "💬";
whatsappButton.style.position = "fixed";
whatsappButton.style.bottom = "20px";
whatsappButton.style.right = "20px";
whatsappButton.style.background = "#25d366";
whatsappButton.style.color = "white";
whatsappButton.style.fontSize = "28px";
whatsappButton.style.width = "55px";
whatsappButton.style.height = "55px";
whatsappButton.style.borderRadius = "50%";
whatsappButton.style.display = "flex";
whatsappButton.style.justifyContent = "center";
whatsappButton.style.alignItems = "center";
whatsappButton.style.boxShadow = "0 4px 6px hsla(0, 0%, 0%, 0.20)";
whatsappButton.style.zIndex = "1000";
whatsappButton.style.textDecoration = "none";
whatsappButton.style.transition = "transform 0.3s ease";

whatsappButton.addEventListener("mouseover", () => {
  whatsappButton.style.transform = "scale(1.1)";
});
whatsappButton.addEventListener("mouseout", () => {
  whatsappButton.style.transform = "scale(1)";
});

document.body.appendChild(whatsappButton);
