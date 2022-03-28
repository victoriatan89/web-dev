import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";
import './TuitListItem.css'

const TuitListItem = (
    {
        tuit = {
            _id: "567",
            topic: "Space",
            postedBy: {
                username: "SpaceX"
            },
            liked: false,
            verified: false,
            handle: "spacex",
            title: "",
            tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            attachments: {
                image: "/tuiter/images/starship.jpeg"
            },
            time: "last month",
            logo_image: "/tuiter/images/nodejs.png",
            avatar_image: "/tuiter/images/nodejs.png",
            tuits: "120K",
            stats: {
                comments: 123,
                retuits: 234,
                likes: 345
            }
        }
    }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({
            type: 'delete-tuit',
            tuit
        });
    };
    return(
        <li className="list-group-item d-flex py-3">
            <img src={tuit.avatar_image} alt="icon"
                 width="45px" height="45px"
                 className="flex-shrink-0 rounded-circle me-3" />
            <div className="w-100">
                <div className="d-flex justify-content-between">
                    <p className="mb-0 fw-bold">
                        {tuit.postedBy.username}
                        {tuit.verified && <i className="fa-solid fa-circle-check ps-1"/>}
                        <small className="opacity-50 fw-normal"> @{tuit.handle} - {tuit.time}</small>
                    </p>
                    <i className="fa-solid fa-xmark opacity-100"
                       onClick={() => deleteTuit(tuit)}/>
                </div>
                <p>{tuit.tuit}</p>
                {tuit.attachments !== undefined && tuit.attachments.video !== undefined ?
                    <div style={{"borderRadius": "15px", "overflow": "hidden"}}
                         className="video-responsive mb-3">
                    <iframe
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video" />
                    </div> : ''
                }
                {tuit.attachments !== undefined && tuit.attachments.image !== undefined ?
                    <div style={{"borderRadius": "15px", "overflow": "hidden"}} className="mb-3">
                        <img src={tuit.attachments.image} alt="Tuit" width="100%"/>
                    </div> : ''
                }
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
}
export default TuitListItem;