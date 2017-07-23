// throw it in 1 file for now.
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  user: null
}

export const actionTypes = {
  USER_SIGNED_IN: 'USER/SIGNED-IN',
  USER_SIGNED_OUT: 'USER/SIGNED-OUT'
}

export const userReducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case actionTypes.USER_SIGNED_IN:
      return Object.assign({}, payload)
    case actionTypes.USER_SIGNED_OUT:
      return null
    default: 
      return state
  }
}

let enhancer = applyMiddleware(thunkMiddleware)
if (typeof window !== 'undefined') {
  enhancer = compose(
    applyMiddleware(thunkMiddleware),
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  )
}

export const initStore = (initialState = initialState) => {
  return createStore(
    combineReducers({ user: userReducer }),
    initialState,
    enhancer
  )
}