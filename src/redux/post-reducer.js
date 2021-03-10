const ADD_POST = 'ADD-POST'
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
      profile: null
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
        default: return state;
    }
    
}

export const addPostActionCreactor = () => ({type:ADD_POST})

export const updateInputTextActionCreator = (text) => ({type:UPDATE_INPUT_TEXT,newText:text})

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})

export default postReducer;
