import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="resumeInformation">
                    <div className="content-section">
                        <h3>Summary</h3>
                        <p>Sophomore at Dartmouth College studying Computer Science and Quantitative Social Science. I have experience in web development, data visualization, and workflow optimization. My interests include leveraging the power of technology and software development to solve meaningful problems and the impact of data analytics on daily life. I am currently seeking software development internships for Fall 2019.</p>
                    </div>

                    <div className="content-section">
                        <h3>Education</h3>

                        <p className="school-title"><a href="http://www.dartmouth.edu" target="_blank" rel="noopener noreferrer">Dartmouth College</a>  —  Hanover, NH</p>
                        <p className="duration">September, 2017 — Present</p>
                        <div style={{clear:"both"}}></div>
                        <p id="gpa_left">Cumulative GPA: 3.83</p>
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
                            <p>Develop technological solutions for start-ups, entrepreneurs, and researchers in this experiential learning lab at Dartmouth. Create websites, apps, and software to solve problems for partners, and coordinate 3-5 person teams as a project manager. Most recent project visualized and predicted movements of an invasive species on the east coast. Website was built with React.js, and used Chart.js for data visualization. Predictive model (written by partners) ran in R.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image"><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/wps_logo.png")} width="75" height="75" alt="WPS Health Solutions"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">Finance Innovation Intern</a></strong><a href="http://wpshealthsolutions.com/" target="_blank"> — WPS Health Solutions</a></u></p>
                            <p className="duration">June, 2018 - August, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Integrated technology into business workflows and optimized internal processes for the Finance department. Streamlined reporting processes using Power Query and enhanced financial data visualization techniques using Power BI. Developed a task-tracking system to improve monthly closing processes. Visualized real-time data on task progress and analyzed bottlenecks/dependencies that slowed the process.</p>
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
                            <p>Served as a teaching assistant for an introductory computer science course taught in Python. Taught weekly lab sections, held regular office hours, and graded assignments/exams. Will be serving in this capacity for a Data Structures and Algorithms course in the spring.</p>
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
                            <p>Helped integrate technology into business workflows. Used technology to eliminate time-consuming, paper-based tasks. Implemented a digitalized payroll process using HH2 Cloud Services that saved 5-6 hours in the weekly reporting process.</p>
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
                            <p>Served as a tutor for an introductory computer science course. Held review sessions two-three times per week and went over assignments/exams to find areas of improvement.</p>
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
                                    <li>R</li>
                                    <li>MatLab</li>
                                    <li>NumPy/SciPy/scikit-learn for ML</li>
                                    <li>DAX/M</li>
                                </ul>
                            </div>

                            <div className="flex-item">
                                <p className="content-title">Working Knowledge</p>
                                <ul>
                                    <li>Swift</li>
                                    <li>SQL</li>
                                </ul>
                            </div>

                            <div className="flex-item">
                                <p className="content-title">Learning</p>
                                <ul>
                                    <li>C / C++</li>
                                    <li>Redux</li>
                                    <li>Angular.js</li>
                                    <li>Vue.js</li>
                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li>Strong leadership, presentation, and organizational skills.</li>
                            <li>Logical thinking, deductive reasoning, and problem-solving skills.</li>
                            <li>Experienced in full-stack web development, object-oriented programming, and software development.</li>
                            <li>Experienced in data visualization, data analysis, and developing tools for data-driven decision making.</li>
                            <li>Experienced in consulting and management as it relates to technology and workflow improvement.</li>
                            <li>Conversational in German.</li>
                        </ul>
                    </div>

                    <div className="content-section">
                        <h3>Awards</h3>
                        <ul>
                            <li>AP Scholar with Distinction</li>
                            <li>Dartmouth College Academic Honor List - top 15% of all students</li>
                            <li>National Merit Scholarship Finalist</li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AboutMe
