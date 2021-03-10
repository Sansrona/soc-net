import React from 'react'
import { NavLink } from "react-router-dom";
import s from './Users.module.css'
import userIMG from '../../assets/image/user-omg.png';




let Users = (props) => {
        let pagination = Math.ceil(props.totalUsersCount / props.usersPerPage);
        let pageCounts = [];
        for (let i = 1; i <= pagination; i++) { pageCounts.push(i) }
    
    return <div className={s.usersContainer}>
                {pageCounts.map(page => { return <span key={page} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.selectedPage : ''}>{page}</span> })}
                {props.users.map((user) =>
                    <div key={user.id} className={s.usersFlexContainer}>
                        <div className={s.intro}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.userImg} src={user.photos.small ? user.photos.small : userIMG} alt="user avatar" />
                        </NavLink>
                            {user.followed ? <button onClick={() => {
                                props.unfollow(user.id);
                            }}>Follow</button> : <button onClick={() => {
                                props.follow(user.id);
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
            </div>
            
}

export default Users;