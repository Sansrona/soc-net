import React from 'react'
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    return (
            props.dialogData.map(item => <div key={item.id} className={s.dialog}><img src={item.img} alt=""/><NavLink to={'/dialogs/' + item.id} activeClassName={s.active}>{item.name}</NavLink> </div>)
       )
}

export default Dialog;