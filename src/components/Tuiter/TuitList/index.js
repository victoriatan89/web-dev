import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {findAllTuits,deleteTuit,createTuit,updateTuit} from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    // create a local state variable with new tuit data
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    // useEffect hook declares a function callback to be invoked when the component first loads.
    useEffect(() =>
        findAllTuits(dispatch),
        []);
    return (
        <ul className="list-group mb-2">
            <li className="list-group-item">
                <button onClick={() => createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end d-flex">
                    Tuit
                </button>
                <textarea className="form-control w-75"
                          onChange={(e) =>
                              setNewTuit({...newTuit,
                                  tuit: e.target.value})}>
                </textarea>
            </li>
            {
                tuits.map && tuits.map(tuit => {
                    return(
                        <li className="list-group-item">
                            <i className="fas fa-remove float-end"
                               onClick={() => deleteTuit(dispatch, tuit)}/>
                            {tuit.tuit}
                            <div>
                                Likes: {tuit.likes}
                                <i className="far fa-thumbs-up ms-2"
                                   onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})}/>
                            </div>
                            <div>
                                Dislikes: {tuit.dislikes}
                                <i className="far fa-thumbs-down ms-2"
                                   onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})}/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default TuitList;