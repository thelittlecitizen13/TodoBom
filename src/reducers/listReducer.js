const toDoListReducer = (state = [], action) =>{
    switch (action.type) {
        case 'ADDITEM':
            return [action.payload, ...state];
        case 'REMOVEITEM':
            return state.filter( x => x!==action.payload);
        case 'CHECKITEM':
            action.payload.completed = !action.payload.completed;
            return state.slice(0);
        default:
            return state;  
    }
}

export default toDoListReducer;