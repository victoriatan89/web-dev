import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './ProfileScreen.css'

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
    });
    const dob = longEnUSFormatter.format(new Date(profile.dateOfBirth));
    const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
    const joined = profile.dateJoined.split("/");
    const joinedMonth = months[joined[0] - 1];
    const joinedYear = joined[1];
    return(
        <div>
            <div className="d-flex gap-4 align-items-center p-2">
                <i className="fa-solid fa-arrow-left ps-2"/>
                <div>
                    <h5 className="mb-0 fw-bold">{profile.firstName} {profile.lastName}</h5>
                    {profile.tuitsCount && <p className="mb-0 opacity-75">{profile.tuitsCount} Tuits</p>}
                </div>
            </div>
            {profile.bannerPicture && <img src={profile.bannerPicture} width="100%" alt="banner"/>}
            {
                profile.profilePicture &&
                <img src={profile.profilePicture} width="150px" height="150px" alt="headshot"
                     className="rounded-circle overlap border border-5 border-light"/>
            }
            <Link to="/tuiter/profile/edit"
                  className="btn btn-outline-dark rounded-pill float-end mt-3 me-3">
                <strong>Edit profile</strong>
            </Link>
            <div className="p-2 overlap">
                <h5 className="fw-bolder mb-0">{profile.firstName} {profile.lastName}</h5>
                <p className="opacity-50 fw-bold">@ {profile.handle}</p>
                <p className="text-white">{profile.bio}</p>
                <div className="opacity-50 mb-2">
                    <span className="me-4">
                        <i className="fa-solid fa-location-dot me-1"/>{profile.location}
                    </span>
                    <span className="me-4">
                        <i className="fa-solid fa-link me-1"/>
                        <a href={profile.website.replace(/^(https?:\/\/)?/i,
                            (a)=>a || 'http://')}>
                            {profile.website}
                        </a>
                    </span>
                    <span className="me-4" style={{"display": "inline-block"}}>
                        <i className="fa-solid fa-cake-candles me-1"/>Born {dob}
                    </span>
                    <span style={{"display": "inline-block"}}>
                        <i className="fa-solid fa-calendar-days me-1"/>Joined {joinedMonth}, {joinedYear}
                    </span>
                </div>
                <div className="d-flex gap-3">
                    <span>
                        <b>{profile.followingCount}</b>
                        <span className="opacity-50 ms-1">Following</span>
                    </span>
                    <span>
                        <b>{profile.followersCount}</b>
                        <span className="opacity-50 ms-1">Followers</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ProfileScreen;