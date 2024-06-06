import React from 'react'
import category from '../Assets/category'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './category.css'
const Category = () => {
  
  return (
    <div>
      <div className="category">

        { category.map((e , index)=>{
         return   <div className='cat' key={index}>
                <h1><Link to={`/categoryitem/${e.catname}`}>{e.catname}</Link></h1>
            </div>
 } )}

      </div>
    </div>
  )
}

export default Category
