import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return (
        <div className={s.descriptionBlock}>
                <img className={s.prof_img} src="https://3.bp.blogspot.com/-kKDAa7h-PXM/V_HXNu7g1fI/AAAAAAAAC6Y/vBHLJJtlXm0_z1h-ESVX75Qi6D_Nt_YpQCLcB/s1600/beautiful-waterfalls-hd-wallpaper-free-for-desktop.jpg" alt="ava image" />
                <p>ava + description</p>
        </div>
    )
}

export default ProfileInfo;