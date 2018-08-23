import React from 'react'
import {Link} from 'gatsby'

const Header = ({siteTitle}) => (<div style={{
    marginBottom: '1.45rem'
  }}>

  <nav id="navbar" className="navbar has-shadow is-spaced">
    <div className="container">
      <div className="navbar-brand">
          <Link className="navbar-item" to="/">Haqooq</Link>
        </div>
      </div>
    </nav>
  </div>
    )

export default Header
