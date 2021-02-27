import React from 'react'
import s from './Post.module.css'

const Post = ({postData}) => {
    return (
        <div className={s.post}>
           <img className={s.image} src="https://i.pinimg.com/736x/bf/89/2e/bf892e298fdfaa1c750b687eb25a0ec6--avatar-art-work.jpg" alt=""/>
            {postData.post}
           <div>
                <span>Likes</span> {postData.likes}
            </div>
        </div>
    )
}

export default Post;

