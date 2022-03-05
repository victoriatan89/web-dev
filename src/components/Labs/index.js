import React from "react";
import {Link} from "react-router-dom"
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList.js";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link>|
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoList/>
        </>
    )
};

export default Labs;