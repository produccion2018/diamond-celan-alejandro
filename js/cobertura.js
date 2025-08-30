document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    es: {
      inicio: "Inicio",
      limpieza: "Limpieza Profesional ▾",
      limpiezaProfesional: "Limpieza Profesional",
      hogares: "Hogares impecables, confianza total",
      limpiezaHogar: "Limpieza que transforma tu hogar",
      hogarBrilla: "Tu hogar brilla con profesionalismo",
      confianza: "Confianza y calidad en cada rincón",
      espacioLimpio: "Tu espacio limpio, tu tranquilidad",
      amaDeLlaves: "Servicio de Ama de Llaves",
      tuPerro: "Tu Perro, Nuestro Compromiso",
      planes: "Planes",
      nosotros: "Nosotros",
      cobertura: "Cobertura",
      trabaja: "Trabajá con nosotros",
      contactoBtn: "Contacto",
      coberturaTitulo: "Cobertura",
      coberturaTexto: "Ofrecemos servicios en diversas áreas, garantizando limpieza profesional en cada rincón de tu hogar u oficina.",
      card1Titulo: "Zona Norte",
      card1Texto: "Atendemos todos los barrios del norte, ofreciendo limpieza integral y personalizada.",
      card2Titulo: "Zona Sur",
      card2Texto: "Servicios confiables y profesionales en toda la zona sur, adaptados a tus necesidades.",
      card3Titulo: "Zona Oeste",
      card3Texto: "Limpieza de hogares y oficinas con los más altos estándares de calidad en la zona oeste.",
      sobreMiTitulo: "Sobre Nosotros",
      sobreMiTexto: "Nuestra empresa se especializa en brindar servicios de limpieza profesional para hogares y oficinas, asegurando confianza y calidad.",
      footerContacto: "Contáctanos",
      footerTexto: "Toonaangevend bedrijf in de commerciële schoonmaakbranche, gesteund door meer dan 1 jaar ervaring."
    },
    en: {
      inicio: "Home",
      limpieza: "Professional Cleaning ▾",
      limpiezaProfesional: "Professional Cleaning",
      hogares: "Impeccable Homes, Total Trust",
      limpiezaHogar: "Cleaning that Transforms Your Home",
      hogarBrilla: "Your Home Shines with Professionalism",
      confianza: "Trust and Quality in Every Corner",
      espacioLimpio: "Your Clean Space, Your Peace of Mind",
      amaDeLlaves: "Housekeeper Service",
      tuPerro: "Your Dog, Our Commitment",
      planes: "Plans",
      nosotros: "About Us",
      cobertura: "Coverage",
      trabaja: "Work with Us",
      contactoBtn: "Contact",
      coberturaTitulo: "Coverage",
      coberturaTexto: "We provide services in various areas, ensuring professional cleaning in every corner of your home or office.",
      card1Titulo: "North Zone",
      card1Texto: "We cover all neighborhoods in the north, offering comprehensive and personalized cleaning.",
      card2Titulo: "South Zone",
      card2Texto: "Reliable and professional services throughout the south zone, adapted to your needs.",
      card3Titulo: "West Zone",
      card3Texto: "Cleaning homes and offices with the highest quality standards in the west zone.",
      sobreMiTitulo: "About Us",
      sobreMiTexto: "Our company specializes in providing professional cleaning services for homes and offices, ensuring trust and quality.",
      footerContacto: "Contact Us",
      footerTexto: "Leading company in commercial cleaning, supported by over 1 year of experience."
    },
    nl: {
      inicio: "Home",
      limpieza: "Professionele Schoonmaak ▾",
      limpiezaProfesional: "Professionele Schoonmaak",
      hogares: "Onberispelijke Huizen, Volledig Vertrouwen",
      limpiezaHogar: "Schoonmaak die je huis transformeert",
      hogarBrilla: "Je huis straalt professionaliteit uit",
      confianza: "Vertrouwen en Kwaliteit in Elke Hoek",
      espacioLimpio: "Je schone ruimte, je gemoedsrust",
      amaDeLlaves: "Huishoudster Dienst",
      tuPerro: "Je Hond, Onze Toewijding",
      planes: "Plannen",
      nosotros: "Over Ons",
      cobertura: "Dekking",
      trabaja: "Werk met Ons",
      contactoBtn: "Contact",
      coberturaTitulo: "Dekking",
      coberturaTexto: "Wij bieden diensten aan in verschillende gebieden, met professionele schoonmaak in elk hoekje van uw huis of kantoor.",
      card1Titulo: "Noord Zone",
      card1Texto: "We bedienen alle wijken in het noorden, met uitgebreide en gepersonaliseerde reiniging.",
      card2Titulo: "Zuid Zone",
      card2Texto: "Betrouwbare en professionele diensten in het hele zuidelijke gebied, aangepast aan uw behoeften.",
      card3Titulo: "West Zone",
      card3Texto: "Reiniging van huizen en kantoren met de hoogste kwaliteitsnormen in het westen.",
      sobreMiTitulo: "Over Ons",
      sobreMiTexto: "Ons bedrijf is gespecialiseerd in het bieden van professionele schoonmaakdiensten voor huizen en kantoren, met vertrouwen en kwaliteit.",
      footerContacto: "Contact",
      footerTexto: "Toonaangevend bedrijf in de commerciële schoonmaakbranche, gesteund door meer dan 1 jaar ervaring."
    }
  };

  // Función para actualizar textos
  function updateTexts(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
  }

  // Cambio de idioma
  const languageSelect = document.getElementById("language-select");
  languageSelect.addEventListener("change", e => updateTexts(e.target.value));

  // Inicializar idioma por defecto
  updateTexts(languageSelect.value);

  // Botón contacto
  document.querySelectorAll(".btn-contacto").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta Diamond Clean&body=Hola Mauro, quiero más información sobre tus servicios.";
    });
  });

  // Botón hamburguesa
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector(".navbar-limpieza").insertBefore(menuToggle, navLinks);
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

});
