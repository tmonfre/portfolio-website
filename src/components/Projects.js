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
                        <h2>Local Weather Forecast</h2>
                        <p>Website built using React that presents live weather information to users via the OpenWeatherMap public API. The site uses cookies to remember the user's last selection.</p>
                        <em><p>View the code <a href="https://github.com/tmonfre/weather-app" target="_blank" rel="noopener noreferrer">here.</a> Visit the site <a href="https://local-weather-forecast.surge.sh" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                        <ImgurEmbed id="a/Yh31h6a" />
                    </div>

                    <div className="right">
                        <h2>DALI Lab Members</h2>
                        <p>Website built using React that queries and displays data on DALI Lab Members. Users can filter, sort, and search. Front-end built with React. JSX is compiled using webpack and babel.</p>
                        <em><p>View the code <a href="https://github.com/tmonfre/dali-dev-challenge" target="_blank" rel="noopener noreferrer">here.</a> Visit the site <a href="http://dali-dev-challenge.surge.sh" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                        <ImgurEmbed id="a/JbnSF7M" />
                    </div>

                    <div style={{clear:"both"}}></div>

                    <div className="left">
                        <h2>Project Pine Beetle</h2>
                        <p>Website built in in the DALI Lab that visualizes data on Southern Pine Beetles across twenty US states. Data is loaded from MongoDB. Next term I intend on implementing React.</p>
                        <em><p>View the site <a href="http://pine-beetle-prediction.surge.sh" target="_blank" rel="noopener noreferrer">here.</a> Please contact me to see the code.</p></em>
                        <ImgurEmbed id="a/9nIxsRD" />
                    </div>

                    <div className="right">
                        <h2>Portfolio Website</h2>
                        <p>Website built using React that displays my resume and portfolio information. Page contents are loaded with react-router. Bootstrapped with create-react-app.</p>
                        <em><p>View the code <a href="https://github.com/tmonfre/portfolio-website" target="_blank" rel="noopener noreferrer">here.</a></p></em>
                        <ImgurEmbed id="a/4DFWxXV" />
                    </div>

                    <div className="right">
                        <h2>Concentration</h2>
                        <p>In the summer of 2018, I worked on an iOS memory game app. This is my first project in Swift. Inspired by Stanford CS193p.</p>
                        <em><p>View the code <a href="https://github.com/tmonfre/concentration" target="_blank" rel="noopener noreferrer">here.</a> Click through the images below.</p></em>
                        <ImgurEmbed id="a/vV2YtPm" />
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
