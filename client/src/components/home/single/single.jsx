import React from 'react'
import './single.css'
import Category from '../pages/category/Category'
import SiglePost from '../pages/singlePost/SinglePost'

export default function single() {
    return (
        <div className='single'>
            <SiglePost />
            <Category />
        </div>
    )
}
