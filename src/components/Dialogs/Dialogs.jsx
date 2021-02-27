import React from 'react'
import s from './Dialogs.module.css';

import Message from './Message/Message'
import Dialog from './Dialog/Dialog'




const Dialogs = (props) => {
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <Dialog dialogData={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.messageData}/>
            </div>
        </div>
    )
}

export default Dialogs;