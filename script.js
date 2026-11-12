// MOBILMENU: aria-expanded fortæller skærmlæsere, om menuen er åben.
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
const desktop = window.matchMedia('(min-width: 700px)');

function closeMenu() {
  navigation.hidden = !desktop.matches;
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.hidden = false;
closeMenu();
desktop.addEventListener('change', closeMenu);

menuButton.addEventListener('click', function () {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.hidden = isOpen;
});

navigation.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

// GALLERI: Et klik på et miniaturebillede skifter det store billede.
document.querySelectorAll('.gallery').forEach(function (gallery) {
  const mainImage = gallery.querySelector('.gallery-main');
  const buttons = gallery.querySelectorAll('button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const image = button.querySelector('img');
      mainImage.src = image.src;
      mainImage.alt = image.alt;
      buttons.forEach(function (otherButton) {
        otherButton.setAttribute('aria-pressed', String(otherButton === button));
      });
    });
  });
});

// MUSIK: Den store knap og browserens lydafspiller styrer den samme lydfil.
document.querySelectorAll('.music-player').forEach(function (player) {
  const audio = player.querySelector('audio');
  const button = player.querySelector('.music-play');
  const status = player.querySelector('.media-note');
  button.disabled = !audio.querySelector('source[src]');
  if (!button.disabled) status.textContent = '';

  button.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().catch(function () {
        status.textContent = 'Audio could not be played. Please try the audio controls below.';
      });
    } else {
      audio.pause();
    }
  });

  // Hold knappens tekst opdateret, også når man bruger den almindelige afspiller.
  function updatePlayButton() {
    button.textContent = audio.paused ? '▶︎' : 'Ⅱ';
    button.setAttribute('aria-label', audio.paused ? 'Play music' : 'Pause music');
  }
  audio.addEventListener('play', updatePlayButton);
  audio.addEventListener('pause', updatePlayButton);
  audio.addEventListener('ended', updatePlayButton);
  audio.addEventListener('error', function () {
    status.textContent = 'Audio could not be loaded. Please try again later.';
  });
});
