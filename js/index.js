// fixed navigation
const headerEl = document.querySelector('.header');
const sectionHeroEl = document.querySelector('.section-hero');

const observerLogo = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      headerEl.classList.add('logo-bottom');
    } else {
      headerEl.classList.remove('logo-bottom');
    }
  },
  {
    // inside in the viewport
    root: null,
    // as soon as 0% sectionHeroEl in viewport (moves out completely)
    threshold: 0,
    rootMargin: '-30%',
  }
);
observerLogo.observe(sectionHeroEl);

const observerMenuBtn = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      headerEl.classList.add('menu-bottom');
    } else {
      headerEl.classList.remove('menu-bottom');
    }
  },
  {
    // inside in the viewport
    root: null,
    // as soon as 0% sectionHeroEl in viewport (moves out completely)
    threshold: 0,
    rootMargin: '-30%',
  }
);
observerMenuBtn.observe(sectionHeroEl);

// main-menu
const mainMenuBtn = document.querySelector('.main-nav__btn');
const mainMenuLinks = document.querySelectorAll('.main-nav__link');

mainMenuBtn.addEventListener('click', () => {
  if (headerEl.classList.contains('menu-open')) {
    headerEl.classList.remove('menu-open');
    return;
  } else {
    headerEl.classList.toggle('menu-open');
  }

  mainMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerEl.classList.remove('menu-open');
    });
  });
});

// fix links #
const relativeLinks = document.querySelectorAll("a[href^='#']");

relativeLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    if (link.getAttribute('href') === '#' || link.getAttribute('href') === '#top') {
      return;
    }
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    const topOfElement = targetEl.offsetTop - headerEl.offsetHeight - 10;

    window.scroll({ top: topOfElement, behavior: 'smooth' });
  });
});

// page menu
const pageNavBtn = document.querySelector('.page-nav__btn');
const openPageMenuBtn = document.querySelector('.open-page-menu-btn');

pageNavBtn.addEventListener('click', () => {
  sectionHeroEl.classList.remove('page-menu-open');
});

openPageMenuBtn.addEventListener('click', () => {
  sectionHeroEl.classList.add('page-menu-open');
});
