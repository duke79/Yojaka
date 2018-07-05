import { combineReducers } from 'redux'
import { IssuesReducer } from './reducers_n_sagas/IssuesRS'


const myApp = combineReducers({
      Issues: IssuesReducer
})
export default myApp