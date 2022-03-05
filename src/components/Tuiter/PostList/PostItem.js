import React from "react";
import './PostItem.css'

const PostItem = (
    {
        post = {
            "avatarIcon": "/tuiter/images/elon-musk.jpeg",
            "userName": "Elon Musk",
            "userHandle": "elonmusk",
            "time": "23h",
            "caption": "Amazing show about @Inspiration4x mission!",
            "image": "/tuiter/images/inspiration4x.jpeg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "link": "https://www.netflix.com/",
            "linkName": "netflix.com",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K",
        }
    }) => {
    return(
        <li className="wd-post list-group-item d-flex py-3">
            <img src={post.avatarIcon} alt="icon" width="45px" height="45px" className="flex-shrink-0 rounded-circle me-3" />
            <div className="w-100">
                <div className="d-flex justify-content-between">
                    <p className="mb-0 fw-bold">{post.userName} <i className="fa-solid fa-circle-check"/> <small className="opacity-50 fw-normal">@{post.userHandle} - {post.time}</small></p>
                    <i className="fa-solid fa-ellipsis opacity-50"/>
                </div>
                <p>{post.caption}</p>
                <div className="card mb-3">
                    <img src={post.image} alt="post" className="card-img"/>
                    <div className="card-body" style={{"display": `${post.title === '' ? "none" : "block"}`}}>
                        <div className="card-text">
                            <p className="mb-0">{post.title}</p>
                            <p className="opacity-50 mb-0">{post.content}</p>
                            <a href={post.link} className="opacity-50 text-dark" style={{"textDecoration": "none"}}><i className="fa-solid fa-link"/>{post.linkName}</a>
                        </div>
                    </div>
                </div>
                <div className="row g-4 opacity-50 fs-6">
                    <div className="col d-flex align-items-center">
                        <i className="fa-regular fa-comment me-3"/>
                        <small>{post.comments}</small>
                    </div>
                    <span className="col d-flex align-items-center">
                        <i className="fa-solid fa-retweet me-3"/>
                        <small>{post.retweets}</small>
                    </span>
                    <span className="col d-flex align-items-center">
                        <i className="fa-regular fa-heart me-3"/>
                        <small>{post.likes}</small>
                    </span>
                    <span className="col d-flex align-items-center">
                        <i className="fa-solid fa-arrow-up-from-bracket"/>
                    </span>
                </div>
            </div>
        </li>
    );
}
export default PostItem;