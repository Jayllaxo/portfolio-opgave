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
  let activeGallery;
  document.querySelectorAll('.image-enlarge').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      activeGallery = button.closest('.gallery');
      const image = activeGallery.querySelector('.gallery-main');
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      imageDialog.showModal();
    });
  });

  // Pilene vælger næste/forrige miniature og opdaterer også billedet bag vinduet.
  function changeImage(direction) {
    const buttons = Array.from(activeGallery.querySelectorAll('.gallery-thumbnails button'));
    let index = buttons.findIndex(function (button) {
      return button.getAttribute('aria-pressed') === 'true';
    });
    index += direction;
    if (index < 0) index = buttons.length - 1;
    if (index >= buttons.length) index = 0;
    buttons[index].click();
    const image = activeGallery.querySelector('.gallery-main');
    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;
  }

  imageDialog.querySelector('.image-previous').addEventListener('click', function () { changeImage(-1); });
  imageDialog.querySelector('.image-next').addEventListener('click', function () { changeImage(1); });
  imageDialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });

  // Klik på den mørke baggrund lukker også billedet.
  imageDialog.addEventListener('click', function (event) {
    if (event.target === imageDialog) imageDialog.close();
  });
}
