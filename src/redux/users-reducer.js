const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_MORE = 'ADD-MORE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';



let initialState = {
    users: [
    ],
    totalUsersCount: 0,
    usersPerPage:5,
    currentPage:1
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
           return {...state, users: action.users};
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.usersCount}
        }
        case CURRENT_PAGE:{
            return {...state,currentPage: action.currentPage}
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

export const setTotalUsersCountAC = (usersCount) =>({type:SET_TOTAL_USERS_COUNT, usersCount})
export const setCurrentPageAC = (currentPage) => ({type:CURRENT_PAGE, currentPage })

export default usersReducer;