//  створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
let items = localStorage.getItem('items');
if (items) {
  let item = JSON.parse(items);

  if (!!item.length) {
    document.write(`<div>`);
    for (let i = 0; i < item.length; i++) {
      document.write(`<h1>${item[i].name}  ${item[i].quantity} - ${item[i].price}</h1>`);
      document.write(`<img src="${item[i].url}" alt=""/>`);

//  До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
      document.write(`<button id="remover ${i}">remove it</button>`);
      let remover = document.getElementById(`remover ${i}`);
      remover.addEventListener('click', (ev) => {
        let newArray = item.filter(value => item[i].name !== value.name);
        localStorage.setItem('items', JSON.stringify(newArray));
        location.reload();
      })
    }
    document.write(`</div>`);
  } else{
    document.write("Ваш інтернет магазин порожній, все було видалено");
  }
} else {
  document.write("Ви ще не наповнювали інтернет магазин товарами");
}

// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
document.write(`<br/><button id="removeAll">remove it all</button>`);
let button = document.getElementById('removeAll');
button.addEventListener("click", (ev) => {
  localStorage.setItem('items', JSON.stringify([]));
  location.reload();
})









