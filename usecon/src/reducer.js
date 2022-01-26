
function  addValue(obj,name,value){
    obj[name]=value
return obj
}
export default function reducer(state,action){

    
    if(action.type==='add'){
        
        return{
            ...state,
            no: state.arr[action.payLoad.name]===0||state.arr[action.payLoad.name]===undefined?state.no+1:state.no
            ,arr: {...state.arr, ...addValue(state.arr,action.payLoad.name,action.payLoad.quantity+1)}
            ,price:state.price+action.payLoad.price
        }
    }
    else if(action.type==='remove'){
        if(action.payLoad.quantity===1){
    return{
        arr:{...state.arr, ...addValue(state.arr,action.payLoad.name,action.payLoad.quantity-1)},
        no:state.no-1,
        price:state.price-action.payLoad.price

    }
}
else if (action.payLoad.quantity>1){
    return {...state ,arr:{...state.arr, ...addValue(state.arr,action.payLoad.name,action.payLoad.quantity-1)},price:state.price-action.payLoad.price}
}
    
}
else if (action.type==='addToCart'){
    const {quantity,name,price}= action.payLoad;
    alert(`${quantity}pcs of ${name} added for $${price} each `)
return {...state,
 price:state.price+(price*quantity)
}
}
    
    return state;

}
