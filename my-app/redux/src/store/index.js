import React from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import  * as reducers from './reducers'
import * as actions from './actions'
import { create } from "istanbul-reports"
import thunk from "redux-thunk"


const middleware = store => dispatch => action => {
    console.log(action)
    localStorage.setItem("App_store", JSON.stringify(store.getState()))
    dispatch(action)
}


export { actions }

export default createStore(combineReducers(reducers), JSON.parse(localStorage.getItem("App_store"||""),applyMiddleware(middleware)))

/*
console.log({reducers})
const USER= "USER"

const reducerUser = (state="", action) => {
    switch (action.type) {
        case USER:
            return action.name

        default:
            return state
    }
}

const reducerData = (state={}, action) => {
    switch(action.type) {
    case "DATA": 
        return state
    default:
        return state
    }
}

export default createStore(
    combineReducers({reducers}), {})
    */
