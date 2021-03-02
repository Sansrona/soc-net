import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div >
            <div className={s.posts} >
                <ProfileInfo />
                <MyPosts postData={props.postPage.postData} newInputText={props.postPage.newInputText} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile;