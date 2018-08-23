import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (<Layout>
  <div className="container">
    <div className="columns">
      <div className="column">

        <div class="content">
          <h2>Constitution</h2>
          <p>Full text and amendments</p>
        </div>
        <div className="columns">
          <div className="column is-3 content">
            <ol>
              <li><Link to="/law/constitution/toc">Constitution of Pakistan</Link></li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
          <div className="column is-3 content">
            <ol>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
        </div>

        <div class="content">
          <h2>Federal Legislature</h2>
          <p>Acts passed by the National Assembly. Applicable to all of Pakistan.</p>
          <div className="columns">
            <div className="column is-3 content">
              <ol>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
              </ol>
            </div>
            <div className="column is-3 content">
              <ol>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
                <li>Lorem Ipsum non Sequitor</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="content">
          <h2>Provincial Legislature</h2>
          <p>Acts passed by the Provincial Assemblies. Applicable to all their respective provinces.</p>
        </div>
        <div className="columns">
          <div className="column is-3 content">
            <h3>Punjab</h3>
            <ol>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
          <div className="column is-3 content">
            <h3>Sindh</h3>
            <ol>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
          <div className="column is-3 content">
            <h3>Balochistan</h3>
            <ol>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
          <div className="column is-3 content">
            <h3>KPK</h3>
            <ol>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
              <li>Lorem Ipsum non Sequitor</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>)

export default IndexPage
