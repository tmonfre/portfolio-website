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
      <div id="header" ref={this.header}>
        <div className="container">
          <div id="name-area">
            <Link to="/"><h1>Thomas Monfre</h1></Link>
          </div>
          <div id="mobile-nav-drop-down">
            <img id="drop-down-button" src={require('../assets/nav-drop-down.png')} alt="hamburger drop down icon" onClick={this.handleDropDownClick} />
          </div>
          <div id="mobile-nav-break" />
          <div id="nav-area" ref={this.navArea}>
            <Link to="/" onClick={this.handleScroll}>Home</Link>
            <Link to="/aboutme" id="middle" onClick={this.handleScroll}>About Me</Link>
            <Link to="/projects" onClick={this.handleScroll}>Projects</Link>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
        <div id="header-bar" />
      </div>
    );
  }
}

export default Nav;
