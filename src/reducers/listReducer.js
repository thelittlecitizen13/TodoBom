const toDoListReducer = (state = [], action) =>{
    switch (action.type) {
        case 'ADDITEM':
            return [action.payload, ...state];
        case 'REMOVEITEM':
            return state.filter( x => x!==action.payload);
            
        default:
            return state;  
    }
}

export default toDoListReducer;