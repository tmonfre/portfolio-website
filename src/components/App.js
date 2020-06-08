import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import ScrollToTop from './ScrollToTop';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Classes from './Classes';
import Design from './Design';
import '../styles/App.scss';

// google analytics
ReactGA.initialize('UA-135923598-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.handleContentClick = this.handleContentClick.bind(this);
  }

  // if the user clicks in the main content area and the mobile hamburger menu is down, scroll it up
  handleContentClick() {
    this.navbar.current.handleScroll();
  }

  render() {
    return (
      <Router>
        <div id="app-content">
          <Nav appRef={this} ref={this.navbar} />
          <div className="main-content" onClick={this.handleContentClick}>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutMe} />
                <Route path="/projects" component={Projects} />
                <Route path="/classes" component={Classes} />
                <Route path="/design" component={Design} />
                <Route path="*" component={Home} />
              </Switch>
            </div>
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
