import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Theme } from 'react-interface'
import light from 'react-interface/es/themes/light'
import Story from '../Story'
import StoryItem from '../StoryItem'
import { flattenStories, getSlugFromStory } from '../../utils'

const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  ul {
    margin-left: .5rem;
    padding-left: .5rem;
  }

  section, aside {
    padding: 1rem;
    overflow-y: scroll
  }
  aside {
    border-right: 1px solid #ddd;
    background: #F3F7FA;
    color: #5A6265;
    height: 100vh;
    min-width: 250px;
    flex-shrink: 0;
  }
  aside > ul {
    margin: 0;
    padding: 0;
  }
`

class ReactStory extends React.Component {
  constructor() {
    super()
    this.state = {
      isSidebarOpen: false
    }
  }

  renderStories(match) {
    const stories = match => this.props.stories.map((s, i) => {
      return (
        <StoryItem
          key={getSlugFromStory(s)}
          {...s}
          currentPath={match.params[0]}
          path=''
        />
      )
    })

    console.log(this.props.stories)

    return (
      <Layout>
        <aside>
          {this.props.sidebarContent}
          <ul>
            {stories(match)}
          </ul>
        </aside>
        <section style={{ flex: '1 1 auto' }}>
          <Story
            storyPath={match.params[0]}
            stories={this.props.stories}
          />
        </section>
      </Layout>
    )
  }

  render() {
    return (
      <Router>
        <div style={{ height: '100%', width: '100%' }}>
          <Route exact path='/' render={() =>(
            <Redirect to={`/story/${getSlugFromStory(this.props.stories[0])}`} />
          )} />
          <Route path='/story/*' render={({ match }) => (
            <div>
              {
                this.props.useTheme &&
                <Theme>
                  {this.renderStories(match)}
                </Theme>
              }
              {
                !this.props.useTheme &&
                this.renderStories(match)
              }
            </div>
          )} />
        </div>
      </Router>
    )
  }
}

ReactStory.defaultProps = {
  useTheme: true,
  stories: [],
  sidebarContent: null,
}

export default ReactStory
