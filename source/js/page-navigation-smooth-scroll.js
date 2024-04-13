function initPageNavigationSmoothScroll(navigationElement, headerElement, cb) {
  const pageInnerElement = document.querySelector('.page__inner');
  const sectionsElements = Array.from(pageInnerElement.querySelectorAll('[data-menu-link-target]'));

  navigationElement.addEventListener('click', (evt) => {
    const isLinkElement = evt.target.matches('.site-header__menu-link, .site-footer__navigation-link');

    if (isLinkElement) {
      evt.preventDefault();
      const id = evt.target.hash.slice(1);
      const section = sectionsElements.find((sectionsElement) => sectionsElement.id === id);

      if (!id || !section) {
        return;
      }

      if (cb) {
        cb();
      }

      setTimeout(() => {
        pageInnerElement.scrollTo({
          top: section.offsetTop - headerElement.offsetHeight,
          behavior: 'smooth',
        });
      }, 100);
    }
  });
}

export { initPageNavigationSmoothScroll };
