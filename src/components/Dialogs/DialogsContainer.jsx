import React from 'react'
import Dialogs from './Dialogs'
import withRedirectComponent from '../common/Redirect/Redirect'
import {connect} from 'react-redux'
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/message-reducer.js'
import {compose} from 'redux'


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

export default compose(connect(mapStateToProps,mapDispatchToProps),withRedirectComponent)(Dialogs)

