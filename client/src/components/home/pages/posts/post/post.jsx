import React from 'react'
import './post.css'

export default function post({post}) {
    return (
        <div className='post'>
            {post.photo && (
                <img className='imgPost' src={post.photo} alt=''/>
            )}
            
            <div className='postInfo'>
                <div className='postcategories'>
                    <span className='postCategory'>{
                        post.categories.map((c)=>(
                            <span className='postCategory'>{c.name}</span>
                        ))
                    }</span>
                </div>
                <a href={`/post/${post._id}`}>
                <div className='postTitle'>
                    <span className='titlePost'>{post.title}</span>
                </div>
                </a>
                <br />
                <span className='postData'>{new Date(post.createdAt).toString()}</span>
            </div>
            <p>{post.desc}</p>

        </div>
    )
}
