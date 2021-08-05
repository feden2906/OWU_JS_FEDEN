fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const users_box = document.getElementById('users_box');
        for (const user of users) {
            const div_user = document.createElement('div');
            div_user.innerText = `#${user.id} ${user.name} `;
            users_box.appendChild(div_user);

            const info_btn = document.createElement('button');
            info_btn.innerText = 'show more info';
            div_user.append(info_btn);

            info_btn.onclick = function () {
                localStorage.setItem('user_id', user.id);
                localStorage.setItem('user_info', JSON.stringify(user));
                location.href='user-details.html';
            }
        }
    })