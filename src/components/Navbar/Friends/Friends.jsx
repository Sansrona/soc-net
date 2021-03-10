import React from 'react'
import s from './Friends.module.css'


const Friends = (props) =>{
    return (
        <div >
            <h2>Friends</h2>
            <div className={s.friends}>
                {props.dialogData.filter(item=>item.id<4).map(friend=><div key={friend.id} className={s.friend}><img src={friend.img} alt="Icon" />{friend.name}</div>)}
            </div>
        </div>
    )
}

export default Friends;