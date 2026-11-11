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

// PROJEKTFILTER: Sammenlign knappens filter med hvert projekts kategori.
// Uden JavaScript vises alle projekter og hele navigationen stadig.
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-card');
const filterStatus = document.querySelector('#filter-status');
document.querySelector('.filters').hidden = false;

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const category = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach(function (filterButton) {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    });

    projects.forEach(function (project) {
      const showProject = category === 'alle' || project.dataset.category === category;
      project.hidden = !showProject;
      if (showProject) visibleCount++;
    });

    filterStatus.textContent = visibleCount + ' projekter vises.';
  });
});
