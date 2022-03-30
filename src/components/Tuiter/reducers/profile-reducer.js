const profileData = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: 'jannunzi',
    profilePicture: '/images/jose.jpeg',
    bannerPicture: '/images/polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    tuitsCount: 5196,
    followingCount: 312,
    followersCount: 180
}

const profileReducer = (state = profileData, action) => {
    switch(action.type) {
        case 'edit-profile':
            return(action.newProfile);
        default:
            return(state);
    }
};

export default profileReducer;