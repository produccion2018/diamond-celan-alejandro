const languageSelect = document.getElementById('language-select');

const translations = {
    es: {
        limpieza_profesional: "Limpieza Profesional",
        planes: "Planes",
        nosotros: "Nosotros",
        cobertura: "Cobertura",
        trabaja: "Trabajá con nosotros",
        contacto: "Contacto",
        contactanos: "Contáctanos",
        empresa_limpieza: "EMPRESA DE LIMPIEZA PROFESIONAL",
        limpieza_profesional_item: "Limpieza Profesional",
        limpieza_final_obras: "Limpieza Final de Obras",
        limpieza_oficinas: "Limpieza de Oficinas",
        limpieza_deposito: "Limpieza de Depósito",
        establecimientos: "Establecimientos Comerciales y Retailes",
        limpieza_eventos: "Limpieza Final de Eventos"
    },
    en: {
        limpieza_profesional: "Professional Cleaning",
        planes: "Plans",
        nosotros: "About Us",
        cobertura: "Coverage",
        trabaja: "Work with us",
        contacto: "Contact",
        contactanos: "Contact Us",
        empresa_limpieza: "PROFESSIONAL CLEANING COMPANY",
        limpieza_profesional_item: "Professional Cleaning",
        limpieza_final_obras: "Final Cleaning of Construction",
        limpieza_oficinas: "Office Cleaning",
        limpieza_deposito: "Warehouse Cleaning",
        establecimientos: "Commercial and Retail Establishments",
        limpieza_eventos: "Final Event Cleaning"
    },
    nl: {
        limpieza_profesional: "Professionele Schoonmaak",
        planes: "Plannen",
        nosotros: "Over Ons",
        cobertura: "Dekking",
        trabaja: "Werk met ons",
        contacto: "Contact",
        contactanos: "Neem contact op",
        empresa_limpieza: "PROFESSIONEEL SCHOONMAAKBEDRIJF",
        limpieza_profesional_item: "Professionele Schoonmaak",
        limpieza_final_obras: "Eindschoonmaak Bouw",
        limpieza_oficinas: "Kantoor Schoonmaak",
        limpieza_deposito: "Magazijn Schoonmaak",
        establecimientos: "Commerciële en Retail Locaties",
        limpieza_eventos: "Eindschoonmaak Evenementen"
    }
};

languageSelect.addEventListener('change', () => {
    const lang = languageSelect.value;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
});
