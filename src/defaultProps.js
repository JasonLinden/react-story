import { Link } from 'react-router-dom'
import glamorous from 'glamorous'

export default {
  stories: [],
  default: () => <span>No story component found!</span>,
  theme: {
    sidebarBreakpoint: 550,
    sidebarWidth: 200
  },
  Wrapper: glamorous.div({
    display: 'flex',
    position: 'relative',
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
