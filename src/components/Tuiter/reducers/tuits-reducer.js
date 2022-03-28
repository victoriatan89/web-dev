import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "Elon Musk",
                },
                liked: false,
                verified: true,
                handle: "elonmusk",
                time: "now",
                avatar_image: "/tuiter/images/elon-musk.jpeg",
                stats: {
                    comments: 111,
                    retuits: 222,
                    likes: 333
                }
            }
            return [newTuit, ...state];
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id
            );
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id !== action.tuit._id) {
                    return tuit;
                } else {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                }
            });
        default:
            return tuits;
    }
}

export default tuitsReducer;