import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from './who.json'

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <strong className="list-group-item">Who to follow</strong>
            {
                who.map(who => <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
}
export default WhoToFollowList;