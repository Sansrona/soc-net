import React from 'react'
import s from './Dialogs.module.css';

import Message from './Message/Message'
import Dialog from './Dialog/Dialog'





const Dialogs = (props) => {

    let dialogPage = props.dialogPage;

    let messagePage = props.messagePage;

    let msg = React.createRef(); //message created inside textarea

    let onChangeMsg = () => {
        props.changeMsg(msg.current.value);
    }

    let onAddMsg = () => {
        props.addMsg();
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <Dialog dialogData={dialogPage}/>
            </div>
            <div className={s.messages}>
                <Message messageData={messagePage.messageData}/>
                <textarea value={messagePage.newMessageText} ref={msg} onChange={onChangeMsg}></textarea>
                <button onClick={onAddMsg}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;