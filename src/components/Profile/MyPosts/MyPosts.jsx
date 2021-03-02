import React from 'react'
import Post from './Post/Post'

import s from './MyPosts.module.css'



const MyPosts = (props) => {
    let text = React.createRef();

    let addNew = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onChangeInputText = () => {
        props.dispatch({type: 'UPDATE-INPUT-TEXT',newText:text.current.value});
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