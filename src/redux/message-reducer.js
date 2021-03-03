const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';



const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messageData.push({
                id: 4,
                message: state.newMessageText
            })
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }

}


export const updateNewMessageTextActionCreator = (message) => ({type:UPDATE_NEW_MESSAGE_TEXT, newMessage:message});

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});

export default messageReducer;