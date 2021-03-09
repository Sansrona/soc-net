const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_MORE = 'ADD-MORE';

let initialState = {
    users: [
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {...user, followed:true}
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {...user, followed:false}
                    }
                    return user
                })
            };
        case ADD_MORE: {
           return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({
    type: FOLLOW,
    userID
})
export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID
});
export const addMoreAC = (users) => ({
    type: ADD_MORE,
    users
});

export default usersReducer;