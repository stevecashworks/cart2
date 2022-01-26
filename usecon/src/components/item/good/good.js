import './good.scss'


const Good=({img,name, price})=>{
    

    return(<div className='details'>
    <img src= {img} alt={name}/>
    <h4>{name}</h4>
    <h5>Price<span style={{color:'white'}}>($)</span>: {price} </h5>
    </div>
    )
}
export default Good