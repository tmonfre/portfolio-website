import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import '../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="resume-information">
      <Fade>
        <div className="content-section">
          <h3>Summary</h3>
          <p>
          Rising senior at Dartmouth College studying Computer Science + Quantitative Social Science. Have experience in software engineering,
          full stack web development, and mobile app development. Passionate about leveraging the power of technology to solve meaningful problems.
          Currently seeking full-time roles in software engineering starting June 2021.
          </p>
        </div>

        <div className="content-section">
          <h3>Education</h3>

          <div className="school">
            <div className="school-left">
              <p className="school-title"><a href="http://www.dartmouth.edu" target="_blank" rel="noopener noreferrer">Dartmouth College</a>  —  Hanover, NH</p>
              <p id="gpa_left">Cumulative GPA: 3.90</p>
            </div>

            <div className="school-right">
              <p className="duration">September, 2017 — June, 2021</p>
              <Link to="/classes"><p id="classes-link"><strong>Classes</strong></p></Link>
            </div>
          </div>

          <div className="school">
            <div className="school-left">
              <p className="school-title"><a href="https://bayporthssd.weebly.com" target="_blank" rel="noopener noreferrer">Bay Port High School</a>  —  Green Bay, WI </p>
              <p>Cumulative GPA: 4.35</p>
            </div>
            <div className="school-right">
              <p className="duration">September, 2013 — June, 2017</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h3 id="work-experience">Work Experience</h3>

          <div className="company">
            <div className="logo-image">
              <a href="https://www.disneystreaming.com" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/aboutme/disney_streaming.png')} width="75" height="75" alt="Disney Streaming Services" />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="https://www.disneystreaming.com" target="_blank" rel="noopener noreferrer">Software Engineering Intern  — Disney Streaming Services</a>
                </p>
                <p className="duration">September, 2019 - December, 2019</p>
              </div>
              <p>
                Intern on the Connected Devices – Native Client Platform team. Built developer tools with C# and the .NET Core Framework
                that allow users to create and manage new NCP projects from the command line. Supported the Browser Based Devices team in launching Disney+.
                Built a Test Harness app to assist development of the NCP Video Player. Worked in a fast-paced, agile environment with daily stand-ups,
                and monitored process flow.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require('../assets/aboutme/dali_logo.png')} width="75" height="75" alt="DALI Lab" /></a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Software Developer  — Dartmouth Applied Learning & Innovation Lab</a>
                </p>
                <p className="duration">September, 2018 - Present</p>
              </div>
              <p>
                Develop full stack web apps and mobile apps in this experiential learning lab at Dartmouth. Have experience building frontend
                applications with React and React Native, and experience building backend/server architectures with Node/Express.js.
                Have experience designing and using MySQL and MongoDB databases. Have experience building and interacting with RESTful APIs and cloud
                computing services. Partner Relations Lead my junior year and Development Lead my senior year.
              </p>

              <p>
              Most recent project partnered with a start-up to build a mobile food ordering app and website. Also built an internal admin portal for
              handling orders. Check it out on the App Store
                <a className="link" href="https://tinyurl.com/yaa32swb" target="_blank" rel="noopener noreferrer"> here </a>
              or on the web
                <a className="link" href="https://order.6amhealth.com/" target="_blank" rel="noopener noreferrer"> here</a>.
              </p>

            </div>
          </div>

          <div className="company">
            <div className="logo-image too-high">
              <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/aboutme/D_pine_logo.png')} width="65" height="65" alt="Dartmouth Computer Science" style={{ marginLeft: '5px', marginRight: '5px' }} />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Teaching Assistant  — Dartmouth College Department of Computer Science</a>
                </p>
                <p className="duration">March, 2018 - Present</p>
              </div>
              <p>
              Have been a teaching assistant for CS1 (introductory course) and CS52 (full stack web development). Teach weekly lab sections,
              hold regular office hours, and help grade assignments/exams.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/aboutme/wps_logo.png')} width="75" height="75" alt="WPS Health Solutions" />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">Finance Innovation Intern  — WPS Health Solutions</a>
                </p>
                <p className="duration">June, 2018 - August, 2018</p>
              </div>
              <p>
              Streamlined business workflows and reporting processes for the Finance department of this 3,500-employee company.
              Improved data integration using Python, Power Query, and Power BI for visualization and reporting purposes.
              Developed a task-tracking system to improve monthly closing processes. Visualized real-time data on task progress and
              analyzed bottlenecks/dependencies that slowed the process. Helped reduce monthly time to close by two days.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h3 id="additional-activities">Additional Activities</h3>

          <div className="job">
            <div className="job-title">
              <p>
                <a href="https://students.dartmouth.edu/academic-skills/tutor-clearinghouse/about-tutor-clearinghouse" target="_blank" rel="noopener noreferrer">
                Computer Science Tutor — Dartmouth Tutor Clearinghouse
                </a>
              </p>
              <p className="duration">January, 2018 - March, 2018</p>
            </div>

            <p>
            Served as a tutor for an introductory computer science course. Held review sessions two-three times per week and went over assignments/exams to find areas of improvement.
            Focused specifically on building skills with recursive algorithms.
            </p>
          </div>

          <div className="job">
            <div className="job-title">
              <p>
                <a href="https://recreation.dartmouth.edu/physical-education/courses/snowsports/snowsport-classes" target="_blank" rel="noopener noreferrer">
                Alpine Ski Instructor  — Dartmouth PE Snowsports Program
                </a>
              </p>
              <p className="duration">January, 2018 - March, 2018</p>
            </div>

            <p>Taught Dartmouth students how to ski through the physical education program. Earned Level 1 PSIA Certification.</p>
          </div>
        </div>

        <div className="content-section line-break" name="skills">
          <h3 id="skills-abilities">Skills, Abilities, and Programming Languages/Frameworks</h3>

          <div className="programming-languages">
            <div className="flex-item">
              <p className="content-title">Experienced With</p>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>C#/.NET</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>HTML/CSS/SASS</li>
                <li>React Native</li>
                <li>Node/Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>R</li>
                <li>MATLAB</li>
              </ul>
            </div>

            <div className="flex-item">
              <p className="content-title">Learning</p>
              <ul>
                <li>Swift</li>
              </ul>
            </div>
          </div>
          <ul>
            <li>Experienced with web and mobile application development, information retrieval, and system design.</li>
            <li>Strong understanding of object-oriented programming and algorithms, gathered from coursework & projects.</li>
            <li>Strong understanding of RESTful APIs, test-driven development, and managing/updating documentation.</li>
            <li>Strong understanding of the fundamentals of computer science. Excited about tackling large, open-ended problems.</li>

            <br />

            <li>Strong leadership and organizational skills. Experienced working in fast-paced, team environments.</li>
            <li>Self-motivated, driven to succeed, and proactive. Fueled by coffee + a desire to solve cool problems that are worth solving.</li>
          </ul>
        </div>

        <div className="content-section">
          <h3>Awards</h3>
          <ul>
            <li>James O. Freedman Presidential Scholar</li>
            <li>Dartmouth College Academic Honor List</li>
            <li>Merit Citation in CS 52: Full Stack Web Development</li>
            <li>Merit Citation in Gov 7: Media and Politics</li>
          </ul>
          <ul>
            <li>AP Scholar with Distinction</li>
            <li>National Merit Scholarship Finalist</li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
