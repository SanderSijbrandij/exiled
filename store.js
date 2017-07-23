// throw it in 1 file for now.
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

const initialState = {
  user: null
}

let enhancer = applyMiddleware(thunkMiddleware)
if (typeof window !== 'undefined') {
  enhancer = compose(
    applyMiddleware(thunkMiddleware),
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  )
}

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, enhancer)
}

export default initStore