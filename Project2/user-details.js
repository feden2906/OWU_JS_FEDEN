
const url = new URL(location);
const person = JSON.parse(url.searchParams.get('user'));

let btnPosts = document.getElementById('btn-posts');
let i = 0;

let keyDiv = document.getElementsByClassName('key-div');
let itemDiv = document.getElementsByClassName('item-div');
let pointDiv = document.getElementsByClassName('point-div');

    for (const key in person) {

        if (typeof person[key] !== 'object') {
            keyDiv[i].innerHTML = `<span>${key}:</span> ${person[key]}`;
        } else {
            keyDiv[i].innerHTML = `<span>${key}:</span>`;
            let j = 0;
            for (const item in person[key]) {

                if (typeof person[key][item] !== 'object') {
                    itemDiv[j].innerHTML = `<span>${item}:</span> ${person[key][item]}`;
                } else {
                    itemDiv[j].innerHTML = `<span>${item}:</span>`;

                    let k = 0;
                    for (const point in person[key][item]) {
                        pointDiv[k].innerHTML = `<span>${point}:</span> ${person[key][item][point]}`;
                        k++;
                    }
                }
                j++;
            }
        }
        i++;
    }
    let postsBox = document.getElementById('posts-box');

    btnPosts.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/user/${person.id}/posts`)
            .then(value => value.json())
            .then(posts => {
                let btnPost = document.getElementsByClassName('btn-post');
                let postTitle = document.getElementsByClassName('post-title');
                postsBox.style.display = 'flex';

                for (const element of postTitle) {
                    element.innerHTML = '';
                }

                let i = 0;
                for (const post of posts) {

                    postTitle[i].innerHTML = `${post.title}`;

                    btnPost[i].onclick = () => {
                        location.href = `post-details.html?post=${JSON.stringify(post)}`;
                    }
                    i++;
                }
            })
    }

    document.body.style.paddingBottom = '40px';






