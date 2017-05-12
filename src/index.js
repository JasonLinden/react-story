import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import glamorous, { ThemeProvider } from 'glamorous'
//
import Utils from './utils'
import HyperResponsive from './HyperResponsive'

let uid = 0

const defaultProps = {
  stories: [],
  default: () => <span>No story component found!</span>,
  theme: {
    sidebarBreakpoint: 550,
    sidebarWidth: 200
  },
  Wrapper: glamorous.div({
    display: 'flex',
    position: 'relative',
    height: '100%',
    '& *': {
      boxSizing: 'border-box',
      fontSize: '14px'
    }
  }),
  SidebarWrapper: glamorous.div(
    {
      overflow: 'hidden'
    },
    ({isSidebarOpen}, {width, sidebarWidth, sidebarBreakpoint}) => {
      const open = {
        flex: `0 0 ${sidebarWidth}px`
      }
      return {
        flex: '0 0 0px',
        transition: 'all .3s ease-out',
        ...(isSidebarOpen || width > sidebarBreakpoint ? open : {})
      }
    }
  ),
  Sidebar: glamorous.div({
    background: 'rgba(0,0,0, 0.05)',
    borderRight: '3px solid rgba(0,0,0, 0.3)',
    transition: 'all .3s ease-out',
    height: '100%'
  }, ({isSidebarOpen}, {width, sidebarWidth, sidebarBreakpoint}) => {
    const open = {
      transform: 'translate(0, 0)'
    }
    return {
      width: sidebarWidth,
      transform: 'translate(-100%, 0)',
      ...(isSidebarOpen || width > sidebarBreakpoint ? open : {})
    }
  }),
  NavWrapper: glamorous.div(),
  Nav: glamorous.ul({
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  }),
  NavItem: glamorous.li({
    padding: 0,
    margin: 0
  }),
  NavItemLink: glamorous(
    ({active, ...rest}) =>
      <Link {...rest} />
    )({
      display: 'block',
      padding: '10px',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.8)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    }, ({active}) => ({
      fontWeight: active && 'bold'
    })
  ),
  SidebarToggle: glamorous.div({
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    width: '40px',
    height: '40px',
    background: 'grey',
    opacity: 1,
    pointerEvents: 'all',
    transition: 'all .3s ease'
  }, ({isSidebarOpen}, {width, sidebarBreakpoint}) => {
    const hidden = {
      opacity: '0',
      pointerEvents: 'none',
      transform: 'translate(-20px, 0)'
    }
    return {
      ...(width > sidebarBreakpoint ? hidden : {})
    }
  }),
  Close: glamorous(
    props => (
      <div {...props}>
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  )({
    '& span': {
      display: 'block',
      position: 'absolute',
      height: '9px',
      width: '100%',
      background: '#d3531a',
      borderRadius: '9px',
      opacity: '1',
      left: '0',
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out'
    },
    '& span:nth-child(1)': {
      top: '0px'
    },
    '& span:nth-child(2)': {
      top: '18px'
    },
    'span:nth-child(3)': {
      top: '18px'
    },
    '& span:nth-child(4)': {
      top: '36px'
    }
  }, ({isSidebarOpen}) => ({
    ...(isSidebarOpen ? {
      '& span:nth-child(1)': {
        top: '18px',
        width: '0%',
        left: '50%'
      },
      '& span:nth-child(2)': {
        transform: 'rotate(45deg)'
      },
      '& span:nth-child(3)': {
        transform: 'rotate(-45deg)'
      },
      '& span:nth-child(4)': {
        top: '18px',
        width: '0%',
        left: '50%'
      }
    } : {})
  })),
  StoryWrapper: glamorous.div({
    flexBasis: '100%',
    flexGrow: '1',
    padding: '10px 20px',
    overflow: 'auto',
    transition: 'all .3s ease-out'
  })
}

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

    const { sidebarBreakpoint } = newProps

    if (
      oldProps.width > sidebarBreakpoint &&
      newProps.width <= sidebarBreakpoint
    ) {
      this.setState({isSidebarOpen: false})
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
      style,
      className,
      width,
      height,
      theme,
      // Components
      Wrapper,
      SidebarWrapper,
      Sidebar,
      NavWrapper,
      Nav,
      NavItem,
      NavItemLink,
      SidebarToggle,
      Close,
      StoryWrapper
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
            style={style}
            className={className}
          >
            <SidebarWrapper
              isSidebarOpen={isSidebarOpen}
            >
              <Sidebar
                isSidebarOpen={isSidebarOpen}
              >
                <NavWrapper>
                  <Nav>
                    {stories.map(story => (
                      <NavItem
                        key={story.path}
                      >
                        <Route
                          path={'/' + story.path}
                          exact
                          children={({ match }) => (
                            <NavItemLink
                              to={story.path}
                              active={!!match}
                            >
                              {story.name}
                            </NavItemLink>
                          )}
                        />
                      </NavItem>
                    ))}
                  </Nav>
                </NavWrapper>
              </Sidebar>
            </SidebarWrapper>
            <StoryWrapper>
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
            <SidebarToggle
              isSidebarOpen={isSidebarOpen}
              onClick={() => this.setState(toggleSidebar)}
            />
          </Wrapper>
        </ThemeProvider>
      </Router>
    )
  }
}

export default HyperResponsive(ReactStory)
