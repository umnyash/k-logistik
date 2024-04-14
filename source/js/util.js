import { KeyCode } from './const.js';

export function isEscapeEvent(evt) {
  return evt.code === KeyCode.ESCAPE;
}

export function isBackspaceEvent(evt) {
  return evt.code === KeyCode.BACKSPACE;
}

export function createElementByString(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}
