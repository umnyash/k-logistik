function initSiteHeader() {
  const headerElement = document.querySelector('.site-header');
  const menuElement = headerElement.querySelector('.site-header__menu');
  const burgerElement = headerElement.querySelector('.burger');

  burgerElement.addEventListener('click', () => {
    const isExpanded = burgerElement.ariaExpanded === 'true';

    if (isExpanded) {
      burgerElement.ariaExpanded = 'false';
      burgerElement.classList.remove('burger--open');
      menuElement.classList.remove('site-header__menu--open');
    } else {
      burgerElement.ariaExpanded = 'true';
      burgerElement.classList.add('burger--open');
      menuElement.classList.add('site-header__menu--open');
    }
  });

  menuElement.addEventListener('click', ({ target }) => {
    const menuLinkElement = target.closest('.site-header__menu-link');

    if (menuLinkElement) {
      burgerElement.ariaExpanded = 'false';
      burgerElement.classList.remove('burger--open');
      menuElement.classList.remove('site-header__menu--open');
    }
  });
}

export { initSiteHeader };
