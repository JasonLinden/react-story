import React from 'react'
//
import ReactStory from '../../lib'
//
import GettingStarted from './stories/GettingStarted'
import Installation from './stories/Installation'
import Usage from './stories/Usage'
import Readme from './stories/Readme'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div
          style={{
            margin: '0 10px',
            textAlign: 'center'
          }}
        >
          <h1>React Story</h1>
          <a
            href='https://github.com/tannerlinsley/react-story'
            style={{
              textDecoration: 'none',
              color: '#0092d1'
            }}
          >
            View on Github
          </a>
        </div>
        <ReactStory
          style={{
            display: 'block',
            margin: '20px auto',
            width: '1000px',
            maxWidth: '90%',
            height: '600px',
            border: '1px solid rgba(0,0,0, .3)',
            borderRadius: '5px'
          }}
          stories={[{
            name: 'Getting Started',
            component: GettingStarted
          }, {
            name: 'Installation',
            component: Installation
          }, {
            name: 'Usage',
            component: Usage
          }, {
            name: 'Readme & Documentation',
            component: Readme
          }]}
        />
      </div>
    )
  }
}
