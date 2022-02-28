const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex gap-2 py-3" aria-current="true">
            <img src=${who.avatarIcon} width="40" height="40" class="rounded-circle flex-shrink-0"/>
            <div class="d-flex w-100 justify-content-between">
                <div>
                    <h6 class="mb-0 text-nowrap">${who.userName} <i class="fa-solid fa-circle-check"></i></h6>
                    <small class="mb-0 opacity-75">@${who.userHandle}</small>
                </div>
                <button class="btn btn-primary rounded-pill">Follow</button>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;