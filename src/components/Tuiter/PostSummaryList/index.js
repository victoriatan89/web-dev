import React from "react";
import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post => <PostSummaryItem post={post}/>)
            }
        </ul>
    );
}
export default PostSummaryList;