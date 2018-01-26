import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import LaunchContainer from '../components/LaunchContainer'

const scenes = Actions.create(
  <Scene key="app">
    <Scene key="/" component={LaunchContainer} title="Welcome" />
  </Scene>
)

export default scenes
