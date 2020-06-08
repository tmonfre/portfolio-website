import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

const $ = require('jquery');

class Nav extends Component {
  constructor(props) {
    super(props);

    // create references
    this.navArea = React.createRef();
    this.dropDownButton = React.createRef();

    // bind
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);

    // determine if the mobile hamburger menu is down
    this.isDown = false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // if mobile nav bar is down and user scrolls, hide it
  handleScroll() {
    if (this.isDown) {
      $(this.navArea.current).slideUp('1000');
      this.isDown = false;
    }
  }

  // when the user clicks the drop down button, bring in navigation buttons
  handleDropDownClick() {
    $(this.navArea.current).slideToggle();
    this.isDown = !this.isDown;
  }

  render() {
    return (
      <div id="header">
        <div className="container">
          <div id="header-content">
            <div id="name-area">
              <Link to="/"><h1>Thomas Monfre</h1></Link>
            </div>
            <i className="fas fa-bars" id="mobile-nav-drop-down" onClick={this.handleDropDownClick} />
            <div id="nav-area">
              <Link to="/" onClick={this.handleScroll}>Home</Link>
              <Link to="/about" id="middle" onClick={this.handleScroll}>About Me</Link>
              <Link to="/projects" onClick={this.handleScroll}>Projects</Link>
            </div>
          </div>
          <div id="nav-area-mobile" ref={this.navArea}>
            <Link to="/" onClick={this.handleScroll}>Home</Link>
            <Link to="/about" id="middle" onClick={this.handleScroll}>About Me</Link>
            <Link to="/projects" onClick={this.handleScroll}>Projects</Link>
          </div>
        </div>
        <div id="header-bar" />
      </div>
    );
  }
}

export default Nav;
