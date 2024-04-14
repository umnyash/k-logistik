const BURGER_MENU_ANIMATION_DURATION = 250;

function initSiteHeader(headerElement, initPageNavigationSmoothScroll) {
  const menuElement = headerElement.querySelector('.site-header__menu');
  const burgerElement = headerElement.querySelector('.burger');

  function closeMenu() {
    burgerElement.ariaExpanded = 'false';
    burgerElement.classList.remove('burger--open');
    menuElement.classList.remove('site-header__menu--open');

    setTimeout(
      () => menuElement.classList.remove('site-header__menu--animated'),
      BURGER_MENU_ANIMATION_DURATION
    );
  }

  function openMenu() {
    menuElement.classList.add('site-header__menu--animated');
    burgerElement.ariaExpanded = 'true';
    burgerElement.classList.add('burger--open');
    menuElement.classList.add('site-header__menu--open');
  }

  burgerElement.addEventListener('click', () => {
    const isMenuOpen = burgerElement.ariaExpanded === 'true';

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  initPageNavigationSmoothScroll(menuElement, headerElement, closeMenu);
}

export { initSiteHeader };
