import Good from "./good/good";
 import React from 'react'
 import Buttons from "./buttons/buttons"
 import propTypes from 'prop-types'
 import './item.scss'
  
 const Item=({img,name, dispatch,price})=>{
    
     Item.propTypes={
         img:propTypes.number.isRequired
     }
    
    return(
    
<div className='Item'>
   <Good img={img} name={name}  price={price} />
    <Buttons name={name} dispatch={dispatch} price={price} />
</div>

     )     
 }
 export default  Item 