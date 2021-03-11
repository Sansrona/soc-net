import React from 'react'
import { NavLink } from "react-router-dom";
import s from './Users.module.css'
import userIMG from '../../assets/image/user-omg.png';
import * as axios from "axios";




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
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                            withCredentials: true,
                            headers:{
                                "API-KEY":"85d6fce6-242d-4f5c-b181-97eb621bd722"
                            }
                        }).then(response => {
                            if(response.data.resultCode == 0){
                            props.unfollow(user.id);
                            }
                        })
                    }}>Unfollow</button> : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{} ,{
                            withCredentials: true,
                            headers:{
                                "API-KEY":"85d6fce6-242d-4f5c-b181-97eb621bd722"
                            }
                        }).then(response => {
                            if(response.data.resultCode == 0){
                            props.follow(user.id);
                            }
                        })
                    }}>Follow</button>}
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