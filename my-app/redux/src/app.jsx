import React from "react"
import store, { actions } from "./store"
import { Provider, connect } from "react-redux"

const Button = props => {
    return <button onclick={()=>props.incerement(props.value)}>{props.children}</button>
}

const InputWithDispatch=connect(null, {increment: actions.increment})(Button)
const Input = (props) => {
    return <input type="text" value={props.incerement}/>
}

const mapStateToProps = (state) => {
    return {
        increment:state.increment
    }
}
const InputWithStore = connect(mapStateToProps)(Input)

export default () => {
    return (<Provider sotre={store}>
        <InputWithDispatch value={1}>+1</InputWithDispatch>
        <InputWithStore />
        <InputWithDispatch value={-1}>-1</InputWithDispatch>
        </Provider>
)}