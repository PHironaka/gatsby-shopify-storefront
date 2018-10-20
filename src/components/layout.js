import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import Logo from '../components/logo';
import Header from '../components/header';


const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: #f90000;
  }

  img {
    height: auto;
    max-width:100%:
    max-height:100%;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: #f90000;
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
    line-height:1.4em
  }

  .container {
    padding:0 2.25em;
    margin:1em;
  }
`;



export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (

      <div>
        <GlobalStyle />
        <div className="container">
        <Header>
        <Link to={`/`}>
         <Logo />
        </Link>

        <ul>
        <li>
        <Link
          to={`/about/`}
         
        >
          About
        </Link></li>
       <li> <Link
          to={`/blog/`}
          
        >
          Blog
        </Link></li> </ul></Header>
        {children}
      </div>
      </div>
    )}
  />
)