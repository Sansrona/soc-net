const ADD_POST = 'ADD-POST'
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT'

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
      newInputText: ''
    }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.postData.push({
                id: 5,
                post: state.newInputText,
                likes: 0
            })
            state.newInputText = '';
            return state;
        case UPDATE_INPUT_TEXT:
            state.newInputText = action.newText;
            return state;
        default: return state;
    }
    
}

export const addPostActionCreactor = () => ({type:ADD_POST})

export const updateInputTextActionCreator = (text) => ({type:UPDATE_INPUT_TEXT,newText:text})

export default postReducer;