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
          <a href='https://travis-ci.org/tannerlinsley/react-story'>
            <img alt='' src='https://travis-ci.org/tannerlinsley/react-story.svg?branch=master' />
          </a>{' '}
          <a href='https://npmjs.com/package/react-story'>
            <img alt='' src='https://img.shields.io/npm/dm/react-story.svg' />
          </a>{' '}
          <a href='https://react-chat-signup.herokuapp.com/'>
            <img alt='' src='https://img.shields.io/badge/slack-react--chat-blue.svg' />
          </a>{' '}
          <a href='https://github.com/tannerlinsley/react-story'>
            <img alt='' src='https://img.shields.io/github/stars/tannerlinsley/react-story.svg?style=social&label=Star' />
          </a>{' '}
          <a href='https://twitter.com/tannerlinsley'>
            <img alt='' src='https://img.shields.io/twitter/follow/tannerlinsley.svg?style=social&label=Follow' />
          </a>{' '}
          <a href='https://cash.me/$tannerlinsley'>
            <img alt='' src='https://img.shields.io/badge/%24-Donate-brightgreen.svg' />
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
