//~ fixed navigation
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

//~ main-menu
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

//~ fix links #
const relativeLinks = document.querySelectorAll("a[href^='#']");

//~FIXME scrolling not working properly
relativeLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const path = window.location.protocol + '//' + window.location.host + window.location.pathname;
    if (link.getAttribute('href') === '#' || link.getAttribute('href') === '#top') {
      window.location.href = path + '#';
      window.scroll({ top: 0, behavior: 'smooth' });
      return;
    }
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    const topOfElement = targetEl.offsetTop - headerEl.offsetHeight - 10;
    window.location.href = path + targetId;

    window.scroll({ top: topOfElement, behavior: 'smooth' });
  });
});

//~ page menu
const pageNavBtn = document.querySelector('.page-nav__btn');
const openPageMenuBtn = document.querySelector('.open-page-menu-btn');

pageNavBtn.addEventListener('click', () => {
  sectionHeroEl.classList.remove('page-menu-open');
});

openPageMenuBtn.addEventListener('click', () => {
  sectionHeroEl.classList.add('page-menu-open');
});

//~ zoom-in images
const bodyEl = document.querySelector('body');
const zoomedImgs = document.querySelectorAll('.zoomed');

zoomedImgs.forEach(function (img) {
  img.addEventListener('click', function () {
    const html = `
<div class="zoom-in">
    <div class="zoom-in__container">
        <img class="zoom-in__img" src="${this.currentSrc}" alt="${this.alt}" />
        <button class="zoom-in__btn" type="button">X</button>
    </div>
    <div class="zoom-in__container-outer">&nbsp;</div>
</div>
    `;
    bodyEl.insertAdjacentHTML('beforeend', html);

    //_ Close
    const zoomInEl = document.querySelector('.zoom-in');
    const zoomInContainerInnerEl = document.querySelector('.zoom-in__container-outer');
    const zoomInCloseBtn = document.querySelector('.zoom-in__btn');

    const close = function (e) {
      e.preventDefault();

      bodyEl.removeChild(zoomInEl);
    };

    zoomInCloseBtn.addEventListener('click', close);
    zoomInContainerInnerEl.addEventListener('click', close);
  });
});
