import React from 'react'
import Dialogs from './Dialogs'
import withRedirectComponent from '../common/Redirect/Redirect'
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

let withAuthRedirectComponent = withRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirectComponent);

export default DialogsContainer;