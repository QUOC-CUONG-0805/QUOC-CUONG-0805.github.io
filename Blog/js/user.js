"use strict"

window.onload = function () {
    function getIdParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        return id;
    }

    let userDetailApi = `https://jsonplaceholder.typicode.com/users/${getIdParam()}`;
    console.log(userDetailApi);
    fetch(userDetailApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            var html = `<div class='post'>
                    <p><b>Name:</b> ${user.name}</p>
                    <p><b>User Name:</b> ${user.username}</p>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Address:</b> 
                        <span>${user.address.street}</span>, 
                        <span>${user.address.suite}</span>, 
                        <span>${user.address.city}</span>, 
                        <span>${user.address.zipcode}</span>, 
                        <span>
                            <span>${user.address.geo.lat}</span>, 
                            <span>${user.address.geo.lng}</span>
                        </span>
                    </p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>Website:</b> ${user.website}</p>
                    <p><b>Company:</b> 
                        <span>${user.company.name}</span>,
                        <span>${user.company.catchPhrase}</span>,
                        <span>${user.company.bs}</span>
                    </p>
                    </div>
                    <br>`;
            document.getElementById('user-block').innerHTML = html;
        })
        .catch(function (err) {
            console.log(err)
            alert('Có Lỗi!', err);
        })


    let userPostApi = `https://jsonplaceholder.typicode.com/posts?userId=${getIdParam()}`;
    console.log(userPostApi);
    fetch(userPostApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (posts) {
            var htmls = posts.map(function (post) {
                console.log(post);
                return `<div class='post'>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    </div>
                    <br>`;
            });
            var html = htmls.join('');
            document.getElementById('post-block').innerHTML = html;
        })
        .catch(function (err) {
            alert('Có Lỗi!', err);
        })
};