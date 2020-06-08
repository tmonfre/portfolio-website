import React from 'react';
import ImgurEmbed from 'react-imgur-embed';
import Fade from 'react-reveal/Fade';

import '../styles/Projects.scss';

const Projects = () => {
  return (
    <div id="projects">
      <Fade>
        <div className="dev-samples">
          <div className="left">
            <div className="dev-sample-area">
              <h2>6AM Health</h2>
              <p>
                Partnered with a start-up focused on providing accessible, healthy meal options to customers. Built a mobile app and website that allows
                users to order ahead to a fridge in their office building. Also built an internal admin portal for managing orders.
              </p>
              <em>
                <p>
                  Check it out on the App Store <a href="https://tinyurl.com/yaa32swb" target="_blank" rel="noopener noreferrer">here </a>
                   or on the web <a href="https://order.6amhealth.com/" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/4EF5WYz" />
            </div>

            <div className="dev-sample-area">
              <h2>Boost</h2>
              <p>
                Mobile app and website that tracks user location and habits to analyze a user&apos;s most productive time of day and locations. Helps
                users plan their day.
              </p>
              <em>
                <p>
                  View the mobile app code <a href="https://github.com/dartmouth-cs52-19S/project-boost-mobile" target="_blank" rel="noopener noreferrer">here</a>,
                  the server code <a href="https://github.com/dartmouth-cs52-19S/project-boost-server" target="_blank" rel="noopener noreferrer">here</a>,
                  and the web frontend code <a href="https://github.com/dartmouth-cs52-19S/project-boost-web" target="_blank" rel="noopener noreferrer">here</a>
                </p>

              </em>
              <ImgurEmbed id="a/eFgaW2e" />
            </div>
          </div>

          <div className="right">
            <div className="dev-sample-area">
              <h2>Project Pine Beetle</h2>
              <p>
                DALI Lab project that partnered with the US Forest Service to visualize and predict outbreaks of an invasive species on the east coast.
                Used a predictive model written in R that runs a linear regression on historical data to predict future outbreaks.
              </p>
              <em><p>View the website <a href="https://pine-beetle-prediction.surge.sh" target="_blank" rel="noopener noreferrer">here.</a> Please contact me to see the code.</p></em>
              <ImgurEmbed id="a/UIDuDoj" />
            </div>

            <div className="dev-sample-area">
              <h2>COVID-19 Data Visualization</h2>
              <p>
                Website that visualizes data on the novel coronavirus (COVID-19) pandemic in the US. Data came from the NY Times. Users can view case and death
                counts on the state and county level, both cumulative and on a per-day basis. Final project for CS61: Database Systems.
              </p>
              <em>
                <p>View the frontend code <a href="https://github.com/tmonfre/cs61-covid19-frontend" target="_blank" rel="noopener noreferrer">here</a> and
              the backend code <a href="https://github.com/tmonfre/cs61-covid19-backend" target="_blank" rel="noopener noreferrer">here.</a>
                </p>
              </em>
              <ImgurEmbed id="a/53TFzj6" />
            </div>

            <div className="dev-sample-area">
              <h2>Zoom Command Line Tool</h2>
              <p>
                Command line tool built with C# and the .NET Core SDK to easily launch Zoom meetings from the command line.
              </p>
              <em>
                <p>View the code <a href="https://github.com/tmonfre/zoom-cli" target="_blank" rel="noopener noreferrer">here.</a></p>
              </em>
            </div>
          </div>

          <div style={{ clear: 'both' }} />

        </div>
        <div id="more-info">
          <h3>Please <a href="mailto:thomas.a.monfre.21@dartmouth.edu">contact me</a> for coding samples in a specific language.</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
