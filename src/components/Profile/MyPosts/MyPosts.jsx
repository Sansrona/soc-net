import React from 'react'
import Post from './Post/Post'
import {addPostActionCreactor,updateInputTextActionCreator} from '../../../redux/post-reducer.js';

import s from './MyPosts.module.css'



const MyPosts = (props) => {

    let postPage = props.postPage;

    let text = React.createRef();

    let onAddNew = () => {
        props.addNew()
    }

    let onChangeInputText = () => {
        props.onChangeInputText(text.current.value);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeInputText} ref={text} value={postPage.newInputText}></textarea>
                </div>
                <div><button onClick={onAddNew}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postPage.postData.map(item => <Post postData={item} />)}
            </div>
        </div>
    )
}

export default MyPosts;