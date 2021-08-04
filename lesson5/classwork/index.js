// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'purple';

// b) робить шириниу елементу ul 400px
let ulWidth = document.getElementsByTagName('ul')[0];
ulWidth.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements = document.getElementsByClassName('linkList');

for (const linkListElement of linkListElements) {
    linkListElement.style.width = '50%';
}

// отримує текст який зберігається в елементі з класом listElement2
let listElement2Text = document.getElementsByClassName('listElement2')[0].textContent;

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liCollection = document.getElementsByTagName('li');
for (const liCollectionElement of liCollection) {
    liCollectionElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor');
}

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aCollection = document.getElementsByTagName('a');
for (const element of aCollection) {
    if(element.innerText === "link3")
        element.style.fontSize = '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aCollection2 = document.getElementsByTagName('a');
for (const element of aCollection2) {
    element.classList.add(`element_${element.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderElements = document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeaderElements) {
    subHeaderElement.style.backgroundColor = prompt();
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaderElements1 = document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeaderElements1) {
    if(subHeaderElement.innerText === "content 2 segment")
        subHeaderElement.style.color = prompt();
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1')[0].textContent = prompt();

// l) отримати елементи p та змінити їм padding на 20px
let peshki = document.getElementsByTagName('p');
for (const element of peshki) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2Elements = document.getElementsByClassName('text2');
for (const text2Element of text2Elements) {
    text2Element.textContent = "JUNE 2021 HELL YEAH";
}
