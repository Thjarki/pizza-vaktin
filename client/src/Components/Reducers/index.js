import toppingsReducer from './toppings';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    toppings: toppingsReducer
})
export default allReducers;