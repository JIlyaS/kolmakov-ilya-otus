const { getPath } = require('../index');

document.body.innerHTML =
    '<ul id="list" class="list">' +
    '  <li>1</li>' +
    '  <li>2</li>' +
    '  <li>3</li>' +
    '</ul>';

describe('getPath', () => {
  it('Should correсt return getPath unique identificator', () => {
    const el = document.querySelector('li');
    expect(getPath(el)).toBe('body #list li:first-child');
  });

  it('Should getPath not found element', () => {
    const el = document.querySelector('.item1');
    expect(getPath(el)).toBeUndefined();
  });

  it('Should getPath get querySelectorAll 1 element length', () => {
    const el = document.querySelector('li');
    const identificator = getPath(el);
    const element = document.querySelectorAll(identificator);
    expect(element.length).toBe(1);
  });

  it('Should correсt return getPath body', () => {
    const el = document.querySelector('body');
    expect(getPath(el)).toBe('body');
  });
});