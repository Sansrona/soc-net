let initialState = {
      dialogData: [{
          id: 1,
          name: 'Me',
          img: 'https://www.tinydog.ru/wp-content/uploads/2016/05/Korgi.jpg'
        },
        {
          id: 2,
          name: 'Oogway',
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
    }

const dialogReducer = (state = initialState,action) =>{
    return state;
}

export default dialogReducer;