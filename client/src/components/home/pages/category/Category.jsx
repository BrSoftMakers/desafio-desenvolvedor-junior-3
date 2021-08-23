import React, { useEffect, useState } from 'react'
import './category.css'
import axios from 'axios'

export default function Category() {
    const [cat,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get('/categories')  
            setCats(res.data)
        };
        getCats();
    }, [])

    return (
        <div className="category">
            <h2 className='menuCategoryTitle'>Categorias</h2>
                <ul className='menuCategory'>  
                {cat.map((c)=>(
                  <li className='menuCategoryList'>{c.name}</li>  
                ))}
                </ul>
        </div>
    )
}
