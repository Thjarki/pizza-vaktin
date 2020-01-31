import toppingsReducer from './toppings';
import {combineReducers} from 'redux';
import locationReducer from './location'
import specificToppingsReducer from './specificTopping';
const allReducers = combineReducers({
    toppings: toppingsReducer,
    location: locationReducer,
    specifictoppings:  specificToppingsReducer
})
export default allReducers;