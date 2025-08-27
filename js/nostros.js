document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");

  // ===== Crear botón hamburguesa solo para móviles =====
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector(".navbar-limpieza").insertBefore(menuToggle, navLinks);

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ===== Cambio de idioma =====
  const languageSelect = document.getElementById("language-select");
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
      sobreTitulo: "Sobre DIAMOND CELAN",
      sobreTexto: "Somos una empresa líder en servicios de limpieza, combinando experiencia, profesionalismo y tecnología para ofrecer ambientes impecables a hogares y empresas.",
      mision: "Nuestra Misión",
      misionTexto: "Brindar servicios de limpieza de alta calidad que garanticen espacios seguros, higiénicos y agradables para nuestros clientes.",
      vision: "Nuestra Visión",
      visionTexto: "Ser la empresa de limpieza más confiable y reconocida en la región, destacándonos por innovación, eficiencia y compromiso.",
      valores: "Valores",
      valoresLista: [
        "Profesionalismo y responsabilidad",
        "Honestidad y transparencia",
        "Calidad y excelencia en el servicio",
        "Compromiso con el cliente",
        "Respeto por el medio ambiente"
      ]
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
      sobreTitulo: "About DIAMOND CELAN",
      sobreTexto: "We are a leading cleaning company, combining experience, professionalism, and technology to provide impeccable environments for homes and businesses.",
      mision: "Our Mission",
      misionTexto: "Provide high-quality cleaning services that ensure safe, hygienic, and pleasant spaces for our clients.",
      vision: "Our Vision",
      visionTexto: "Be the most reliable and recognized cleaning company in the region, standing out for innovation, efficiency, and commitment.",
      valores: "Values",
      valoresLista: [
        "Professionalism and responsibility",
        "Honesty and transparency",
        "Quality and service excellence",
        "Client commitment",
        "Respect for the environment"
      ]
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
      sobreTitulo: "Over DIAMOND CELAN",
      sobreTexto: "Wij zijn een toonaangevend schoonmaakbedrijf dat ervaring, professionaliteit en technologie combineert om onberispelijke omgevingen voor huizen en bedrijven te bieden.",
      mision: "Onze Missie",
      misionTexto: "Het leveren van hoogwaardige schoonmaakdiensten die veilige, hygiënische en aangename ruimtes voor onze klanten garanderen.",
      vision: "Onze Visie",
      visionTexto: "Het meest betrouwbare en erkende schoonmaakbedrijf in de regio zijn, met onderscheid op het gebied van innovatie, efficiëntie en toewijding.",
      valores: "Waarden",
      valoresLista: [
        "Professionaliteit en verantwoordelijkheid",
        "Eerlijkheid en transparantie",
        "Kwaliteit en service-uitmuntendheid",
        "Toewijding aan de klant",
        "Respect voor het milieu"
      ]
    }
  };

  languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    const t = translations[lang];

    document.querySelector('a[href="../index.html"]').textContent = t.inicio;
    document.querySelector('.dropdown > a').textContent = t.limpieza;
    const dropdownItems = document.querySelectorAll('.dropdown-menu li a');
    dropdownItems[0].textContent = t.limpiezaProfesional;
    dropdownItems[1].textContent = t.hogares;
    dropdownItems[2].textContent = t.limpiezaHogar;
    dropdownItems[3].textContent = t.hogarBrilla;
    dropdownItems[4].textContent = t.confianza;
    dropdownItems[5].textContent = t.espacioLimpio;
    dropdownItems[6].textContent = t.amaDeLlaves;
    dropdownItems[7].textContent = t.tuPerro;

    document.querySelector('a[href="./planes.html"]').textContent = t.planes;
    document.querySelector('a[href="./nostros.html"]').textContent = t.nosotros;
    document.querySelector('a[href="cobertura.html"]').textContent = t.cobertura;
    document.querySelector('a[href="./trabajaConNosotros.html"]').textContent = t.trabaja;
    document.querySelector('.btn-contacto').textContent = t.contactoBtn;

    document.querySelector('.nosotros-intro h1').textContent = t.sobreTitulo;
    document.querySelector('.nosotros-intro p').textContent = t.sobreTexto;
    document.querySelector('.card-mision h2').textContent = t.mision;
    document.querySelector('.card-mision p').textContent = t.misionTexto;
    document.querySelector('.card-vision h2').textContent = t.vision;
    document.querySelector('.card-vision p').textContent = t.visionTexto;
    document.querySelector('.card-valores h2').textContent = t.valores;

    const valoresLi = document.querySelectorAll('.card-valores ul li');
    valoresLi.forEach((li, i) => li.textContent = t.valoresLista[i]);
  });

  // ===== Ajustar tamaño del botón y select =====
  const btn = document.querySelector('.btn-contacto');
  btn.style.padding = "5px 10px";
  btn.style.fontSize = "14px";

  languageSelect.style.padding = "3px 6px";
  languageSelect.style.fontSize = "12px";
});
