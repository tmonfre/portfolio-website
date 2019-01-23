import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Home from './Home.js'
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Classes from './Classes.js';
import Design from './Design.js';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.navbar = React.createRef();
        this.handleContentClick = this.handleContentClick.bind(this);
    }
    render() {
        return(
            <Router>
              <div>
                <NavBar appRef={this} ref={this.navbar} />
                <div className="main-content" onClick={this.handleContentClick}>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/aboutme" component={AboutMe} />
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

    // if the user clicks in the main content area and the mobile hamburger menu is down, scroll it up
    handleContentClick() {
        this.navbar.current.handleScroll();
    }
}

export default App;
