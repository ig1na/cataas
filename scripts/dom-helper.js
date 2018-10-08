export function getElement(selector) {
  return document.querySelector(selector);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function setElementContent(selector, content) {
  getElement(selector).innerHTML = content;
}