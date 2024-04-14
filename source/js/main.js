import { initSiteHeader } from './site-header.js';
import { initPageNavigationSmoothScroll } from './page-navigation-smooth-scroll.js';
import { openModal, closeModal } from './modal.js';
import { initRequestModal } from './request-modal.js';
import { showAlert } from './alert.js';
import { sendData } from './api.js';
import { setTelFieldMask } from './tel-field-mask.js';
import { initRequestForm } from './request-form.js';

const siteHeaderElement = document.querySelector('.site-header');
const siteFooterNavigationElement = document.querySelector('.site-footer__navigation');
const requestModalElement = document.querySelector('[data-modal="request"]');

initSiteHeader(siteHeaderElement, initPageNavigationSmoothScroll);
initPageNavigationSmoothScroll(siteFooterNavigationElement, siteHeaderElement);
initRequestModal(requestModalElement, initRequestForm, setTelFieldMask, sendData, openModal, closeModal, showAlert);

document.querySelectorAll('.request-form:not(.request-form--modal)').forEach((formElement) => {
  initRequestForm(formElement, setTelFieldMask, sendData, openModal, showAlert);
});
