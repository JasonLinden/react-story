import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button``

Button.propTypes = {
  /**
   * What type of component is this?
   */
  primary: PropTypes.bool.isRequired,
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Style overrides
   */
  styles: PropTypes.shape({
    color: PropTypes.string,
    border: PropTypes.string
  })
}

Button.defaultProps = {
  primary: true,
  size: 'small'
}

// @component
// proptypes don't actually appear to be enforced on a styled-component
// they're here mostly for the purposes of documentation
export default Button
