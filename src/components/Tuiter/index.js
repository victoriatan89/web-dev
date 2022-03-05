import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen";
import PostItem from "./PostList/PostItem";
import PostList from "./PostList";
import HomeScreen from "./HomeScreen";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <WhoToFollowListItem who={{
                "avatarIcon": '/tuiter/images/virgin-galactic.png',
                "userName": 'Virgin Galactic',
                "userHandle": 'virgingalactic'
            }}/>
            <WhoToFollowList/>
            <PostSummaryItem/>
            <PostSummaryItem post={{
                "topic": "Web Development",
                "userName": "",
                "title": "jQuery",
                "time": "last week",
                "image": "/tuiter/images/jquery.png",
                "tweets": "122K"
            }}/>
            <PostSummaryList/>
            <ExploreComponent/>
            <ExploreScreen/>
            <PostItem/>
            <PostItem post={{
                "avatarIcon": "/tuiter/images/new-york-post.png",
                "userName": "New York Post",
                "userHandle": "nypost",
                "time": "23h",
                "caption": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx2Gfaq",
                "image": "/tuiter/images/grimes.jpeg",
                "title": "",
                "content": "",
                "link": "",
                "linkName": "",
                "comments": "965",
                "retweets": "2.4K",
                "likes": "4K"
            }}/>
            <PostList/>
            <HomeScreen/>
        </>
    )
};
export default Tuiter;