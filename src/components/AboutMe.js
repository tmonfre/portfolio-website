import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import '../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="resume-information">
      <Fade up>
        <div className="content-section">
          <h3>Summary</h3>
          <p>
          Rising junior at Dartmouth studying Computer Science + Quantitative Social Science. Have experience in full stack web development, software engineering, and data visualization.
          Passionate about leveraging the power of technology to solve meaningful problems and building a data-driven world.
          Currently seeking software development/full stack webdev internships for Fall 2019.
          </p>
        </div>

        <div className="content-section">
          <h3>Education</h3>

          <div className="school">
            <div className="school-left">
              <p className="school-title"><a href="http://www.dartmouth.edu" target="_blank" rel="noopener noreferrer">Dartmouth College</a>  —  Hanover, NH</p>
              <p id="gpa_left">Cumulative GPA: 3.87</p>
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
              Develop full stack websites and mobile apps for start-ups and researchers in this experiential learning lab at Dartmouth.
              Have experience building flexible, large-scale frontends with modern frameworks such as React.js and Angular.js, and experience
              building scalable backends with Node.js/Express.js and NoSQL (mongoDB) databases.
              Have experience building RESTful APIs and integrating full stack apps with cloud computing services (such as Google Cloud Platform, Firebase, and IBM Watson).
              Have experience working in agile, fast-paced, team environments that are flexible to product changes from partners.
              Peer mentor for React and Node – hold office hours and workshops. Partner Relations Lead – help source unique projects.
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

          <div className="company">
            <div className="logo-image too-high">
              <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/aboutme/dartmouth_logo.png')} width="75" height="75" alt="Dartmouth Computer Science" />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Teaching Assistant  — Dartmouth College Department of Computer Science</a>
                </p>
                <p className="duration">March, 2018 - June, 2018</p>
              </div>
              <p>
              Teaching assistant for an introductory computer science course taught in Python during my freshman and sophomore spring.
              Taught weekly lab sections, held regular office hours, and graded assignments/exams. Covered topics such as recursion, stacks/queues, classes/objects, BFS/DFS, and more.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer">
                <img src={require('../assets/aboutme/QI_logo.png')} width="75" height="75" alt="Quality Insulators" />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer">Technology Development Intern  — Quality Insulators, Inc.</a>
                </p>
                <p className="duration">June, 2017 - August, 2017</p>
              </div>
              <p>
              Integrated technology into business workflows. Wrote Python/VBA scripts to eliminate time-consuming, paper-based tasks.
              Implemented a digitalized payroll system that saved 5-6 hours in the weekly reporting process.
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
                <li>Python</li>
                <li>React.js</li>
                <li>Node.js/Express.js</li>
                <li>Redux</li>
                <li>HTML/CSS/SASS</li>
                <li>React Native</li>
                <li>R</li>
                <li>MatLab</li>
                <li>NumPy/SciPy/scikit-learn for ML</li>
                <li>Mocha/Chai for unit testing</li>
              </ul>
            </div>

            <div className="flex-item">
              <p className="content-title">Learning</p>
              <ul>
                <li>Ruby on Rails</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Swift</li>
              </ul>
            </div>
          </div>
          <ul>
            <li>Experienced with web and mobile application development, information retrieval, and system design.</li>
            <li>Strong understanding of object-oriented programming (particularly in Java) and algorithms, gathered from coursework & projects.</li>
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
            <li>Dartmouth College Academic Honor List — top 15% of all students</li>
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
