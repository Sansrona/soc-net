import React from 'react'
import s from './Dialogs.module.css';

import Message from './Message/Message'
import Dialog from './Dialog/Dialog'

import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/message-reducer.js'




const Dialogs = (props) => {

    let msg = React.createRef(); //message created inside textarea

    let changeMsg = () => {
        props.dispatch(updateNewMessageTextActionCreator(msg.current.value))
    }

    let addMsg = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <Dialog dialogData={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.messagePage.messageData}/>
                <textarea value={props.messagePage.newMessageText} ref={msg} onChange={changeMsg}></textarea>
                <button onClick={addMsg}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;