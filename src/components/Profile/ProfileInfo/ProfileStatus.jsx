import React, {useState} from 'react'

const ProfileStatus = (props) =>{

    let [status, setStatus] = useState(false);
    let [userStatus, setUserStatus] = useState(props.status)

    const activateStatus =()=>{
        setStatus(true)
    }

    const deactivateStatus =()=>{
        setStatus(false)
    }

    console.log(status);

    return <div>
        {status ? <div>
            <input autoFocus type="text" value={props.status } onBlur={deactivateStatus} onChange={(e)=>{props.updateUserStatus(e.currentTarget.value)}}/>
        </div>
         : <div>
            <span onDoubleClick={activateStatus}>{props.status || 'El mundo'}</span>
        </div>}
        </div>
}

export default ProfileStatus;