import React from 'react'
import MyPosts from './MyPosts';
import {addPostActionCreactor,updateInputTextActionCreator} from '../../../redux/post-reducer.js';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        postPage:state.postPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onChangeInputText: (post)=>{dispatch(updateInputTextActionCreator(post))},
        addNew:()=>{dispatch(addPostActionCreactor())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;