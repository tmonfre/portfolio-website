import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="resumeInformation">
                    <div className="content-section">
                        <h3>Summary</h3>
                        <p>Rising junior at Dartmouth studying Computer Science + Quantitative Social Science. Have experience in full stack web development, software engineering, and data visualization. Passionate about leveraging the power of technology to solve meaningful problems and building a data-driven world. Currently seeking software development/full stack webdev internships for Fall 2019.</p>
                    </div>

                    <div className="content-section">
                        <h3>Education</h3>

                        <p className="school-title"><a href="http://www.dartmouth.edu" target="_blank" rel="noopener noreferrer">Dartmouth College</a>  —  Hanover, NH</p>
                        <p className="duration">September, 2017 — June, 2021</p>
                        <div style={{clear:"both"}}></div>
                        <p id="gpa_left">Cumulative GPA: 3.87</p>
                        <div id="classes-mobile-drop"></div>
                        <Link to="/classes"><p id="classes-link"><strong>Classes</strong></p></Link>
                        <div style={{clear:"both"}}></div>

                        <br></br>

                        <p className="school-title"><a href="https://bayporthssd.weebly.com" target="_blank" rel="noopener noreferrer">Bay Port High School</a>  —  Green Bay, WI </p>
                        <p className="duration">September, 2013 — June, 2017</p>
                        <div style={{clear:"both"}}></div>
                        <p>Cumulative GPA: 4.35</p>
                    </div>

                    <div className="content-section">
                        <h3 id="work-experience">Work Experience</h3>

                        <div className="logo-image">
                            <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/dali_logo.png")} width="75" height="75" alt="DALI Lab"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Software Developer</a></strong><a href="http://dali.dartmouth.edu/" target="_blank"> — Dartmouth Applied Learning & Innovation Lab</a></u></p>
                            <p className="duration">September, 2018 - Present</p>
                            <div style={{clear:"both"}}></div>
                            <p>Develop full stack websites and apps for start-ups and researchers in this experiential learning lab at Dartmouth. Partnered with the US Forest Service to visualize data on an invasive species impacting east coast forests. Built full stack web app with React front-end, Node/Express server (hosted with Heroku), and a NoSQL (mongoDB) database. Partnered with a Boston-based start-up to build a mobile food ordering app with React Native and a Node/Express server. Have experience building RESTful APIs and integrating full stack apps with cloud computing services. Subject Matter Expert in React.js and Node.js for the lab. Hold open help hours and campus-wide workshops.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image"><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/wps_logo.png")} width="75" height="75" alt="WPS Health Solutions"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">Finance Innovation Intern</a></strong><a href="http://wpshealthsolutions.com/" target="_blank"> — WPS Health Solutions</a></u></p>
                            <p className="duration">June, 2018 - August, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Streamlined business workflows and reporting processes for the Finance department of this 3,500-employee company. Improved data integration using Python, Power Query, and Power BI for visualization and reporting purposes. Developed a task-tracking system to improve monthly closing processes. Visualized real-time data on task progress and analyzed bottlenecks/dependencies that slowed the process. Helped reduce monthly time to close by two days.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image too-high">
                            <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/dartmouth_logo.png")} width="75" height="75" alt="Dartmouth Computer Science"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Teaching Assistant</a></strong><a href="https://web.cs.dartmouth.edu/" target="_blank"> — Dartmouth College Department of Computer Science</a></u></p>
                            <p className="duration">March, 2018 - June, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Teaching assistant for an introductory computer science course taught in Python during my freshman and sophomore spring. Taught weekly lab sections, held regular office hours, and graded assignments/exams. Covered topics such as recursion, stacks/queues, classes/objects, BFS/DFS, and more.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image">
                            <a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/QI_logo.png")} width="75" height="75" alt="Quality Insulators"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer">Technology Development Intern</a></strong><a href="http://www.qualityinsulators.com/" target="_blank"> — Quality Insulators, Inc.</a></u></p>
                            <p className="duration">June, 2017 - August, 2017</p>
                            <div style={{clear:"both"}}></div>
                            <p>Integrated technology into business workflows. Wrote Python/VBA scripts to eliminate time-consuming, paper-based tasks. Implemented a digitalized payroll system that saved 5-6 hours in the weekly reporting process.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>
                    </div>

                    <div className="content-section">
                        <h3 id="additional-activities">Additional Activities</h3>

                        <div className="activity">
                            <p className="job-title"><u><strong><a href="https://students.dartmouth.edu/academic-skills/tutor-clearinghouse/about-tutor-clearinghouse" target="_blank" rel="noopener noreferrer">Computer Science Tutor</a></strong><a href="https://students.dartmouth.edu/academic-skills/tutor-clearinghouse/about-tutor-clearinghouse" target="_blank"> — Dartmouth Tutor Clearinghouse</a></u></p>
                            <p className="duration">January, 2018 - March, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Served as a tutor for an introductory computer science course. Held review sessions two-three times per week and went over assignments/exams to find areas of improvement. Focused specifically on building skills with recursive algorithms.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="activity">
                            <p className="job-title"><u><strong><a href="https://recreation.dartmouth.edu/physical-education/courses/snowsports/snowsport-classes" target="_blank" rel="noopener noreferrer">Alpine Ski Instructor</a></strong><a href="https://recreation.dartmouth.edu/physical-education/courses/snowsports/snowsport-classes" target="_blank"> — Dartmouth PE Snowsports Program</a></u></p>
                            <p className="duration">January, 2018 - March, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Taught Dartmouth students how to ski through the physical education program. Earned Level 1 PSIA Certification.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>
                    </div>

                    <div className="content-section line-break" name="skills">
                        <h3 id="skills-abilities">Skills, Abilities, and Programming Languages/Frameworks</h3>

                        <div className="programming-languages">
                            <div className="flex-item">
                                <p className="content-title">Experienced With</p>
                                <ul>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Node.js/Express.js</li>
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
                                    <li>Swift</li>
                                    <li>Ruby/Rails</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li>Strong leadership, presentation, and organizational skills.</li>
                            <li>Strong understanding of the fundamentals of computer science. Excited about tackling large, open-ended problems.</li>
                            <li>Logical thinking, deductive reasoning, and problem-solving skills.</li>
                            <li>Experienced in full-stack web development, object-oriented programming, and software development.</li>
                            <li>Experienced in data visualization, data analysis, and developing tools for data-driven decision making.</li>
                            <li>Self-motivated, self-starter, and driven to succeed.</li>
                        </ul>
                    </div>

                    <div className="content-section">
                        <h3>Awards</h3>
                        <ul>
                            <li>AP Scholar with Distinction</li>
                            <li>Dartmouth College Academic Honor List — top 15% of all students</li>
                            <li>National Merit Scholarship Finalist</li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AboutMe
