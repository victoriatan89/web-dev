import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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