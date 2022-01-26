function none(array,rules){
    for(let x of array){
        if(array.length===0){return false}
      else   if(rules(x)){
            return false
        }
    }
    return true
}
export default none