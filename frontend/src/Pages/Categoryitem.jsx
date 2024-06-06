import React, { useContext } from 'react'
// import category from '../Components/Assets/category';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const Categoryitem = ({category , banner}) => {
    const {all_product}=useContext(ShopContext);
    const {catname}=useParams();
    // const prod=category.find((e)=>e.catname===catname);
    category=catname;
   
  
  return (
  
    <div className='categoryitem'>
        <div className="img">
      
          
             
        
           
                
            
          
        </div>
        {all_product.map((e , index)=>{
            if(category===e.category){
                return <Item key={index} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price}/>
                    
        
            } return null
        })}
       
      
    </div>
  )
}

export default Categoryitem
