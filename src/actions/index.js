export const addItem = (val) =>{
    let newItem = {todo: val,
                    completed: false};
    return {
        type: 'ADDITEM',
        payload: newItem
    }        
}

export const removeItem = (list , index) =>{
    let itemToRemove = list[index];
    console.log(itemToRemove);
    return {
        type: 'REMOVEITEM',
        payload: itemToRemove
    }    
}