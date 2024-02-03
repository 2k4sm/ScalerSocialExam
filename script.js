

//Create new Post.
var btn = document.querySelector(".post-document");
btn.addEventListener("click", newPost);

function newPost() {
    let authorName = "NewAuthorName";
    let authorEmail = "newauth@mail";

    let thoughts = document.querySelector("textarea");
    let textValue = thoughts.value;

    if (textValue === "") {
        console.log("content empty");
        return;
    }

    let post = `<div class="show-post">
    <div class="img-area">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="profile-img">
    </div>
    <div class="show-post-area">
        <div class="auth-edit-del-area">
            <span class="auth-details">
                <span class="auth-name">${authorName}</span>
                <span class="auth-email">${authorEmail}</span>
            </span>
            
            <span class="edit-del-cont">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit-btn">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete-btn">
            </span>
        </div>
        <div class="post-content">
            <div class="show-post-content">${textValue}</div>
        </div>
        <div class="like-comment">
            <div class="new-comment">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="new-comment">
            </div>
            <div class="new-like">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="new-like">
            </div>
        </div>
        
    </div>
    </div>`

    let createPost = document.querySelector(".view-post");
    appendHtml(createPost,post);
}

function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
}
