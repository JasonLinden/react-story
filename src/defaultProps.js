import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'

export default {
  stories: [],
  default: () => <span>No story component found!</span>,
  theme: {
    topbarHeight: 40,
    sidebarBreakpoint: 550,
    sidebarWidth: 200
  },
  showCredit: true,
  pathPrefix: '',
  Wrapper: glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    transition: 'all .2s ease-out',
    '& *': {
      boxSizing: 'border-box',
      fontSize: '14px'
    }
  }),
  NavWrapper: glamorous.div(
    {
      width: '100%',
      transition: 'all .2s ease-out'
    },
    (_, { width, topbarHeight, sidebarBreakpoint }) => {
      return {
        flex: `0 0 ${topbarHeight}`,
        height: width > sidebarBreakpoint ? '0' : topbarHeight
      }
    }
  ),
  Nav: glamorous.div(
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      background: '#f3f3f3',
      borderBottom: '3px solid #cccccc',
      transition: 'all .2s ease-out',
      cursor: 'pointer'
    },
    (_, { topbarHeight, width, sidebarBreakpoint }) => {
      return {
        height: topbarHeight,
        transform: width > sidebarBreakpoint && 'translateY(-100%)'
      }
    }
  ),
  SidebarToggle: glamorous(({ isSidebarOpen, ...props }) => (
    <div {...props}>
      <div>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  ))(({ isSidebarOpen }, { width, sidebarBreakpoint, topbarHeight }) => {
    const paddingSize = 10
    const toggleSize = Math.round((topbarHeight - paddingSize * 2) * 0.5)
    const barHeight = Math.round(toggleSize * 0.15)
    return {
      flexBasis: 'auto',
      width: 'auto',
      overflow: 'hidden',
      flexGrow: 0,
      flexShrink: 0,
      display: 'inline-block',
      padding: paddingSize,
      '& > div': {
        position: 'relative',
        height: toggleSize,
        width: toggleSize * 1.5,
        '& span': {
          display: 'block',
          position: 'absolute',
          height: barHeight,
          width: '100%',
          background: '#222',
          borderRadius: barHeight,
          opacity: '1',
          left: '0',
          transform: 'rotate(0deg)',
          transition: '.25s ease-in-out'
        },
        '& span:nth-child(1)': {
          top: toggleSize * 0
        },
        '& span:nth-child(2)': {
          top: toggleSize * 0.4
        },
        '& span:nth-child(3)': {
          top: toggleSize * 0.4
        },
        '& span:nth-child(4)': {
          top: toggleSize * 0.8
        },
        ...(isSidebarOpen
          ? {
              '& span:nth-child(1)': {
                top: toggleSize * 0,
                width: '0%',
                left: '50%'
              },
              '& span:nth-child(2)': {
                top: toggleSize * 0.4,
                transform: 'rotate(45deg)'
              },
              '& span:nth-child(3)': {
                top: toggleSize * 0.4,
                transform: 'rotate(-45deg)'
              },
              '& span:nth-child(4)': {
                top: toggleSize * 0.8,
                width: '0%',
                left: '50%'
              }
            }
          : {})
      }
    }
  }),
  StoryName: glamorous.div({
    flexBasis: 'auto',
    flexGrow: '1',
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '10px 0'
  }),
  StoryListWrapper: glamorous.div({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }),
  StoryList: glamorous.ul({
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }),
  StoryListItem: glamorous.li({
    padding: 0,
    margin: 0
  }),
  StoryListItemLink: glamorous(({ active, ...rest }) => <Link {...rest} />)(
    {
      display: 'block',
      padding: '10px',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.8)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    },
    ({ active }) => ({
      fontWeight: active && 'bold'
    })
  ),
  Credit: glamorous.div({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: '0 0 20px 0 rgba(0,0,0,.2)',
    '& > a': {
      color: 'rgba(0,0,0,.5)',
      textDecoration: 'none',
      ':hover': {
        color: '#0297cf'
      }
    }
  }),
  MainWrapper: glamorous.div({
    flex: '1 1 auto',
    display: 'flex',
    height: '100%',
    transition: 'all .2s ease-out'
  }),
  SidebarWrapper: glamorous.div(
    {
      height: '100%',
      transition: 'all .2s ease-out',
      pointerEvents: 'none',
      zIndex: 100000000
    },
    (
      { isSidebarOpen },
      { width, height, topbarHeight, sidebarWidth, sidebarBreakpoint }
    ) => {
      return {
        flex: width < sidebarBreakpoint ? '0 0 0' : `0 0 ${sidebarWidth}`,
        width: width < sidebarBreakpoint ? 0 : sidebarWidth
      }
    }
  ),
  Sidebar: glamorous.div(
    {
      background: '#f3f3f3',
      borderRight: '3px solid #cccccc',
      transition: 'all .2s ease-out',
      height: '100%',
      pointerEvents: 'all'
    },
    (
      { isSidebarOpen },
      { width, topbarHeight, sidebarWidth, sidebarBreakpoint }
    ) => {
      const open = {
        transform: 'translate(0, 0)',
        boxShadow: width <= sidebarBreakpoint
          ? '0 10px 20px 0 rgba(0,0,0,.25)'
          : ''
      }
      return {
        width: sidebarWidth,
        transform: 'translate(-100%, 0)',
        paddingBottom: topbarHeight,
        ...(isSidebarOpen || width > sidebarBreakpoint ? open : {})
      }
    }
  ),
  StoryWrapper: glamorous.div({
    flex: '1 1 auto',
    padding: '10px',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    transition: 'all .2s ease-out',
    position: 'relative'
  })
}
