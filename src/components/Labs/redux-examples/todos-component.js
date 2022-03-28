import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    /* create a local state variable called todo
       and mutate its value using setTodo function */
    const [todo, setTodo] = useState({do: '', done: false});
    /* create a dispatch */
    const dispatch = useDispatch();
    /* event handler -- handle checkbox click, accepts todo */
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }
    /* event handler -- handle delete button click event, accepts todo */
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: "delete-todo",
            todo
        }
        dispatch(action);
    }
    /* event handler -- handle create button click event */
    const createTodoClickHandler = () => {
        /* create an action object with action type and payload */
        const action = {
            type: 'create-todo',
            todo
        };
        /* send action to reducers */
        dispatch(action);
    }
    /* event handler -- handle keystroke changes in input field */
    const todoChangeHandler = (event) => {
        /* get data from input field */
        const doValue = event.target.value;
        /* create new todo object instance */
        const newTodo = {
            do: doValue
        };
        /* set the todo's do property */
        setTodo(newTodo);
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        /* handle keystrokes to update component state */
                        onChange={todoChangeHandler}
                        /* update field with the latest state value */
                        value={todo.do}
                        className="form-control"/>
                    <button
                        /* create button notifies event handler when clicked */
                        onClick={createTodoClickHandler}
                        className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input
                                /* show checked if done is true */
                                checked={todo.done}
                                onChange={(event) =>
                                    /* if checkbox changes, update done with checkbox's value,
                                       copy old state, overwrite done with target.checked */
                                    updateTodoClickHandler({...todo, done: event.target.checked})}
                                type="checkbox"/>
                            {todo.do}
                            <button
                                /* To pass a parameter to an event handler,
                                   make use of the arrow function or bind
                                   the function. If you pass the argument
                                   directly, the onClick function would be
                                   called automatically even before pressing
                                   the button. */
                                onClick={() => deleteTodoClickHandler(todo)}
                                className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;