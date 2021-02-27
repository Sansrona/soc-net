import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div >
            <div className={s.posts} >
                <ProfileInfo />
                <MyPosts postData={props.postData}/>
            </div>
        </div>
    )
}

export default Profile;