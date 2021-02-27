import React from 'react'
import s from './Message.module.css';

const Message = (props) => {

    return (
        props.messageData.map(item => <div className={s.message}>{item.message}</div>)
    )
}

export default Message;