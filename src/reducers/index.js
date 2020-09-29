import listReducer from './listReducer';
import {combineReducers} from 'redux';

// not neccesary for this exercise,
// but its a good preparation to add features

const rootReducer = combineReducers({
    list: listReducer
})

export default rootReducer;