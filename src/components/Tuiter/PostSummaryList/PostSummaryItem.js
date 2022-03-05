import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/images/react.png"
        }
    }) => {
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <div className="me-4">
                    <small className="opacity-25 mb-0">{post.topic}</small>
                    <div className="d-flex align-items-center gap-1 mb-0">
                        <span className="fw-bold">{post.userName}</span>
                        <i className="fa-solid fa-circle-check"/>
                        <small className="opacity-25"> - {post.time}</small>
                    </div>
                    <p className="fw-bold mb-0">{post.title}</p>
                </div>
                <img src={post.image} alt="post image" width="80" height="80" className="rounded align-self-center"/>
            </div>
        </li>
    );
}
export default PostSummaryItem;