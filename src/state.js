const ADD_POST = 'ADD-POST'
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT'
export let store = {
   _state:{
    dialogPage: {
      dialogData: [{
          id: 1,
          name: 'Me',
          img: 'https://www.tinydog.ru/wp-content/uploads/2016/05/Korgi.jpg'
        },
        {
          id: 2,
          name: 'Teacher',
          img: 'https://i.pinimg.com/originals/eb/db/af/ebdbaf14cd4e23717ee93bc2c3f1498b.jpg'
        },
        {
          id: 3,
          name: 'Bro',
          img: 'https://www.theglobeandmail.com/resizer/9AbmYKTSqxiwBvpNp2-jt_4UiUo=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/H6PZEFXY55HNHECGOXGXSRMNZA.jpg'
        },
        {
          id: 4,
          name: 'President',
          img: 'https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/07/get-ad-users-from-text-file---user-2517433_960_720.png'
        },
        {
          id: 5,
          name: 'Jim',
          img: 'https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/07/get-ad-users-from-text-file---user-2517433_960_720.png'
        }
      ]
    },
    messagePage: {
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
      ]
    },
    postPage: {
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
      newInputText: 'Hi man'
    }
  },
  _callSubscriber() {},

  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    if(action.type === ADD_POST){
      this._state.postPage.postData.push({
        id: 5,
        post: this._state.postPage.newInputText,
        likes: 0
      })
      this._state.postPage.newInputText = '';
      this._callSubscriber(this._state);
      // updateInputText("");
    } else if(action.type === UPDATE_INPUT_TEXT ) {
      this._state.postPage.newInputText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreactor = () =>{
  return {
    type:ADD_POST
  }
}


export const updateInputTextActionCreator = (text) =>{
  return {
    type:UPDATE_INPUT_TEXT,
    newText:text
  }
}


window.store = store;

export default store;