import React from "react";

import { Link } from "gatsby"

/*
const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)

class Navigation extends React.Component {

  state = {
    pathname: '#home'
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }
  
  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={ isCurrent('#home', pathname) }>
          <a className="smooth-scroll" href="#home"> 
            Home
        </a>
        </li>
        <li className={ isCurrent('#about', pathname) }>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li className={ isCurrent('#resume', pathname) }>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )}
};
*/

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}


class Navigation extends React.Component {

  render() {

    return (
      <nav id="nav-wrap">
        <a aria-label="something" className="mobile-btn" href="#nav-wrap"/>
        <ul id="nav" className="nav">
          <li>
            <Link to="#home"> Home </Link>
          </li>
          <li>
            <Link to="#about"> About </Link>
          </li>
          <li>
            <Link to="#resume"> Resume </Link>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Navigation;
