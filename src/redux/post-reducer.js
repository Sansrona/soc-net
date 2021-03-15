import { usersAPI, profileAPI } from '../dal/usersAPI';

const ADD_POST = 'ADD-POST'
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'


let initialState = {
      postData: [{
          id: 1,
          post: 'Hi there, how are you?',
          likes: 15
        },
        {
          id: 2,
          post: 'My first message',
          likes: 14
        }
      ],
      newInputText: '',
      profile: null,
      status: 'Hi'
    }

const postReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:{
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push({
                id: 5,
                post: stateCopy.newInputText,
                likes: 0
            })
            stateCopy.newInputText = '';
            return stateCopy;
        }
        case UPDATE_INPUT_TEXT:{
            let stateCopy = {...state};
            stateCopy.newInputText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        default: return state;
    }
    
}

export const addPostActionCreactor = () => ({type:ADD_POST})

export const updateInputTextActionCreator = (text) => ({type:UPDATE_INPUT_TEXT,newText:text})

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})

export const setStatus = (status) => ({type:SET_STATUS,status})
       
export const getUserStatus = (userId) => {
    return dispatch => {
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatus(response.data))
     })
}}

export const updateUserStatus = status => dispatch =>{
    profileAPI.updateStatus(status).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}

export const getUserProfile = (userId)=>{
    return dispatch => {
        profileAPI.getProfileApi(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export default postReducer;
