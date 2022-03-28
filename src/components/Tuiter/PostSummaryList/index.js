import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const posts = useSelector((state) => state.posts);
    return(
        <ul className="list-group mb-2">
            {
                posts.map(post => <PostSummaryItem post={post}/>)
            }
        </ul>
    );
}
export default PostSummaryList;