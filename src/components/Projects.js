import React from 'react';
import ImgurEmbed from 'react-imgur-embed';
import Fade from 'react-reveal/Fade';

import '../styles/Projects.scss';

const Projects = () => {
  return (
    <div id="projects">
      <Fade up>
        <div className="dev-samples">
          <div className="left">
            <div className="dev-sample-area">
              <h2>Project Pine Beetle</h2>
              <p>
                DALI Lab project that partnered with the US Forest Service to visualize and predict outbreaks of an invasive species on the east coast.
                Front-end was built with React.js. Back-end was built with Node.js/Express.js and a mongoDB database. Data visualization was built with Chart.js.
                Used a predictive model written in R that runs a linear regression on historical data to predict future outbreaks.
              </p>
              <em><p>View the website <a href="https://pine-beetle-prediction.surge.sh" target="_blank" rel="noopener noreferrer">here.</a> Please contact me to see the code.</p></em>
              <ImgurEmbed id="a/UIDuDoj" />
            </div>

            <div className="dev-sample-area">
              <h2>DALI Lab Members</h2>
              <p>Personal project built with React that queries and displays data on DALI Lab Members. Users can filter, sort, and search. JSX is compiled using webpack and babel.</p>
              <em>
                <p>
                    View the code <a href="https://github.com/tmonfre/dali-dev-challenge" target="_blank" rel="noopener noreferrer">here.</a>
                    Visit the website <a href="http://dali-dev-challenge.surge.sh" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/JbnSF7M" />
            </div>

            <div className="dev-sample-area">
              <h2>React/Redux Blog</h2>
              <p>
                Project built for Dartmouth CS52: Full Stack Web Development. This React app allows users to login, create, view, and edit blog posts.
                Changes persist in real-time across devices with a Node/Express server. Authentication of user and routes is handled on server.
                Only verified users can edit their own posts, and delete their own posts.
              </p>
              <em>
                <p>
                    View the frontend code <a href="https://github.com/dartmouth-cs52-19S/lab4-tmonfre" target="_blank" rel="noopener noreferrer">here</a>,
                    and the backend code <a href="https://github.com/dartmouth-cs52-19S/lab5-tmonfre" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/brIEZ5M" />
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
              <h2>6AM Health</h2>
              <p>
                DALI Lab project that partnered with a Boston-based start-up focused on providing accessible, healthy meal options to customers
                via the fresh fridge vending system. Built a React Native app that allows users to find fresh fridges nearby, place orders,
                and pay for food. Built a Node/Express server and integrated authentication with Firebase. Use Stripe for processing payments.
              </p>
              <em>
                <p>
                    Under active development! Check out the latest screen
                    recordings <a href="https://drive.google.com/drive/folders/1qUUD9AEsorhplgpG-hiUeM0bL4uYDJ8O?usp=sharing" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/hgdH2Dm" />
            </div>

            <div className="dev-sample-area">
              <h2>Local Weather Forecast</h2>
              <p>Personal project built with React that presents live weather information to users via the OpenWeatherMap API. The site uses cookies to remember the user&aposs last selection.</p>
              <em>
                <p>
                    View the code <a href="https://github.com/tmonfre/weather-app" target="_blank" rel="noopener noreferrer">here.</a>
                    Visit the website <a href="https://local-weather-forecast.surge.sh" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/Yh31h6a" />
            </div>

            <div className="dev-sample-area">
              <h2>React Notes</h2>
              <p>
                Project built for Dartmouth CS52: Full Stack Web Development. This React app allows users to login, create, view, and edit notes.
                Changes persist in real-time across devices. Authentication is handled with Firebase.
              </p>
              <em>
                <p>
                    View the code <a href="https://github.com/dartmouth-cs52-19S/lab3-tmonfre" target="_blank" rel="noopener noreferrer">here.</a>
                    Visit the website <a href="https://cs52-react-notes.surge.sh/" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/s6JhWdz" />
            </div>

            <div className="dev-sample-area">
              <h2>Concentration</h2>
              <p>In the summer of 2018, I worked on an iOS memory game app. This is my first project in Swift. Inspired by Stanford CS193p.</p>
              <em><p>View the code <a href="https://github.com/tmonfre/concentration" target="_blank" rel="noopener noreferrer">here.</a> Click through the images below.</p></em>
              <ImgurEmbed id="a/vV2YtPm" />
            </div>
          </div>

          <div style={{ clear: 'both' }} />

        </div>
        <div id="more-info">
          <h3>Please <a href="mailto:thomas.a.monfre.21@dartmouth.edu">contact me</a> for Python, Java, and MatLab coding examples.</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
