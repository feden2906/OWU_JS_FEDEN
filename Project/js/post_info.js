const user_info = localStorage.getItem('user_info');
const post_info = localStorage.getItem('post_info');
const user = JSON.parse(user_info);
const post = JSON.parse(post_info);

const comments_box = document.getElementById('comments');
const post_box = document.getElementById('post_info');
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const h3 = document.createElement('h3');

row1.innerText=`${user.name} - #${post.id}`;
h3.innerText=post.title;
row2.innerText=post.body;
post_box.append(row1, h3, row2);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const comm_div = document.createElement('div');
            const id_info = document.createElement('div');
            const email_info = document.createElement('div');
            const comment_body = document.createElement('div');
            id_info.innerText = `#${comment.id} - ${comment.name}`;
            id_info.style.fontWeight='bold';
            email_info.innerText = comment.email;
            comment_body.innerText = comment.body;
            comm_div.append(id_info,email_info,comment_body);
            comments_box.append(comm_div);
        }
    });
