const list = [
  {
    title: 'listA',
    content: [],
  },

]

function generateListDom(title, content) {
  const container = document.createElement('div');
  container.style.width = '200px';
  container.style.border = '1px solid black';
  container.style.padding = '10px';
  container.style.backgroundColor = 'lightgray';

  const list = document.createElement('ul');
  list.style.width = '200px';

  const titleElement = document.createElement('h2');
  titleElement.innerHTML = title;
  container.appendChild(titleElement);

  content.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    list.appendChild(listItem);
  });

  container.appendChild(list);

  return container;
}

list.forEach(element => {
  const listDom = generateListDom(element.title, element.content);
  app.appendChild(listDom);
});


