import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ThemeProvider } from 'glamorous'
//
import Utils from './utils'
import HyperResponsive from './HyperResponsive'
import defaultProps from './defaultProps'

let uid = 0

// const defaultProps =

const toggleSidebar = state => ({
  isSidebarOpen: !state.isSidebarOpen
})

class ReactStory extends React.Component {
  static defaultProps = defaultProps
  constructor () {
    super()
    this.state = {
      isSidebarOpen: false,
      stories: []
    }
    this.rebuild = this.rebuild.bind(this)
  }
  componentWillMount () {
    this.rebuild()
  }
  componentWillReceiveProps (newProps) {
    const oldProps = this.props

    const { theme: { sidebarBreakpoint } } = newProps

    if (
      oldProps.width < newProps.width &&
      newProps.width > sidebarBreakpoint
    ) {
      this.setState({
        isSidebarOpen: false
      })
    }
    if (oldProps.stories !== newProps.stories) {
      this.rebuild()
    }
  }
  rebuild (props = this.props) {
    const {
      defaultComponent
    } = this.props

    const stories = props.stories.map(story => {
      const name = story.name || `Story ${uid++}`
      const path = story.path || Utils.makePath(name)
      const component = story.component || defaultComponent
      return {
        name,
        path,
        component
      }
    })
    this.setState({
      stories
    })
  }
  render () {
    const {
      width,
      height,
      theme,
      // Components
      Wrapper,
      NavWrapper,
      Nav,
      StoryName,
      StoryListWrapper,
      StoryList,
      StoryListItem,
      StoryListItemLink,
      SidebarToggle,
      MainWrapper,
      SidebarWrapper,
      Sidebar,
      StoryWrapper
      //
    } = this.props

    const {
      isSidebarOpen,
      stories
    } = this.state

    return (
      <Router>
        <ThemeProvider theme={{
          ...theme,
          width,
          height
        }}>
          <Wrapper
            isSidebarOpen={isSidebarOpen}
          >
            <NavWrapper
              isSidebarOpen={isSidebarOpen}
            >
              <Nav
                onClick={() => this.setState(toggleSidebar)}
              >p
                <SidebarToggle
                  isSidebarOpen={isSidebarOpen}
                />
                <Route
                  path={'/:storyID'}
                  children={({match}) => (
                    <StoryName>
                      {match && stories.find(d => d.path === match.params.storyID).name}
                    </StoryName>
                  )}
                />
              </Nav>
            </NavWrapper>
            <MainWrapper>
              <SidebarWrapper>
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                >
                  <StoryListWrapper>
                    <StoryList>
                      {stories.map(story => (
                        <StoryListItem
                          key={story.path}
                        >
                          <Route
                            path={'/' + story.path}
                            exact
                            children={({ match }) => (
                              <StoryListItemLink
                                to={story.path}
                                active={!!match}
                                onClick={e => {
                                  this.setState({
                                    isSidebarOpen: false
                                  })
                                }}
                              >
                                {story.name}
                              </StoryListItemLink>
                            )}
                          />
                        </StoryListItem>
                      ))}
                    </StoryList>
                  </StoryListWrapper>
                </Sidebar>
              </SidebarWrapper>
              <StoryWrapper
                onClick={e => this.setState({
                  isSidebarOpen: false
                })}
              >
                <Switch>
                  {stories.map(story => (
                    <Route
                      key={story.path}
                      exact
                      path={'/' + story.path}
                      render={routeProps => (
                        <story.component
                          story={story}
                          route={routeProps}
                        />
                      )}
                    />
                  ))}
                  <Redirect
                    to={stories[0].path}
                  />
                </Switch>
              </StoryWrapper>
            </MainWrapper>
          </Wrapper>
        </ThemeProvider>
      </Router>
    )
  }
}

export default HyperResponsive(ReactStory)
