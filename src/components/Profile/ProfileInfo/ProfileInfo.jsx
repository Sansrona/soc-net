import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import userIMG from '../../../assets/image/userIMG.jpg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) { return <Preloader /> }

    let getContacts = () => {
        let arr= [];
        for (let link in props.profile.contacts){
            if(props.profile.contacts[link]){
                arr.push(<p>{link} : {props.profile.contacts[link]}</p>);
                
            }
        }
        return arr.map(e=>e);
    }

    return (<>

        <div className={s.descriptionBlock}>
            <img className={s.prof_img} src="https://3.bp.blogspot.com/-kKDAa7h-PXM/V_HXNu7g1fI/AAAAAAAAC6Y/vBHLJJtlXm0_z1h-ESVX75Qi6D_Nt_YpQCLcB/s1600/beautiful-waterfalls-hd-wallpaper-free-for-desktop.jpg" alt="ava image" />
            <div className={s.profile}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userIMG } alt="" />
                <ProfileStatus status='Hello world'/>
                <div className={s.profileInfo}>
                <table>
                    <caption>Samurai Profile</caption>
                    <tr>
                        <td>Name</td>
                        <td>{props.profile.fullName}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{props.profile.aboutMe}</td>
                    </tr>
                    <tr>
                        <td>Availability</td>
                        <td>{(props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : "No" )}</td>
                    </tr>
                    <tr>
                        <td>Contacts</td>
                        {getContacts()}
                    </tr>
                </table>
                </div>
            </div>
           

        </div>
    </>
    )
}

export default ProfileInfo;