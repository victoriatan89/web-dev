import * as service from '../services/tuits-service';

/* Best Practice:
   Separate reducer logic from the rendering code in TuitList/index.js.
   Declare the four types of reducer actions here. */
export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const findAllTuits = async (dispatch) => {
    /* local findAllTuits function calls the service's findAllTuits function to
       retrieve all the tuits and then sent to a reducer to store the new state. */
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
}

export const deleteTuit = async (dispatch, tuit) => {
    await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    })
}

export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type: CREATE_TUIT,
        newTuit
    });
}

export const updateTuit = async (dispatch, tuit) => {
    await service.updateTuit(tuit);
    dispatch({
        type: UPDATE_TUIT,
        tuit
    });
}
