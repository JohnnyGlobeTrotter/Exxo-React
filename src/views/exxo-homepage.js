import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar21 from '../components/navbar21'
import Component9 from '../components/component9'
import Component10 from '../components/component10'
import Component11 from '../components/component11'
import Footer81 from '../components/footer81'
import './exxo-homepage.css'

const ExxoHomepage = (props) => {
  return (
    <div className="exxo-homepage-container">
      <Helmet>
        <title>Exxo</title>
        <meta property="og:title" content="Exxo" />
      </Helmet>
      <div className="exxo-homepage-container01">
        <Navbar21 rootClassName="navbar21-root-class-name"></Navbar21>
        <div id="banner" className="exxo-homepage-container02">
          <img
            alt="image"
            src="/serenity_umalas-1500w-1500w.jpg"
            className="exxo-homepage-image"
          />
        </div>
        <div id="searchrow" className="exxo-homepage-container03">
          <div className="exxo-homepage-container04">
            <div id="Form" className="exxo-homepage-container05">
              <form className="exxo-homepage-form"></form>
              <select className="exxo-homepage-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="exxo-homepage-container06">
                <input
                  type="text"
                  placeholder="Check In Date"
                  className="exxo-homepage-textinput input"
                />
                <input
                  type="text"
                  placeholder="Check Out date"
                  className="exxo-homepage-textinput1 input"
                />
              </div>
              <input
                type="text"
                placeholder="No of Guests"
                className="exxo-homepage-textinput2 input"
              />
              <button
                name="Search"
                type="button"
                className="exxo-homepage-button button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div id="content_wrapper" className="exxo-homepage-container07">
          <div id="main_content_header" className="exxo-homepage-container08">
            <span className="exxo-homepage-text heading2">
              Book Your Accomodation in Bali with Us
            </span>
          </div>
          <div id="property_list" className="exxo-homepage-container09">
            <Component9 rootClassName="component9-root-class-name"></Component9>
            <Component9></Component9>
            <Component9></Component9>
          </div>
          <div className="exxo-homepage-container10">
            <span className="exxo-homepage-text1 heading2">
              Top Destinations
            </span>
          </div>
          <div className="exxo-homepage-container11">
            <Component10 rootClassName="component10-root-class-name1"></Component10>
            <Component10 rootClassName="component10-root-class-name"></Component10>
            <Component10 rootClassName="component10-root-class-name2"></Component10>
          </div>
          <div className="exxo-homepage-container12">
            <span className="exxo-homepage-text2 heading2">
              Featured Accommodation
            </span>
          </div>
          <div className="exxo-homepage-container13">
            <Component11 rootClassName="component11-root-class-name"></Component11>
            <Component11 rootClassName="component11-root-class-name1"></Component11>
            <Component11 rootClassName="component11-root-class-name2"></Component11>
            <Component11 rootClassName="component11-root-class-name3"></Component11>
          </div>
        </div>
        <div id="footer" className="exxo-homepage-container14">
          <div id="footercontent" className="exxo-homepage-container15">
            <Footer81 rootClassName="footer81-root-class-name"></Footer81>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExxoHomepage
