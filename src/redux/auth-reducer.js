const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState ={
    login: null,
    userId:null,
    email:null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER:{
            return {...state, 
                    ...action.data,
                    isAuth: true
            }
        }
        default: return state;
    }
}

export const setAuthUser = (login, userId, email) => ({type: SET_AUTH_USER,data: {login,userId,email}})

export default authReducer;