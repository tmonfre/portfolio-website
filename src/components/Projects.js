import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import ImgurEmbed from 'react-imgur-embed';
import '../styles/Projects.css';

class Projects extends Component {
    render() {
        return(
            <div id="projects">
                <div className="dev-samples">
                    <div className="left">
                        <div className="dev-sample-area">
                            <h2>Project Pine Beetle</h2>
                            <p>DALI Lab project that partnered with the US Forest Service to visualize and predict outbreaks of an invasive species on the east coast. Front-end was built with React.js. Back-end was built with Node.js/Express.js and used a MongoDB database. Used a predictive model written in R that runs a linear regression on historical data to predict future outbreaks.</p>
                            <em><p>View the website <a href="https://pine-beetle-prediction.surge.sh" target="_blank" rel="noopener noreferrer">here.</a> Please contact me to see the code.</p></em>
                            <ImgurEmbed id="a/UIDuDoj" />
                        </div>

                        <div className="dev-sample-area">
                            <h2>Portfolio Website</h2>
                            <p>Website built with React that displays my resume and portfolio information. Page contents are loaded with react-router. Bootstrapped with create-react-app.</p>
                            <em><p>View the code <a href="https://github.com/tmonfre/portfolio-website" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                            <ImgurEmbed id="a/4DFWxXV" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="dev-sample-area">
                            <h2>Local Weather Forecast</h2>
                            <p>Personal project built with React that presents live weather information to users via the OpenWeatherMap API. The site uses cookies to remember the user's last selection.</p>
                            <em><p>View the code <a href="https://github.com/tmonfre/weather-app" target="_blank" rel="noopener noreferrer">here.</a> Visit the website <a href="https://local-weather-forecast.surge.sh" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                            <ImgurEmbed id="a/Yh31h6a" />
                        </div>

                        <div className="dev-sample-area">
                            <h2>DALI Lab Members</h2>
                            <p>Personal project built with React that queries and displays data on DALI Lab Members. Users can filter, sort, and search. JSX is compiled using webpack and babel.</p>
                            <em><p>View the code <a href="https://github.com/tmonfre/dali-dev-challenge" target="_blank" rel="noopener noreferrer">here.</a> Visit the website <a href="http://dali-dev-challenge.surge.sh" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                            <ImgurEmbed id="a/JbnSF7M" />
                        </div>

                        <div className="dev-sample-area">
                            <h2>Concentration</h2>
                            <p>In the summer of 2018, I worked on an iOS memory game app. This is my first project in Swift. Inspired by Stanford CS193p.</p>
                            <em><p>View the code <a href="https://github.com/tmonfre/concentration" target="_blank" rel="noopener noreferrer">here.</a> Click through the images below.</p></em>
                            <ImgurEmbed id="a/vV2YtPm" />
                        </div>
                    </div>

                    <div style={{clear:"both"}}></div>

                </div>
                <div id="more-info">
                    <h3>Please <a href="mailto:thomas.a.monfre.21@dartmouth.edu">contact me</a> for Python, Java, and MatLab coding examples.</h3>
                    <h3 id="last">See <Link to="/design">here</Link> for design samples.</h3>
                </div>
            </div>
        )
    }
}

export default Projects
