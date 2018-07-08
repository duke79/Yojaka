import { combineReducers } from 'redux'
import { IssuesReducer } from './reducers_n_sagas/IssuesRS'
import { NewIssueReducer } from './reducers_n_sagas/NewIssueRS'


const myApp = combineReducers({
      Issues: IssuesReducer,
      NewIssue: NewIssueReducer,
})
export default myApp