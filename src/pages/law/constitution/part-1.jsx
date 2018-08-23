import React from 'react'
import {Link} from 'gatsby'

import Layout from 'components/layout'

const IndexPage = () => (<Layout>
  <div className="container">
    <div className="columns">
      <article className="column content">
        <h1>Part 1 &mdash; Introductory</h1>

        <article class="card">
          <div class="card-header">
            <div class="card-header-title">1&mdash;<em>The Republic and its territories</em></div>
          </div>
          <div class="card-content">
            <ol type="1">
            <li>Pakistan shall be a Federal Republic to be known as the Islamic Republic of Pakistan, hereinafter referred to as Pakistan.</li>
            <li>The territories of Pakistan shall comprise:-
              <ol type="a">
              <li>the Provinces of Balochistan, the Khyber Pakthunkhwa, the Punjab and Sindh;</li>
              <li>the Islamabad Capital Territory, hereinafter referred to as the Federal Capital;</li>
              <li>Federally Administered Tribal Areas; and</li>
              <li>such States and territories as are or may be included in Pakistan, whether by accession or otherwise.</li>
              </ol>
            </li>
            <li>Majlis-e-Shoora (Parliament) may by law admit into the Federation new States or areas on such terms and conditions as it thinks fit.</li>
            </ol>
          </div>
        </article>

        <div>&nbsp;</div>

        <article class="card">
          <div class="card-header">
            <div class="card-header-title">2&mdash;<em>Islam to be State religion</em></div>
          </div>
          <div class="card-content">
            Islam shall be the State religion of Pakistan.
          </div>
        </article>


        <article class="card">
          <div class="card-header">
            <div class="card-header-title">2A&mdash;<em>The Objectives Resolution to form part of substantive provisions.</em></div>
          </div>
          <div class="card-content">
            The principles and provisions set out in the Objectives Resolution reproduced in the Annex are hereby made substantive part of the Constitution and shall have effect accordingly.
          </div>
        </article>


        <article class="card">
          <div class="card-header">
            <div class="card-header-title">3&mdash;<em>Elimination of exploitation</em></div>
          </div>
          <div class="card-content">
            The State shall ensure the elimination of all forms of exploitation and the gradual fulfillment of the fundamental principle, from each according to his ability to each according to his work.
          </div>
        </article>

        <article class="card">
          <div class="card-header">
            <div class="card-header-title">4&mdash;<em>Right of individuals to be dealt with in accordance with law, etc.</em></div>
          </div>
          <div class="card-content">
            <ol type="1">
            <li>To enjoy the protection of law and to be treated in accordance with law is the inalienable right of every citizen, wherever he may be, and of every other person for the time being within Pakistan.</li>
            <li>In particular :-
              <ol type="a">
              <li>no action detrimental to the life, liberty, body, reputation or property of any person shall be taken except in accordance with law;</li>
              <li>no person shall be prevented from or be hindered in doing that which is not prohibited by law; and</li>
              <li>no person shall be compelled to do that which the law does not require him to do.</li>
              </ol>
            </li>
            </ol>
          </div>
        </article>


        <article class="card">
          <div class="card-header">
            <div class="card-header-title">5&mdash;<em>Loyalty to State and obedience to Constitution and law.</em></div>
          </div>
          <div class="card-content">
            <ol type="1">
            <li>Loyalty to the State is the basic duty of every citizen.</li>
            <li>Obedience to the Constitution and law is the  inviolable obligation of every citizen wherever he may be and of every other person for the time being within Pakistan.</li>
            </ol>
          </div>
        </article>

        <article class="card">
          <div class="card-header">
            <div class="card-header-title">6&mdash;<em>High treason</em></div>
          </div>
          <div class="card-content">
            <ol type="1">
            <li>Any person who abrogates or subverts or suspends or holds in abeyance, or attempts or conspires to abrogate or subvert or suspend or hold in abeyance, the Constitution by use of force or show of force or by any other unconstitutional means shall be guilty of high treason.</li>
            <li>Any person aiding or abetting  or collaborating the acts mentioned in clause (1) shall likewise be guilty of high treason.</li>
            <li>An act of high treason mentioned in clause (1) or clause (2) shall not be validated by any court including the Supreme Court and a High Court.</li>
            <li>Majlis-e-Shoora (Parliament) shall by law provide for the punishment of persons found guilty of high treason.</li>
            </ol>
          </div>
        </article>

    </article>
    </div>
  </div>
</Layout>)

export default IndexPage
