import { combineReducers } from "redux"
import * as sampleReducer from './sample'
//import * as sample2 from './sample2'

export default combineReducers(Object.assign(
  sampleReducer,
  //sample2
));