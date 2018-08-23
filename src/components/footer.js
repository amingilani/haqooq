import React from 'react'
import {Link} from 'gatsby'

const Footer = ({siteTitle}) => (<footer class="footer" style={{
    marginTop: '1.45rem'
  }}>
  <div class="content has-text-centered">
    <p>
      <strong>Made</strong> with ❤️ by <strong><a href="https://gilani.me">Amin Shah Gilani</a></strong><br />
      No rights reserved. Released under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>
    </p>
    <p>
      <em>Found a problem? Help me improve this site by filing an <a href="https://github.com/amingilani/haqooq/issues/new">issue</a></em>
    </p>
  </div>
</footer>)

export default Footer
