import { initSiteHeader } from './site-header.js';
import { initPageNavigationSmoothScroll } from './page-navigation-smooth-scroll.js';

const siteHeaderElement = document.querySelector('.site-header');
const siteFooterNavigationElement = document.querySelector('.site-footer__navigation');

initSiteHeader(siteHeaderElement, initPageNavigationSmoothScroll);
initPageNavigationSmoothScroll(siteFooterNavigationElement, siteHeaderElement);
