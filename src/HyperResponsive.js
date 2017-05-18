import React from 'react'
import 'javascript-detect-element-resize'
//
import utils from './utils'

export default function HyperResponsive(WrappedComponent) {
  return class HyperResponsive extends React.Component {
    constructor() {
      super()
      this.state = {
        ready: false,
        width: 0,
        height: 0
      }
      this.resize = this.resize.bind(this)
    }
    componentWillMount() {
      this.resize = utils.throttle(this.resize, 16)
    }
    componentDidMount() {
      if (!this.resizeListener) {
        this.resizeListener = window.addResizeListener(this.el, this.resize)
      }
      this.resize()
    }
    componentWillUnmount() {
      this.resizeListener && window.removeResizeListener(this.el, this.resize)
    }
    resize(e) {
      this.setState({
        ready: true,
        width: parseInt(window.getComputedStyle(this.el).width),
        height: parseInt(window.getComputedStyle(this.el).height)
      })
    }
    render() {
      const { style, className, ...rest } = this.props

      const { width, height } = this.state
      return (
        <div
          ref={el => {
            this.el = el
          }}
          style={{
            height: '100%',
            width: '100%',
            ...style
          }}
          className={className}
        >
          <WrappedComponent width={width} height={height} {...rest} />
        </div>
      )
    }
  }
}
