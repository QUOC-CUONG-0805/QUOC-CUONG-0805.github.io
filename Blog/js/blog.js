"use strict"

let postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            console.log(post);
            return `<div class='post'>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p><a href='detail.html?id=${post.id}'>Read more</a></p>
                </div>
                <br>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function (err) {
        alert('Có Lỗi!', err);
    });