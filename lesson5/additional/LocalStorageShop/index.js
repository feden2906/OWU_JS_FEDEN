// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.

const form = document.forms.market;

let items = [];
const response = localStorage.getItem('items');
if (response) items = JSON.parse(response);

form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const item = {
        name: form.name.value,
        quantity: form.quantity.value,
        price: form.price.value,
        url: form.url.value
      };
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    }
)
