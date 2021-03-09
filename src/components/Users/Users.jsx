import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userIMG from '../../assets/image/user-omg.png';

class Users extends React.Component{
    constructor(props){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            props.addMore(response.data.items)
        })
    }

    render(){
        return (
        <div className={s.usersContainer}>
            {this.props.users.map((user) =>
                <div key={user.id} className={s.usersFlexContainer}>
                    <div className={s.intro}>
                        <img className={s.userImg} src={user.photos.small ? user.photos.small : userIMG} alt="user avatar" />
                        {user.followed ? <button onClick={() => {
                            this.props.unfollow(user.id);
                        }}>Follow</button> : <button onClick={() => {
                            this.props.follow(user.id);
                        }}>Unfollow</button>}
                    </div>
                    <div className={s.profile}>
                        <div className={s.userProfile}>
                            <span className={s.username}>{user.name}</span>
                            <span>{user.description}</span>
                        </div>
                        <div className={s.userLocation}>
                            <span>{'user.location.city'}</span>
                            <span>{'user.location.country'}</span>
                        </div>
                    </div>
                </div>
            )}
            <button className={s.add_more_btn} onClick={()=>{this.props.addMore([{
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
    }])}}>Add More</button>
        </div>
    )
    }
}


export default Users;