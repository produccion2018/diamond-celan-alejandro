document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const popupImg = document.getElementById("popupImg");
  const popupClose = document.getElementById("popupClose");

  // Datos de cada instalación
  const infoData = {
    "final-obra": {
      title: "Final de Obra",
      text: "Garantizamos satisfacción y eficacia en cada limpieza post-obra.",
      img: "./img/imagen alejo/finalizacion de obras.jpeg"
    },
    "industrial": {
      title: "Industrias y Fábricas",
      text: "Servicio personalizado adaptado a cada tipo de industria.",
      img: "./img/imagen alejo/Industrias y fábricas.png"
    },
    "comerciales": {
      title: "Establecimientos Comerciales",
      text: "Seguridad y limpieza integral para locales y retail.",
      img: "./img/imagen alejo/establecimientos comerciales.png"
    },
    "oficinas": {
      title: "Oficinas",
      text: "Espacios de trabajo limpios, ordenados y profesionales.",
      img: "./img/imagen alejo/oficinas.png"
    },
    "depositos": {
      title: "Depósitos",
      text: "Limpieza profunda de áreas de almacenamiento y logística.",
      img: "./img/imagen alejo/depositos.png"
    },
    "eventos": {
      title: "Eventos",
      text: "Nos encargamos de la limpieza antes y después de cualquier evento.",
      img: "./img/imagen alejo/eventos.png"
    }
  };

  // Abrir popup al hacer clic
  document.querySelectorAll(".btn-info").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-info");
      const data = infoData[key];

      if (data) {
        popupTitle.textContent = data.title;
        popupText.textContent = data.text;
        popupImg.src = data.img;
        popupImg.alt = data.title;
        popup.style.display = "flex";
      }
    });
  });

  // Cerrar popup
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar popup al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});


// Funcionalidad para los botones de contacto
document.querySelectorAll(".btn-contacto").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "mailto:mauroalexanderpinto@gmail.com?subject=Consulta%20Diamond%20Clean&body=Hola%20Mauro%2C%20quiero%20más%20información%20sobre%20tus%20servicios.";
  });
});