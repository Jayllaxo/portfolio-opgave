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
  const buttons = gallery.querySelectorAll('.gallery-thumbnails button');

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

// FORSTØR BILLEDE: Vis altid det screenshot, som er valgt i galleriet.
const imageDialog = document.querySelector('#image-dialog');
if (imageDialog) {
  const enlargedImage = imageDialog.querySelector('img');
  document.querySelectorAll('.image-enlarge').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      const image = button.closest('.gallery').querySelector('.gallery-main');
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      imageDialog.showModal();
    });
  });

  // Klik på den mørke baggrund lukker også billedet.
  imageDialog.addEventListener('click', function (event) {
    if (event.target === imageDialog) imageDialog.close();
  });
}
