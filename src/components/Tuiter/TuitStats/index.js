import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="row g-4 fs-6">
            <span className="col d-flex align-items-center">
                <i className="fa-regular fa-comment me-1"/>
                {tuit.stats && tuit.stats.comments}
            </span>
            <span className="col d-flex align-items-center">
                <i className="fa-solid fa-retweet me-1"/>
                {tuit.stats && tuit.stats.retuits}
            </span>
            <span onClick={likeTuit}
                  className="col d-flex align-items-center">
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1" style={{"color": "red"}}/>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.stats && tuit.stats.likes}
            </span>
            <span className="col d-flex align-items-center">
                <i className="fa-solid fa-arrow-up-from-bracket"/>
            </span>
        </div>
    );
}
export default TuitStats;