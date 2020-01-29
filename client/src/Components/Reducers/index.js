import toppingsReducer from './toppings';
import {combineReducers} from 'redux';
import locationReducer from './location'
const allReducers = combineReducers({
    toppings: toppingsReducer,
    location: locationReducer
})
export default allReducers;