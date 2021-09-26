"use strict"

window.onload = function () {
    function getIdParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        return id;
    }

    let detailApi = `https://jsonplaceholder.typicode.com/posts/${getIdParam()}`;
    console.log(detailApi);
    fetch(detailApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (post) {
            var html = `<div class='post'>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <p>id:${post.id}</p>
                    <p><a href='user.html?id=${post.userId}'>userId: ${post.userId}</a></p>
                    </div>
                    <br>`;
            document.getElementById('detail-post').innerHTML = html;
        })
        .catch(function (err) {
            console.log(err)
            alert('Có Lỗi!', err);
        })


    let commentApi = `https://jsonplaceholder.typicode.com/comments?postId=${getIdParam()}`;
    console.log(commentApi);
    fetch(commentApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (comments) {
            var htmls = comments.map(function (comment) {
                console.log(comment);
                return `<div class='post'>
                    <h2>${comment.name}</h2>
                    <p>${comment.email}</p>
                    <p>${comment.body}</p>
                    </div>
                    <br>`;
            });
            var html = htmls.join('');
            document.getElementById('comment-post').innerHTML = html;
        })
        .catch(function (err) {
            alert('Có Lỗi!', err);
        })
};