import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="d-flex py-3">
            <img src="/tuiter/images/elon-musk.jpeg" alt="icon" width="45px" height="45px" className="flex-shrink-0 rounded-circle me-3" />
            <div className="list-group list-group-flush w-100">
                <textarea
                    className="list-group-item form-control bg-black text-white mb-3"
                    placeholder="What's happening?"
                    value={whatsHappening}
                    onChange={(event) =>
                        setWhatsHappening(event.target.value)}>
                </textarea>
                <div className="list-group-item bg-black d-flex justify-content-between">
                    <div className="text-primary">
                        <i className="fa-regular fa-image pe-3"/>
                        <i className="fa-solid fa-chart-line pe-3"/>
                        <i className="fa-regular fa-face-smile pe-3"/>
                        <i className="fa-regular fa-calendar"/>
                    </div>
                    <button className="btn btn-primary rounded-pill" onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;