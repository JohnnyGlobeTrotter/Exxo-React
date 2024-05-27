import React from 'react'

import { Helmet } from 'react-helmet'

import './splash.css'

const Splash = (props) => {
  return (
    <div className="splash-container">
      <Helmet>
        <title>Splash - Exxo</title>
        <meta property="og:title" content="Splash - Exxo" />
      </Helmet>
      <div className="splash-container1">
        <img
          alt="image"
          src="/20231026_225054_0000-200h-1500h.png"
          className="splash-image"
        />
        <div className="splash-container2">
          <span className="splash-text">
            Very soon you will find the best Bali and Java Properties here
          </span>
        </div>
      </div>
    </div>
  )
}

export default Splash
