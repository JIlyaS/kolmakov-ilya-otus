const el = document.querySelector('li');

const getPath = (element) => {

  // Если не найден текущий элемент
  if (element === null) {
    console.error('Элемент не найден');
    return;
  }

  let part = '';
  let resultStr = '';
  let tag = '';
  let classname = '';

  const id = element.id ? `#${element.id}` : '';
  
  if (!id) {
    tag = element.tagName.toLowerCase();
    classname = element.className ? `.${element.className}` : '';
  }

  const parent = element.parentElement;
  const noBody = element.tagName !== 'BODY';

  // Если у элементов списка нет ни классов, ни id - проверяем индекс элемента списка и выводим дополнительный псевдокласс
  if (!classname && !id && noBody) {
    var index = Array.prototype.indexOf.call(parent.children, element);
    if (index === 0) {
      part = ':first-child';
    }
    else if (index === parent.children.length - 1) {
      part = ':last-child';
    } else {
      part = `:nth-child(${index + 1})`;
    }
  }

  // Переходим к родительскому элементу, если это не тег body
  if (noBody) {
    resultStr = getPath(parent);
  }

  return `${resultStr} ${tag}${classname}${id}${part}`.trim();
};

const result = getPath(el);

console.log(document.querySelector(result), document.querySelectorAll(result));

module.exports = { getPath };