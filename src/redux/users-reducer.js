const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const ADD_MORE = 'ADD-MORE';

let initialState = {
    users: [{
            id: 1,
            followed: true,
            photoUser: 'https://present5.com/customparser/425479586_452894552%20---%20days_of_the_week_ppt_raznocvetnyy_parakpen.ppt/slide_8.jpg',
            fullName: 'Monday Tuesday',
            description: 'Follow me',
            location: {
                city: 'San Francisco',
                country: 'USA'
            }
        },
        {
            id: 2,
            followed: false,
            photoUser: 'https://present5.com/customparser/425479586_452894552%20---%20days_of_the_week_ppt_raznocvetnyy_parakpen.ppt/slide_8.jpg',
            fullName: 'Wednesday Thursday',
            description: 'Not Follow me',
            location: {
                city: 'Beijing',
                country: 'China'
            }
        },
        {
            id: 3,
            followed: false,
            photoUser: 'https://present5.com/customparser/425479586_452894552%20---%20days_of_the_week_ppt_raznocvetnyy_parakpen.ppt/slide_8.jpg',
            fullName: 'Friday Saturday Sunday',
            description: 'You can"t see me',
            location: {
                city: 'London',
                country: 'GB'
            }
        },
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