import { combineReducers } from 'redux'
import { Issues } from './reducers_n_sagas/IssuesRS'


const myApp = combineReducers({
      Issues: Issues
})
export default myApp