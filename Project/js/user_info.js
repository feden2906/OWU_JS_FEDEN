const user_id = localStorage.getItem('user_id');    //get data from localstorage
const user_info = localStorage.getItem('user_info');

const user = JSON.parse(user_info);     //convert user-data__string into an object

const user_box = document.getElementById('user_info');      //and then put it in the div and display

function createInfoRow(key, value){
    let row = document.createElement('div');
    row.classList.add('user-info');
    let div_key = document.createElement('div');
    let div_value = document.createElement('div');
    div_key.innerText=key;
    div_value.innerText=value;
    row.append(div_key,div_value);
    user_box.append(row);
}
function createInfoRow_Obj(key, values){
    const row = document.createElement('div');
    row.classList.add('user-info');
    const div_key = document.createElement('div');
    const div_value = document.createElement('div');  //new outer block
    div_key.innerText=key;

    for (const key in values) {
        const row_in = document.createElement('div');
        row_in.classList.add('user-info');
        const div_key_in = document.createElement('div');
        const div_value_in = document.createElement('div');
        div_key_in.innerText = key;
        div_value_in.innerText = values[key];
        row_in.append(div_key_in,div_value_in);
        div_value.append(row_in);
    }

    row.append(div_key, div_value);
    user_box.append(row);
}

for (const value in user) {
    if(typeof user[value] === 'object'){
        for (const key in user[value]) {
            if (typeof user[value][key]  === 'object'){
                createInfoRow_Obj(key, user[value][key]);
            }
            else{
                createInfoRow(key, user[value][key]);
            }
        }
    }
    else{
        createInfoRow(value, user[value]);
    }
}

const div_posts = document.createElement('div');
div_posts.classList.add('posts-title');
const post_btn = document.getElementById('users_posts');
post_btn.onclick = function (ev){
    ev.preventDefault();
    div_posts.innerText='';
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                const div_post = document.createElement('div');
                div_post.innerText = post.title;
                div_posts.append(div_post);
                document.getElementsByClassName('wrap')[0].appendChild(div_posts);

                const btn_details = document.createElement('button');
                btn_details.innerText = 'show more info';
                div_post.append(btn_details);

                btn_details.onclick = function () {
                    localStorage.setItem('post_info', JSON.stringify(post));
                    location.href='post-details.html';
                }
            }
        })
}