import { INCREMENT } from "../types"

export default () => {
  return {
      type: INCREMENT
  }}
/*
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.num

    default:
      return state
  }
}
*/ 