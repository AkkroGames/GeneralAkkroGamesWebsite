function scrollToSection(id) {
    game2Desc: "¡Vuela por el espacio, esquiva y dispara enemigos, y llega vivo a la base!<br>versión 1.0",
    game3Desc: "¡Tic-Tac-Toe Galáctico es una versión cósmica con batallas y modos emocionantes!<br>¡ACTUALIZADO!<br>versión 1.0",
    game4Desc: "¡Defiende la Luna de los peligros entrantes!",
    leaveFeedback: "Deja tu opinión",
    likeBtn: "👍 Me gusta",
    dislikeBtn: "👎 No me gusta",
    likes: "Me gusta: <span id='likeCount'>" + likeCount + "</span>",
    dislikes: "No me gusta: <span id='dislikeCount'>" + dislikeCount + "</span>",
    faq: "(FAQ)",
    faq1q: "¿Cómo puedo contactar soporte?",
    faq1a: "Puedes escribirnos a: <a href=\"mailto:support@akkrogames.com\">support@akkrogames.com</a>.",
    faq2q: "¿En qué plataformas están disponibles los juegos?",
    faq2a: "Nuestros juegos están disponibles en PC, consolas y móviles.",
    ourSocials: "Nuestras redes",
    foundBug: "¿Encontraste un error? Repórtalo aquí",
    reportBtn: "Reportar un error",
    bugEmail: "Si el botón no funciona, escríbenos a: <a href=\"mailto:akkrogames7@gmail.com\">akkrogames7@gmail.com</a>",
    version: "Versión 1.4",
    copyright: "© 2025 AKKRO Games. Todos los derechos reservados.",
    toggleTheme: "Cambiar tema",
    switchToLight: "Tema claro",
    switchToDark: "Tema oscuro",
  }
};

let currentLang = 'en';

function changeLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "BUTTON" || el.tagName === "SELECT") {
        el.value = translations[lang][key];
        el.innerText = translations[lang][key];
      } else {
        if (key === 'likes' || key === 'dislikes') {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    }
  }
  // Theme button text update
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.innerText = translations[lang][document.body.classList.contains('light-theme') ? 'switchToDark' : 'switchToLight'];
  }
}

// Initial load: apply English
document.addEventListener('DOMContentLoaded', function() {
  changeLang('en');
  document.getElementById('langSelect').value = 'en';
});

// For accessibility, you can also add keyboard navigation etc.
