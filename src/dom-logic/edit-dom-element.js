export { editElementText, editElementAttribute };

function editElementText(origin, selector, text) {
  const element = origin.querySelector(selector);
  element.textContent = text;
}

function editElementAttribute(origin, selector, attr, value) {
  const element = origin.querySelector(selector);
  element.setAttribute(attr, value);
}
