import React from 'react'
import { Provider } from 'react-redux'
import myStore from './store'
import Router from './scenes'

const Kernel = () => (
  <Provider store={myStore}>
    <Router />
  </Provider>
)

export default Kernel