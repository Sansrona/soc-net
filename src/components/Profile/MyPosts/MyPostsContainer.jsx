import React from 'react'
import MyPosts from './MyPosts';
import {addPostActionCreactor,updateInputTextActionCreator} from '../../../redux/post-reducer.js';


const MyPostsContainer = (props) => {
    let store = props.store;
    let addNew = () => {
        props.store.dispatch(addPostActionCreactor())
    }

    let onChangeInputText = (post) => {
        let action = updateInputTextActionCreator(post);
        props.store.dispatch(action);
    }


    return (
        <MyPosts onChangeInputText={onChangeInputText} addNew={addNew} postPage={store.getState().postPage}/>
    )
}

export default MyPostsContainer;