const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosReducer = (state = data, action) => {
    switch (action.type) {
        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;
        case 'delete-todo':         /* handle delete-todo action type */
            return state.filter(    /* return new state filtered todo out */
                todo => todo !== action.todo);
        case 'create-todo':         /* handle create-todo action type */
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getTime() + ""
            };
            return [                /* create new state as array */
                ...state,           /* containing old todos */
                newTodo             /* and appending new todo at the end */
            ]                       /* return new state */
        default:
            return state;
    }
}

export default todosReducer;