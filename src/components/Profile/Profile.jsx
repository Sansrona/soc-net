import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div >
            <div className={s.posts} >
                <ProfileInfo />
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile;