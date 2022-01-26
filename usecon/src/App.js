import Cart from './components/cart/cart'
 import './app.css';
 import data from './data';
 import {useReducer} from 'react';
 import Header from './components/header/header';
 import Item from './components/item/item';
import reducer from './reducer'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
// import About from './components/about/about'

//  import none from './none';
 const Ap = ({dispatch}) => {
   return (<>
 {data.map(item =><Item price={item.price} name={item.name}img={item.img} dispatch={dispatch}/>)}   
   
   </>  );
 }
  
 
 const App=()=>{
  
  const defaultState={
    arr:{},
     no:0,
     price:0
  
  }
  
 

  

  




  


  let[state,dispatch]=useReducer(reducer, defaultState);
    

console.log(state)
 
    return(<div>


<Header state={state}  />
<Router>
  <Routes>
    <Route  path= '/cart' element={<Cart cartContext= {4} />}/>
    </Routes>
  
  
  </Router>   



<Ap dispatch={dispatch}/>
    </div>

        

        
    )
 }
 export default App;