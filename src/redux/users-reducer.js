import usersAPI from '../dal/usersAPI';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_MORE = 'ADD-MORE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';



let initialState = {
    users: [],
    totalUsersCount: 0,
    usersPerPage: 5,
    currentPage: 1,
    isFetched: false,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userID === user.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            };
        case ADD_MORE: {
            return {
                ...state,
                users: action.users
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHED: {
            return {
                ...state,
                isFetched: action.isFetched
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFetched ?
                    [...state.isFollowing, action.userId] :
                    state.isFollowing.filter(id => action.userId !== id)
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => ({
    type: FOLLOW,
    userID
})
export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID
});
export const addMore = (users) => ({
    type: ADD_MORE,
    users
});

export const setTotalUsersCount = (usersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const setCurrentPage = (currentPage) => ({
    type: CURRENT_PAGE,
    currentPage
})
export const toggleIsFetched = (isFetched) => ({
    type: TOGGLE_IS_FETCHED,
    isFetched
})
export const toggleIsFollowing = (isFetched, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFetched,
    userId
})

export const getUsers = (currentPage, usersPerPage) => {
    return dispatch => {
        dispatch(toggleIsFetched(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsersAPI(currentPage, usersPerPage).then(data => {
            dispatch(toggleIsFetched(false));
            dispatch(addMore(data.items));
            dispatch(setTotalUsersCount(30));

        })
    }
}

export const setUnfollowing = (userId) => {
    return dispatch => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.deleteFollowerAPI(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
        })
    }
}

export const setFollowing = (userId) => {
    return dispatch => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.postFollowerAPI(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
        })
    }
}

export default usersReducer;