import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            "avatarIcon": '/tuiter/images/nasa.png',
            "userName": 'NASA',
            "userHandle": 'NASA'
        }
    }) => {
    return (
        <li className="list-group-item d-flex gap-2 py-3" aria-current="true">
            <img src={who.avatarIcon} alt="/tuiter/images/no-image.png"
                 width="40" height="40" className="rounded-circle flex-shrink-0"
                 style={{"objectFit" : "cover"}}/>
            <div className="d-flex w-100 justify-content-between">
                <div>
                    <h6 className="mb-0 text-nowrap">{who.userName} <i className="fa-solid fa-circle-check"/></h6>
                    <small className="mb-0 opacity-75">@{who.userHandle}</small>
                </div>
                <button className="btn btn-primary rounded-pill">Follow</button>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;