import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div>
            <div className={s.posts} >
                <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;