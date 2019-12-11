// in this file , combine all reducer in one reducer and set it into single parent state

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
//take values or state form search reducer
export default combineReducers({
  movies: searchReducer
});