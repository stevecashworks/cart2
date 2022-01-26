import './header.scss';
import {FaShoppingBag} from 'react-icons/fa'
import {BrowserRouter as Router,Link} from 'react-router-dom'


 const Header=({state })=>{
    

    return (
        <div className='header'>
            <h1 className='logo'>B<sub style={{fontSize:'40px'}}>u</sub>yme</h1>
            {Boolean(state.price)&&<h1> Total: ${state.price}</h1>}
            <div>
                <Router>
                    <Link to='/cart'>

            <FaShoppingBag className='icon1'/>
 {Boolean(state.no)&&<h1 className='no__of__goods' >{state.no}</h1>}
                </Link>
                </Router>
                
                
                <button onClick={()=>{alert('hi')}}> how far</button>
        </div>
        </div>
    )
 }
 export default Header;