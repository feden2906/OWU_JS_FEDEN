// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
const content = document.getElementById('content').textContent;
console.log(content);

// -- отримує текст з блоку з id "rules"
const rules = document.getElementById('rules').innerText;
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
const content2 = document.getElementById('content').textContent = "sadasdsadasdasd";
console.log(content2);

// -- замініть текст параграфа з id 'rules' на будь-який інший
const rules2 = document.getElementById('rules').innerText = "you`re changed, baby =)";
console.log(rules2);

// -- змініть кожному елементу колір фону на червоний
const allRed = document.getElementsByTagName('p');
for (const allRedElement of allRed) {
    allRedElement.style.backgroundColor = 'red';
}
const allRed2 = document.getElementsByTagName('div');
for (const allRed2Element of allRed2) {
    allRed2Element.style.backgroundColor = 'red';
}
const allRed3 = document.getElementsByTagName('ul');
for (const allRed3Element of allRed3) {
    allRed3Element.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
const blueP = document.getElementsByTagName('p')[0].style.color = 'blue';
const blueDiv = document.getElementsByTagName('div')[0].style.color = 'blue';
const blueUl = document.getElementsByTagName('ul')[0].style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classes = document.getElementById('rules');
console.log(classes.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.addEventListener('click',() => console.log(fcRule.textContent));
}
for (const fcRule of fcRules) {
    fcRule.addEventListener('click',() => console.log("fcRule.textContent"));
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const fcRule of fcRules) {
    fcRule.style.color = 'white';
}
