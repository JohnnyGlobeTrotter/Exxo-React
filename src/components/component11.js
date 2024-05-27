import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return (
    <div className={`component11-container ${props.rootClassName} `}>
      <div className="component11-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="component11-image"
        />
      </div>
      <div className="component11-container2">
        <div className="component11-container3">
          <span className="component11-text">{props.text}</span>
          <span className="component11-text1">{props.text1}</span>
          <span className="component11-text2">{props.text2}</span>
          <span className="component11-text3">{props.text3}</span>
          <span className="component11-text4">{props.text4}</span>
        </div>
      </div>
    </div>
  )
}

Component11.defaultProps = {
  text2: 'From',
  imageSrc: '/samata-400w-400w.jpg',
  text4: 'Per night',
  text3: 'IDR 3.000.000',
  text: 'Samata Retreat',
  rootClassName: '',
  text1: 'Sanur',
  imageAlt: 'image',
}

Component11.propTypes = {
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Component11
