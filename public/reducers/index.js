import { combineReducers } from 'redux'
import counter from './counter'
import donutConfig from './donutReducer'

const rootReducer = combineReducers({
  counter,
  donutConfig
});

export default rootReducer
