import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import {
  Footer,
  NavBar,
  ScrollToTop,
} from './components';

import {
  About,
  Home,
  Projects,
  Classes,
} from './screens';

import './style.scss';

// google analytics
ReactGA.initialize('UA-135923598-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  const navbar = useRef();

  // if the user clicks in the main content area and the mobile hamburger menu is down, scroll it up
  const handleContentClick = () => navbar.current.handleScroll();

  return (
    <Router>
      <div id="app-content">
        <NavBar appRef={this} ref={navbar} />
        <div className="main-content" onClick={handleContentClick}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/classes" component={Classes} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </div>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
