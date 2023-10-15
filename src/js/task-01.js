const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsEl = document.querySelectorAll('li.item');
itemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.querySelectorAll('li').length}`);
});