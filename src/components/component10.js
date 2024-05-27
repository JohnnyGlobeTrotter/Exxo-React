import React from 'react'

import PropTypes from 'prop-types'

import './component10.css'

const Component10 = (props) => {
  return (
    <div className={`component10-container ${props.rootClassName} `}>
      <span className="component10-text">{props.text}</span>
    </div>
  )
}

Component10.defaultProps = {
  text: 'Uluwatu',
  rootClassName: '',
}

Component10.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component10
