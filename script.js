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

// GALLERIER: Et nummer holder styr på det valgte billede i hvert galleri.
// Første billede har nummer 0, andet billede har nummer 1 osv.
// Den samme kode bruges til spilbilleder, fotografier og designbilleder.
document.querySelectorAll('.gallery').forEach(function (gallery) {
  const mainImage = gallery.querySelector('.gallery-main');
  const thumbnails = gallery.querySelectorAll('.gallery-thumbnails button');
  const enlargeButton = gallery.querySelector('.image-enlarge');
  // Knappens aria-controls fortæller, hvilken dialog galleriet skal åbne.
  const imageDialog = document.getElementById(enlargeButton.getAttribute('aria-controls'));
  const enlargedImage = imageDialog.querySelector('img');
  let currentImage = 0;

  // Samme funktion opdaterer både det lille og det forstørrede billede.
  function showImage(number) {
    if (number < 0) number = thumbnails.length - 1;
    if (number >= thumbnails.length) number = 0;
    currentImage = number;

    const image = thumbnails[number].querySelector('img');
    mainImage.src = image.src;
    // Beskrivelsen står på knappen, mens miniaturebilledet har tom alt-tekst.
    const description = thumbnails[number].getAttribute('aria-label').replace('Show image: ', '');
    mainImage.alt = description;
    enlargedImage.src = image.src;
    enlargedImage.alt = description;

    thumbnails.forEach(function (button, index) {
      button.setAttribute('aria-pressed', index === currentImage);
    });
  }

  // Klik på en miniature vælger dens billede.
  thumbnails.forEach(function (button, index) {
    button.addEventListener('click', function () {
      showImage(index);
    });
  });

  showImage(0);
  enlargeButton.hidden = false;
  enlargeButton.addEventListener('click', function () {
    imageDialog.showModal();
  });

  // Pilene går ét billede tilbage eller frem.
  imageDialog.querySelector('.image-previous').addEventListener('click', function () {
    showImage(currentImage - 1);
  });
  imageDialog.querySelector('.image-next').addEventListener('click', function () {
    showImage(currentImage + 1);
  });

  // Tastaturets pile virker også. Browseren lukker selv med Escape.
  imageDialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(currentImage - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(currentImage + 1);
    }
  });

  // Et klik på den mørke baggrund lukker billedet.
  imageDialog.addEventListener('click', function (event) {
    if (event.target === imageDialog) imageDialog.close();
  });
});
