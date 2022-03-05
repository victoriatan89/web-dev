import React from "react";
import {Link} from "react-router-dom";
import PostSummaryList from "../PostSummaryList";
import './ExploreComponent.css'

const ExploreComponent = () => {
    return(
        <>
            {/*search field and cog*/}
            <div className="row mb-2">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1 input-icon me-4">
                        <i className="fa-solid fa-magnifying-glass"/>
                        <input type="search" className="form-control" placeholder="Search Tuiter"/>
                    </div>
                    <Link to="/"><i className="fa-solid fa-gear fa-2x"/></Link>
                </div>
            </div>
            {/*tabs*/}
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="true" to="/">For you</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Trending</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Sports</Link>
                </li>
                <li className="nav-item d-none d-md-inline-block">
                  <Link className="nav-link" to="/">Entertainment</Link>
                </li>
            </ul>
            {/*image with overlaid text*/}
            <div className="card mb-2">
                <img src="/tuiter/images/starship.jpeg" alt="starship" className="card-img"/>
                <div className="card-img-overlay">
                    <h3 className="card-title text-white fw-bold">SpaceX's Starship</h3>
                </div>
            </div>
            {/*post summary list*/}
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
