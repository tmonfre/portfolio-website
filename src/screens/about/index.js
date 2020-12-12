import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './style.scss';

const AboutMe = () => {
  return (
    <div className="resume-information">
      <Fade>
        <div className="content-section">
          <h3>Summary</h3>
          <p>
            Senior at Dartmouth College studying Computer Science and Quantitative Social Science. Former intern at Disney Streaming Services.
            I have experience in full stack web development, mobile development, and software engineering.
          </p>
        </div>

        <div className="content-section">
          <h3>Education</h3>

          <div className="school">
            <div className="school-left">
              <p className="school-title"><a href="http://www.dartmouth.edu" target="_blank" rel="noopener noreferrer">Dartmouth College</a>  —  Hanover, NH</p>
              <p id="gpa_left">Cumulative GPA: 3.91</p>
            </div>

            <div className="school-right">
              <p className="duration">September, 2017 — June, 2021</p>
              <Link to="/classes"><p id="classes-link"><strong>Classes</strong></p></Link>
            </div>
          </div>

          <div className="school">
            <div className="school-left">
              <p className="school-title"><a href="https://bayporthssd.weebly.com" target="_blank" rel="noopener noreferrer">Bay Port High School</a>  —  Green Bay, WI </p>
              <p>ACT/GPA: 33/4.35</p>
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
                <img src={require('../../assets/aboutme/disney_streaming.png')} width="75" height="75" alt="Disney Streaming Services" />
              </a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="https://www.disneystreaming.com" target="_blank" rel="noopener noreferrer">Software Engineering Intern  — Disney Streaming Services</a>
                </p>
                <p className="duration">June, 2020 - August, 2020</p>
              </div>
              <p>
                Intern on the Disney+ web team. Contributed to feature development on the Disney+ web client application on the commerce/onboarding and
                main app teams. Also built an internal dashboard for managing dictionary information across several DSS web applications.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="https://www.disneystreaming.com" target="_blank" rel="noopener noreferrer">
                <img src={require('../../assets/aboutme/disney_streaming.png')} width="75" height="75" alt="Disney Streaming Services" />
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
                Intern on the Connected Devices – Native Client Platform team. Built developer tools with C# and the .NET Core Framework that allow users to
                create and manage native client projects from the command line. Supported the Browser-Based Devices team in launching Disney+.
                Built a Test Harness app to assist development of the NCP Video Player.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/aboutme/dali_logo.png')} width="75" height="75" alt="DALI Lab" /></a>
            </div>

            <div className="job">
              <div className="job-title">
                <p>
                  <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Software Developer  — Dartmouth Applied Learning & Innovation Lab</a>
                </p>
                <p className="duration">September, 2018 - Present</p>
              </div>
              <p>
                Develop full stack web apps and mobile apps in this experiential learning lab at Dartmouth. Oversee development process for the entire
                lab and support new member learning and growth as Development Lead. Assisted with project sourcing and onboarding as Partner Relations
                Lead junior year. Recent project partnered with US Forest Service to visualize data on an invasive species impacting east coast forests.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image too-high">
              <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">
                <img src={require('../../assets/aboutme/D_pine_logo.png')} width="65" height="65" alt="Dartmouth Computer Science" style={{ marginLeft: '5px', marginRight: '5px' }} />
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
                Have been a teaching assistant several times for CS1 (introductory course) and CS52 (full stack web development). Teach weekly lab sections,
                hold regular office hours, and help grade assignments/exams.
              </p>
            </div>
          </div>

          <div className="company">
            <div className="logo-image">
              <a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">
                <img src={require('../../assets/aboutme/wps_logo.png')} width="75" height="75" alt="WPS Health Solutions" />
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
                Wrote data integration scripts using Python and Power Query to streamline financial reporting processes.
                Built a task-tracking system that visualized real-time progress data to help improve the monthly closing process.
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
              <p className="duration">January, 2018 - March, 2021</p>
            </div>

            <p>Taught Dartmouth students how to ski through the physical education program. Earned Level 1 PSIA Certification.</p>
          </div>
        </div>

        <div className="content-section line-break" name="skills">
          <h3 id="skills-abilities">Programming Languages/Frameworks</h3>

          <div className="programming-languages">
            <p>Java, JavaScript, C, C#/.NET, Python, React, React Native, Redux, Node/Express, MySQL, MongoDB, R, MATLAB</p>
          </div>
        </div>

        <div className="content-section line-break" name="skills">
          <h3 id="skills-abilities">Skills</h3>
          <ul>
            <li>Have experience contributing to large software engineering projects, particularly focused on client-side web development.</li>
            <li>Experienced working in common software engineering workflows, including agile/scrum.</li>
            <br />
            <li>Strong communication skills. Experienced working in fast-paced environments. Eager to learn new things and be challenged.</li>
            <li>Self-motivated, driven to succeed, proactive, and flexible.</li>
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
