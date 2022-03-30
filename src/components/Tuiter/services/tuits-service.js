import axios from "axios"; // import axios library to programmatically send and receive HTTP requests.

// When connecting to a local Node server
// const TUITS_API = 'http://localhost:4000/api/tuits';

// When connecting to remote Heroku Node server
// const TUITS_API = 'https://web-dev-server-app.herokuapp.com/api/tuits';

/* Use environment variable to define application wide constants
   based on the environment the application is running in.
   If the app runs locally, REACT_APP_API_BASE can be set to
        'http://localhost:4000/api'
   If runs remotely in Netlify, REACT_APP_API_BASE can instead be set to
        'https://web-dev-server-app.herokuapp.com/api' */
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

/* Declare four common CRUD operations.
   All implemented as asynchronous functions that
   will not block the browser's sole JavaScript thread. */
export const findAllTuits = async () => {
    // Send an HTTP GET request to the TUITS_API
    const response = await axios.get(TUITS_API);
    /* The data in the response is the tuits array set back from server,
       which is embedded in the response's data property. */
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const createTuit = async (tuit) => {
    /* Embeds the tuit parameter in the body of the HTTP request
       and then posts it to TUITS_API. */
    const response = await axios.post(TUITS_API, tuit);
    // The response data contains the new tuit including a unique id
    // and initial default values such as likes set to 0.
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}