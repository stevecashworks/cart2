import './buttons.scss';
import {FaArrowUp,FaArrowDown} from 'react-icons/fa'
import {useState} from 'react';
const Buttons=({name,dispatch,price})=>{
    
    const [quantity,setQuantity]= useState(0)
    const next=()=>{setQuantity(quantity+1);dispatch({type:'add',payLoad:{name, quantity,price}})};
    const prev=()=>{setQuantity(quantity=>{
        if(quantity===0){return 0}
        return quantity-1
    });
    {dispatch({type:"remove",payLoad:{name,quantity,price}})}
}

    return (
    <div className='buttons'>
       <button onClick={next}> <FaArrowUp/></button>
        <h1 >{quantity}</h1>
        <button onClick={prev}><FaArrowDown/></button>
        <button  className='btn' >Add To Cart</button>
        
    </div>
)
}
export default Buttons