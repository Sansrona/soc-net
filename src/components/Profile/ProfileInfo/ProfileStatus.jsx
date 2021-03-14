import React, {useState} from 'react'

const ProfileStatus = (props) =>{

    let [status, setStatus] = useState(false);

    const activateStatus =()=>{
        setStatus(true)
    }

    const deactivateStatus =()=>{
        setStatus(false)
    }
    console.log(status);

    return <div>
        {status ? <div>
            <input autoFocus type="text" value={props.status} onBlur={deactivateStatus}/>
        </div>
         : <div>
            <span onDoubleClick={activateStatus}>{props.status}</span>
        </div>}
        </div>
}

export default ProfileStatus;