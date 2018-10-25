import initialState from './initialState'
import { FETCH_GENERAL, RECEIVE_GENERAL } from '../actions/actionTypes'

export default function general(state = initialState.general, action) {
  let newState
  switch (action.type) {
    case FETCH_GENERAL:
      console.log('FETCH_GENERAL Action')
      return action
    case RECEIVE_GENERAL:
      newState = action.general
      console.log('RECEIVE_GENERAL Action')
      return newState
    default:
      return state
  }
}
