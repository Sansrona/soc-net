import React from 'react'
import Post from './Post/Post'

import s from './MyPosts.module.css'



const MyPosts = (props) => {

        let text = React.createRef();
        let alertText = () =>{
            alert(text.current.value);
        }

    return (
        <div className = {s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={text}></textarea></div>
                <div><button onClick={alertText}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {props.postData.map(item=><Post postData={item} />)}
            </div>
        </div>
    )
}

export default MyPosts;