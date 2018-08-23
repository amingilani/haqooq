import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (<Layout>
  <div className="container">
    <div className="columns">
      <div className="column">
        <div class="content">
          <h1>Credits</h1>
          <p>Thank you</p>
          <ul>
            <li>
              <a href="http://www.freepik.com" title="Freepik">Freepik</a>
              &nbsp;via&nbsp;
              <a href="https://www.flaticon.com/" title="Flaticon">flaticon</a>
              &nbsp;for the star in circle icon. Licensed under&nbsp;
              <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </li>
            <li>
              <a href="http://pakistani.org/" title="Freepik">Pakistani.org</a>
              &nbsp;for your efforts in digitizing the original text
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Layout>)

export default IndexPage
