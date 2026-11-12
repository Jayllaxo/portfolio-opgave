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
