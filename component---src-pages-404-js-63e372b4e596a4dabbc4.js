(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(243);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},237:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(12),u=a.n(i),o=a(236),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(238),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(46);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},238:function(e,t,a){var n;e.exports=(n=a(240))&&n.default||n},239:function(e){e.exports={data:{site:{siteMetadata:{title:"Haqooq"}}}}},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),u=a.n(i),o=a(47),c=a(1),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},241:function(e,t,a){},243:function(e,t,a){"use strict";var n=a(239),r=a(0),i=a.n(r),u=a(12),o=a.n(u),c=a(244),s=a.n(c),l=a(237),d=function(e){return e.siteTitle,i.a.createElement("div",{style:{marginBottom:"1.45rem"}},i.a.createElement("nav",{id:"navbar",className:"navbar has-shadow is-spaced"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(l.Link,{className:"navbar-item",to:"/"},"Haqooq")))))},m=(a(245),a(241),function(e){var t=e.children;return e.data,i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:n})});m.propTypes={children:o.a.node.isRequired},t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-63e372b4e596a4dabbc4.js.map