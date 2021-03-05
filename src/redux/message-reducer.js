const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messageData: [{
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'How are you?'
    },
    {
      id: 3,
      message: 'Where is my money?'
    },
  ],
  newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = {
        ...state
      };
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push({
        id: 4,
        message: stateCopy.newMessageText
      })
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }
    default:
      return state;
  }

}


export const updateNewMessageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message
});
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
});

export default messageReducer;