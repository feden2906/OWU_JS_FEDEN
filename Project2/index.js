
    let mainDiv = document.getElementById('main-div');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            let userId = document.getElementsByClassName('user-id');
            let userName = document.getElementsByClassName('user-name');
            let btnUserDetails = document.getElementsByClassName('user-details');
            let i = 0;
            for (const user of users) {

                userId[i].innerHTML = `${user.id}.`;
                userName[i].innerHTML = `${user.name}`;
                btnUserDetails[i].innerHTML = 'details';

                btnUserDetails[i].onclick = () => {
                    location.href = `user-details.html?user=${JSON.stringify(user)}`;
                }
                i++;
            }
        })

    document.body.style.paddingBottom = '40px';
