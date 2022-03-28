import React from "react"
import {Link,useLocation} from 'react-router-dom'
import './index.css'

const NavigationSidebar = () => {
    const location = useLocation();
    return (
        <>
            <div className="list-group">
                <Link to="/"
                      className="list-group-item">
                    <i className="fab fa-twitter fa-fw"/>
                </Link>
                <Link to="/tuiter"
                      className={`list-group-item list-group-item-action 
                      ${
                          location.pathname === "/tuiter" || 
                          location.pathname === "/tuiter/" ? 'active' : ''
                      }`}>
                    <i className="fa-solid fa-house-chimney fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore"
                      className={`list-group-item list-group-item-action 
                      ${
                          location.pathname === "/tuiter/explore" ? 'active' : ''
                      }`}>
                    <i className="fa-solid fa-hashtag fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fa-regular fa-bell fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fa-regular fa-envelope fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Messages</span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fa-regular fa-bookmark fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-list fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>
                <Link to="/tuiter/profile"
                      className={`list-group-item list-group-item-action 
                      ${
                          location.pathname === "/tuiter/profile" || 
                          location.pathname === "/tuiter/profile/edit" ? 'active' : ''
                      }`}>
                    <i className="fa-regular fa-user fa-fw me-1"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="fa-stack small fa-fw me-1">
                        <i className="fa-regular fa-circle fa-stack-2x"/>
                        <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="d-none d-xl-inline">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill">Tweet</button>
            </div>
        </>
    );
}
export default NavigationSidebar;
