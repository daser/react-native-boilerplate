import * as types from './types'


export function setSample({ samples }) {
  return {
    type: types.SET_SAMPLE,
    samples,
  }
}