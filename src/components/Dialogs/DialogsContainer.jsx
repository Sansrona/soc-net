import React from 'react'
import Dialogs from './Dialogs'

import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/message-reducer.js'




const DialogsContainer = (props) => {
    let store = props.store;

    let changeMsg = (mes) => {
        props.store.dispatch(updateNewMessageTextActionCreator(mes))
    }

    let addMsg = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
       <Dialogs changeMsg={changeMsg} addMsg={addMsg} messagePage={store.getState().messagePage} dialogPage={store.getState().dialogPage.dialogData} />
    )
}

export default DialogsContainer;