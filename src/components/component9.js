import React from 'react'

import PropTypes from 'prop-types'

import './component9.css'

const Component9 = (props) => {
  return (
    <div
      id="property_1"
      className={`component9-container ${props.rootClassName} `}
    >
      <div className="component9-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="component9-image"
        />
      </div>
      <div className="component9-container2 propertytext">
        <div className="component9-container3">
          <span className="component9-text">
            <span className="">2 Bedroom Villa close to the beach</span>
            <br className=""></br>
          </span>
          <span className="component9-text03">{props.text}</span>
          <div className="component9-container4">
            <svg viewBox="0 0 1024 1024" className="component9-icon">
              <path
                d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"
                className=""
              ></path>
            </svg>
            <h4 className="component9-text04 heading6">{props.heading}</h4>
          </div>
          <span className="component9-text05">
            <span className="">
              A lovely brand new 3 bedroom villa located in Tabanan is available
              on the market for sale. Designed to cater to a modern family
              lifestyle, this
            </span>
            <br className=""></br>
          </span>
          <span className="component9-text08">{props.text1}</span>
          <span className="component9-text09">{props.text2}</span>
          <div className="component9-container5">
            <button type="button" className="component9-button button">
              {props.button}
            </button>
            <button type="button" className="component9-button1 button">
              {props.button1}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Component9.defaultProps = {
  text2: 'IDR 2.000.000/night',
  imageSrc: '/2br%20villa%20sharing%20pool%204-1500w-1500w.jpg',
  text: 'Serenity CVR01',
  text1: 'From',
  heading: 'Canggu',
  button: 'Details',
  rootClassName: '',
  button1: 'Enquire\n',
  imageAlt: 'image',
}

Component9.propTypes = {
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Component9
