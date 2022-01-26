// import  {useContext} from 'react'
import './cart.scss'
import  background from '../../shopify-images/background.jpg'

 const Cart=({cartContext})=>{
  
     
  
     console.log('param',)
     return(
         <div className='cart' style={{backgroundImage:`url(${background})`}}>
           
             <h1>
                You have {cartContext}  items in your cart
                 </h1>
                 <button onClick={()=>{alert('hi')}}>i am context</button>
         </div>
     )
 }
 
 export default Cart