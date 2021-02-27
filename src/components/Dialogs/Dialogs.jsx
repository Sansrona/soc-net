import React from 'react'
import s from './Dialogs.module.css';

import Message from './Message/Message'
import Dialog from './Dialog/Dialog'




const Dialogs = (props) => {

    let msg = React.createRef();
    let send =()=>{
        alert(msg.current.value);
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <Dialog dialogData={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.messageData}/>
                <textarea ref={msg}></textarea>
                <button onClick={send}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;