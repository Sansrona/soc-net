import React from 'react'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/message-reducer.js'


const mapStateToProps = (state) => {
    return {
        messagePage:state.messagePage,
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMsg:(mes)=>{dispatch(updateNewMessageTextActionCreator(mes));},
        addMsg:()=>{dispatch(addMessageActionCreator());}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;