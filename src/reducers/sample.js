import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const sample = createReducer({ }, { 

[types.SET_SAMPLE](state, action) {
    return action.state;
  },

});