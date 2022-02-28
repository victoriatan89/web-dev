const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex justify-content-between">
                <div class="me-4">
                    <small class="opacity-25 mb-0">${post.topic}</small>
                    <div class="d-flex align-items-center gap-1 mb-0">
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <small class="opacity-25"> - ${post.time}</small>
                    </div>
                    <p class="fw-bold mb-0">${post.title === '' ? '' : post.title}</p>
                </div>
                <img src=${post.image} width="80" height="80" class="rounded align-self-center"/>
            </div>
        </li>    
    `);
}
export default PostSummaryItem;