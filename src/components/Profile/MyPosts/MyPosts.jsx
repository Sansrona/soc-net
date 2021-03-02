import React from 'react'
import Post from './Post/Post'
import {addPostActionCreactor,updateInputTextActionCreator} from '../../../state';

import s from './MyPosts.module.css'



const MyPosts = (props) => {
    let text = React.createRef();

    let addNew = () => {
        props.dispatch(addPostActionCreactor())
    }

    let onChangeInputText = () => {
        let action = updateInputTextActionCreator(text.current.value);
        props.dispatch(action);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeInputText} ref={text} value={props.newInputText}></textarea>
                </div>
                <div><button onClick={addNew}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {props.postData.map(item => <Post postData={item} />)}
            </div>
        </div>
    )
}

export default MyPosts;