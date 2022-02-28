const PostItem = (post) => {
    return(`
        <li class="wd-post list-group-item d-flex py-3">
        <img src="${post.avatarIcon}" width="45px" height="45px" class="flex-shrink-0 rounded-circle me-3" />
        <div class="w-100">
            <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">${post.userName} <i class="fa-solid fa-circle-check"></i> <small class="opacity-50 fw-normal">@${post.userHandle} - ${post.time}</small></p>
                <i class="fa-solid fa-ellipsis opacity-50"></i>
            </div>
            <p>${post.caption}</p>
            <div class="card mb-3">
                <img src="${post.image}" class="card-img"/>
                <div class="card-body" style="display: ${post.title === '' ? 'none' : 'block'}">
                    <div class="card-text">
                        <p class="mb-0">${post.title}</p>
                        <p class="opacity-50 mb-0">${post.content}</p>
                        <a href=${post.link} class="opacity-50 text-dark" style="text-decoration: none;"><i class="fa-solid fa-link"></i>${post.linkName}</a>
                    </div>
                </div>
            </div>
            <div class="row g-4 opacity-50 fs-6">
                <div class="col d-flex align-items-center">
                    <i class="fa-regular fa-comment me-3"></i>
                    <small>${post.comments}</small>
                </div>
                <span class="col d-flex align-items-center">
                    <i class="fa-solid fa-retweet me-3"></i>
                    <small>${post.retweets}</small>
                </span>
                <span class="col d-flex align-items-center">
                    <i class="fa-regular fa-heart me-3"></i>
                    <small>${post.likes}</small>
                </span>
                <span class="col d-flex align-items-center">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </span>
            </div>
        </div>
        </li>
    `);
}
export default PostItem;