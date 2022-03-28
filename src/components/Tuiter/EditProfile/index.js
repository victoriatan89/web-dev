import React,{useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import "./EditProfile.css"

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const [name, setName] = useState(`${profile.firstName} ${profile.lastName}`);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(new Date(profile.dateOfBirth).toISOString().slice(0, 10));
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(!regName.test(name)){
            alert('Please enter your full name!');
        }
        let birthday = new Date(dob);
        birthday = new Date(birthday.getUTCFullYear(), birthday.getUTCMonth(), birthday.getUTCDate());
        const newProfile = {
            ...profile,
            firstName: name.trim().split(" ")[0],
            lastName: name.trim().split(" ")[1],
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: birthday.toLocaleDateString()
        }
        const action = {
            type: 'edit-profile',
            newProfile
        }
        dispatch(action);
    }
    return(
        <div>
            <div className="d-flex justify-content-between pt-2 pb-3">
                <div className="d-flex align-items-center gap-4">
                    <Link to="/tuiter/profile">
                        <i className="fa-solid fa-xmark ps-2"
                           style={{"color": "white"}}/>
                    </Link>
                    <h5 className="mb-0 fw-bold">Edit profile</h5>
                </div>
                <Link to="/tuiter/profile"
                      className="btn btn-dark rounded-pill text-black bg-white fw-bold me-3"
                      onClick={saveClickHandler}>
                    Save
                </Link>
            </div>
            {profile.bannerPicture && <img src={profile.bannerPicture} width="100%" alt="banner"/>}
            {
                profile.profilePicture &&
                <img src={profile.profilePicture} width="150px" height="150px" alt="headshot"
                     className="rounded-circle overlap border border-5 border-light"/>
            }
            <div className="overlap mt-4 me-4">
                <form className="form-floating mb-3">
                    <input type="text" className="form-control bg-black text-white"
                           id="userName" value={name}
                           onChange={(event) => {setName(event.target.value)}}/>
                    <label htmlFor="userName">Name</label>
                </form>
                <form className="form-floating mb-3">
                    <textarea className="form-control bg-black text-white"
                              style={{"height": "auto"}} id="userBio" value={bio}
                              onChange={(event) => {setBio(event.target.value)}}/>
                    <label htmlFor="userBio">Bio</label>
                </form>
                <form className="form-floating mb-3">
                    <input type="text" className="form-control bg-black text-white"
                           id="userLocation" value={location}
                           onChange={(event) => {setLocation(event.target.value)}}/>
                    <label htmlFor="userLocation">Location</label>
                </form>
                <form className="form-floating mb-3">
                    <input type="url" className="form-control bg-black text-white"
                           id="userWebsite" value={website}
                           onChange={(event) => {setWebsite(event.target.value)}}/>
                    <label htmlFor="userWebsite">Website</label>
                </form>
                <form className="form-floating">
                    <input type="date" className="form-control bg-black text-white"
                           id="userDob" value={dob}
                           onChange={(event) => {
                               setDob(event.target.value);
                           }}/>
                    <label htmlFor="userDob">Date of Birth</label>
                </form>
            </div>
        </div>
    )
}
export default EditProfile;