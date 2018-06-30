import { combineReducers } from 'redux'
import { Issues } from './Issues'


const myApp = combineReducers({
      Issues: Issues
})
export default myApp