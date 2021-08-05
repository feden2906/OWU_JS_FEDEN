
const url = new URL(location);
const mail = JSON.parse(url.searchParams.get('post'));

let keyDiv = document.getElementsByClassName('key-div');
let i = 0;
for (const key in mail) {
    keyDiv[i].innerHTML = `<span class="red">${key}:</span> ${mail[key]}`;
    i++;
}



fetch(`https://jsonplaceholder.typicode.com/posts/${mail.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let i = 0;
        for (const comment of comments) {
            let rowDiv = document.getElementsByClassName('row-div');
            for (const key in comment) {
                rowDiv[i].innerHTML = `<span class="blue">${key}:</span> ${comment[key]}`;
                i++;
            }
        }
    })

document.body.style.paddingBottom = '10px';

