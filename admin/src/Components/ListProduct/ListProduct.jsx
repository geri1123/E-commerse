import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cros_icon from "../../assets/cross_icon.png"
const ListProduct = () => {
   const [allproducts , setAllProducts]=useState([]);
   const [searchTerm , setSearchTerm]=useState('');
   const fetchInfo =async ()=>{
     await fetch('http://localhost:4000/allproducts')
     .then((res)=>res.json())
     .then((data)=>{setAllProducts(data)});

   }
   useEffect(()=>{
     fetchInfo();
   } ,[])
   
   const remove_product=async (id)=>{
    await fetch('http://localhost:4000/removeproduct' ,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})

    })
   await fetchInfo();
   }
   
  return (
    <div className='list-product'>
      <h1>All products</h1>
      <input type="text" 
      placeholder='search..'
      onChange={(event)=>{setSearchTerm(event.target.value)}}
      />
      <p>{allproducts.length} products on the list</p> {/* filter((e)=>e.category.includes('men'))*/}
      <div className="listproducts-format-main">
        <p>products</p>
        <p>title</p>
        <p>old price</p>
        <p>new price</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
         {allproducts.filter((product)=>{
          if(searchTerm==""){
            return product
          } else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return product
          }

         })
         .map((product ,index )=>{
          return <>
          <div key={index} className="listproducts-format-main list-product-format" >
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cros_icon} alt="" className="listproduct-remove-icon" />
          </div>
          <hr />
          </>
        })} 
      

      </div>

    </div>
  )
}

export default ListProduct
