import { isEscapeEvent } from './util.js';

const MODAL_ANIMATION_DURATION = 300;
const openedModals = [];

export function openModal(modal) {
  modal.classList.remove('modal--hidden');
  openedModals.push(modal);
  document.addEventListener('keydown', onModalEscapeEvent);
  document.addEventListener('click', onModalClick);

  setTimeout(() => {
    modal.classList.add('modal--open');
  }, 0);
}

export function closeModal(modal) {
  modal.classList.remove('modal--open');
  openedModals.pop();

  if (!openedModals.length) {
    document.removeEventListener('keydown', onModalEscapeEvent);
    document.removeEventListener('click', onModalClick);
  }

  setTimeout(() => {
    modal.classList.add('modal--hidden');

    if (modal.classList.contains('modal--with_alert')) {
      modal.remove();
    }
  }, MODAL_ANIMATION_DURATION);
}

function onModalEscapeEvent(evt) {
  if (!isEscapeEvent(evt)) {
    return;
  }

  evt.preventDefault();
  closeModal(openedModals[openedModals.length - 1]);
}

function onModalClick({ target }) {
  if (!target.classList.contains('modal') && !target.classList.contains('modal__close-button') && !target.classList.contains('alert__button')) {
    return;
  }

  closeModal(openedModals[openedModals.length - 1]);
}
