import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    let users = props.usersPage.users;
    return (
        <div className={s.usersContainer}>
            {users.map((user) =>
                <div key={user.id} className={s.usersFlexContainer}>
                    <div className={s.intro}>
                        <img className={s.userImg} src={user.photoUser} alt="user avatar" />
                        {user.followed ? <button onClick={() => {
                            props.unfollow(user.id);
                        }}>Follow</button> : <button onClick={() => {
                            props.follow(user.id);
                        }}>Unfollow</button>}
                    </div>
                    <div className={s.profile}>
                        <div className={s.userProfile}>
                            <span className={s.username}>{user.fullName}</span>
                            <span>{user.description}</span>
                        </div>
                        <div className={s.userLocation}>
                            <span>{user.location.city}</span>
                            <span>{user.location.country}</span>
                        </div>
                    </div>
                </div>
            )}
            <button className={s.add_more_btn} onClick={()=>{props.addMore(users)}}>Add More</button>
        </div>
    )
}

export default Users;