import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div id="resumeInformation">
                    <div className="content-section">
                        <h3>Summary</h3>
                        <p>I am a sophomore at Dartmouth College studying Computer Science and Quantitative Social Science. I have experience in web development, data visualization, and workflow optimization. My interests include leveraging the power of technology and software development to solve meaningful problems and the impact of data analytics on daily life. I am currently seeking software development internships for Fall 2019.</p>
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
                        <h3>Work Experience</h3>

                        <div className="logo-image">
                            <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/dali_logo.png")} width="75" height="75" alt="DALI Lab"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Developer/Project Manager</a></strong><a href="http://dali.dartmouth.edu/" target="_blank"> — Dartmouth Applied Learning & Innovation Lab</a></u></p>
                            <p className="duration">September, 2018 - Present</p>
                            <div style={{clear:"both"}}></div>
                            <p>Design and develop technological solutions for start-ups, entrepreneurs, non-profits, and researchers in this experiential learning lab at Dartmouth. Each academic term, we develop software, apps, and websites to solve various problems for our partners. We are focused on using human-centered design processes to optimize user-fit and solve critical design and development problems.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image"><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/wps_logo.png")} width="75" height="75" alt="WPS Health Solutions"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://wpshealthsolutions.com/" target="_blank" rel="noopener noreferrer">Finance Innovation Intern</a></strong><a href="http://wpshealthsolutions.com/" target="_blank"> — WPS Health Solutions</a></u></p>
                            <p className="duration">June, 2018 - August, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Interned with the Finance Innovation Team, integrating technology into business workflows and visualizing financial data. My work included optimizing reporting techniques to streamline the analysis of KPIs and developing visual dashboards for efficient reporting. During this experience, I worked extensively with Microsoft Office 365 products, specifically Power Query, Power BI, TFS, Flows, and SharePoint.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image too-high">
                            <a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/dartmouth_logo.png")} width="75" height="75" alt="Dartmouth Computer Science"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="https://web.cs.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Computer Science Department Teaching Assistant</a></strong><a href="https://web.cs.dartmouth.edu/" target="_blank"> — Dartmouth College</a></u></p>
                            <p className="duration">March, 2018 - June, 2018</p>
                            <div style={{clear:"both"}}></div>
                            <p>Served as a teaching assistant for an introductory computer science course taught in Python. I held regular office hours, taught weekly lab sections, and graded assignments and exams. I will be serving in this capacity for a Data Structures and Algorithms course this year.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>

                        <div className="logo-image">
                            <a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/aboutme/QI_logo.png")} width="75" height="75" alt="Quality Insulators"></img></a>
                        </div>

                        <div className="job">
                            <p className="job-title"><u><strong><a href="http://www.qualityinsulators.com/" target="_blank" rel="noopener noreferrer">Technology Development Intern</a></strong><a href="http://www.qualityinsulators.com/" target="_blank"> — Quality Insulators, Inc.</a></u></p>
                            <p className="duration">June, 2017 - December, 2017</p>
                            <div style={{clear:"both"}}></div>
                            <p>Helped coordinate the integration of technology into common workflows and business practices of the company. A primary focus of my work centered around optimizing reporting strategies. I worked full-time with Quality Insulators the summer going into freshman year of college and during that subsequent winter break. Now while I am away at school, I manage websites/social media accounts and serve as a consultant.</p>
                        </div>

                        <div style={{clear:"both"}}></div>
                        <br></br>
                    </div>

                    <div className="content-section line-break" name="skills">
                        <h3>Skills, Abilities, and Programming Languages/Frameworks</h3>

                        <div className="programming-languages">
                            <div className="flex-item">
                                <p className="content-title">Experienced With</p>
                                <ul>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>MatLab</li>
                                    <li>DAX/M</li>
                                </ul>
                            </div>

                            <div className="flex-item">
                                <p className="content-title">Working Knowledge</p>
                                <ul>
                                    <li>Swift</li>
                                </ul>
                            </div>

                            <div className="flex-item">
                                <p className="content-title">Learning</p>
                                <ul>
                                    <li>Redux</li>
                                    <li>Angular.js</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li>Strong leadership, presentation, and organizational skills.</li>
                            <li>Logical thinking, deductive reasoning, and problem-solving skills.</li>
                            <li>Experienced in full stack web development, object-oriented programming, and data visualization.</li>
                            <li>Experienced in consulting and management as it relates to technology and workflow improvement.</li>
                            <li>Experienced in digital media, marketing, and social media development.</li>
                        </ul>
                    </div>

                    <div className="content-section">
                        <h3>Activities and Leadership</h3>
                        <ul>
                            <li className="school-header">Dartmouth College</li>
                            <li>Alpine Ski Instructor</li>
                            <li>Computer Science & Mathematics Tutor</li>
                            <li>Tour Guide</li>
                            <br></br>
                            <li className="school-header">Bay Port High School</li>
                            <li>Class President</li>
                            <li>National Honor Society Member</li>
                            <li>Youth Service Learning Member (over 300 service hours)</li>
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
