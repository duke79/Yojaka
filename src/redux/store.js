import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/reducers'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'

export let store = createStore(
    todoApp, /* preloadedState, */
    /* To enable chrome extension */ /*TODO: To be removed in production code */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// export let store = createStore(todoApp, applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   ));