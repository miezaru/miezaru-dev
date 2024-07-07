// fixed navigation
const headerEl = document.querySelector('.header');
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
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
    rootMargin: '-80%',
  }
);
observer.observe(sectionHeroEl);
