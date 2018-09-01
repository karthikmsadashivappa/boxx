import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="main-head-wrap">
    <div className="header">
      <ul className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <li>Boxx.ai</li>
          </Link>
        </div>
        <div className="navigation">
          <Link to="#">
            <li>Product</li>
          </Link>
          <Link to="#">
            <li>About</li>
          </Link>
          <Link to="#">
            <li>Pricing</li>
          </Link>
          <Link to="#">
            <li>Team</li>
          </Link>
          <Link to="#" className="button signup">
            <li>Sign up</li>
          </Link>
        </div>
      </ul>
    </div>
  </div>
)

export default Header
