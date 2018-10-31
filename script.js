"use strict";


// data.children[""0""].data.title
// data.children[""0""].data.permalink
// data.children[""0""].data.author
// data.children[""0""].data.selftext  user post?
// data.children[""0""].data.num_comments
// data.children[""0""].data.score







$(document).ready(() => {
    $.get("https://www.reddit.com/r/vinylcollectors.json").then((response) => {
        const post = response.data.children;
        console.log(post);
        for (let i = 0; i < post.length; i++) { 
            $("body").append(`
            <section class="post-container">
                <a href="${post[i].data.url}">
                    <p class="title">${post[i].data.title}</p>
                </a>
                <p class="author">${post[i].data.author_fullname}</p>
                <p class="user-post">${post[i].data.selftext}</p>
                <p class="comment-count">${post[i].data.num_comments}</p>
                <p class="score">${post[i].data.score}</p>
            </section>
            `);
        }
    });
});