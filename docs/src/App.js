import React from 'react'
//
import ReactStory from '../../lib'
//
import GettingStarted from './stories/GettingStarted'
import Installation from './stories/Installation'
import Usage from './stories/Usage'
import Readme from './stories/Readme'

export default class App extends React.Component {
  render() {
    return (
      <ReactStory
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
        stories={[
          {
            name: 'Readme & Documentation',
            component: Readme
          },
          {
            name: 'Getting Started',
            component: GettingStarted
          },
          {
            name: 'Installation',
            component: Installation
          },
          {
            name: 'Usage',
            component: Usage
          }
        ]}
      />
    )
  }
}
