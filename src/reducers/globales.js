import { actionTypes } from "../actions/types"

const initialState = {
  loader: false,
  confirm: true,
  search: '',
}

const objectReducer = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    loader: true,
    confirm: false
  },
  [actionTypes.loader]: {
    ...state,
    loader: false,
    confirm: true
  },
  [actionTypes.search]: {
    ...state,
    search: payload
  },
})

function reducerGoblal(state= initialState, action) {
  return objectReducer(state, action.payload)[action.type] || state
}

export {reducerGoblal}