import React, { Component } from 'react';
import '../styles/Classes.css';
var $ = require('jquery');

class Classes extends Component {
    constructor(props) {
        super(props)
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }
    render() {
        return(
            <div id="classes">
                <h3>Current Classes</h3>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 31: Algorithms</p>
                    <p className="description">A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, lower bounds, dynamic programming, greedy algorithms, amortized analysis, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity and proofs of correctness, are all emphasized.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 74: Machine Learning and Statistical Data Analysis</p>
                    <p className="description">This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide variety of data sets will be described.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">GOVT 10: Quantitative Political Analysis</p>
                    <p className="description">This course will provide students with useful tools for undertaking empirical research in political science and will help them to become informed consumers of quantitative political analysis. The course will first consider the general theoretical concepts underlying empirical research, including the nature of causality, the structure and content of theories, and the formulation and testing of competing hypotheses. The course will then employ these concepts to develop several quantitative approaches to political analysis. Students will be introduced to two statistical methods frequently used by political scientists, contingency tables and linear regression. By learning to systematically analyze political data, students will gain the ability to better conduct and evaluate empirical research in both its quantitative and qualitative forms.</p>
                </div>

                <br></br>

                <h3>Completed Classes</h3>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 1: Introduction to Programming and Computation</p>
                    <p className="description">This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 10: Problem Solving via Object-Oriented Programming</p>
                    <p className="description">Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 11: Foundations of Applied Computer Science</p>
                    <p className="description">This course introduces core computational and mathematical techniques for data analysis and physical modeling, foundational to applications including computational biology, computer vision, graphics, machine learning, and robotics. The approaches covered include modeling and optimizing both linear and nonlinear systems, representing and computing with uncertainty, analyzing multi-dimensional data, and sampling from complex domains. The techniques are both grounded in mathematical principles and practically applied to problems from a broad range of areas.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">CS 30: Discrete Mathematics in Computer Science</p>
                    <p className="description">This course integrates discrete mathematics with algorithms and data structures, using computer science applications to motivate the mathematics. It covers logic and proof techniques, induction, set theory, counting, asymptotics, discrete probability, graphs, and trees.</p>
                </div>

                <br></br>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">GOVT 7.3: Media and Politics</p>
                    <p className="description">The variety of media sources covering politics has expanded substantially in recent years: online-only news, satire-based news, social media forums such as blogs, and other types of “new media” now exist alongside more traditional media sources such as newspapers and television news hours. In this seminar, we will explore how the media influences the nature of politics and political knowledge in the United States. Some of the questions we will examine include: How does the rise of new media affect the public’s understanding of politics? Are market forces pushing media outlets away from objective, in-depth, fact-based political reporting? How prevalent is partisan bias in the news media? How do journalists and politicians vie for control of the news? How powerful can the media be in anointing (or destroying) candidates? Students who are devoted to improving their paper-writing abilities are encouraged to take this class, as we will spend about half of our classroom time discussing the media and about half of our time discussing writing and associated seminar abilities. Students will write and revise two 5-6 page analytical papers during the term; additionally, a class-produced blog about the media and politics will give us the opportunity to contrast formal and informal genres of writing and argumentation.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">ECON 1: The Price System: Analysis, Problems, and Policies</p>
                    <p className="description">Emphasis will be placed on problems and policies of current interest as they relate to resource use and the distribution of income and output. Students will receive an introduction to the theory of supply and demand in both product and factor markets in order to examine selected topics drawn from such areas as industrial organization and antitrust policy, labor economics, international trade, economic development, agriculture, urban problems, poverty and discrimination, public sector economics, and environmental problems.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">WRIT 5: Hacking and Democracy</p>
                    <p className="description">This course explores your composing processes. We will read, invent, draft, collaborate, and revise. As we do, we will investigate hacking, propaganda, and democracy as well as the intersections between rhetoric, ethics, and technologies.<br></br><br></br>Throughout the course we will read, talk, and write about work by those on the cutting edge of rhetoric and technology. We will then spend the second two-thirds of the course reading, talking, and writing about hackers, bots, and WikiLeaks (and the political and technological fallout of their work). In exploring questions about rhetoric, technology, and digital ethics, you will compose a multimodal definitional text as well as a literature review essay and a case study that examines a case related to our course topic. Students will be encouraged to explore new genres and technologies throughout the course, and a significant portion of our class time will be spent writing, revising, and reading one another’s work.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">PHIL 3: Reason and Argument</p>
                    <p className="description">An introduction to informal logic with special attention to the analysis of actual arguments as they arise in daily life as well as in legal, scientific, and moral reasoning. Along with the analysis and criticism of arguments, the course will also consider the methods for constructing arguments that are both logically correct and persuasive. Open to all classes.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">EDUC 16: Educational Psychology</p>
                    <p className="description">How do we learn? How can modern educational settings harness recent innovations concerning the essence of human learning? Educational psychology provides a foundation for applying the psychological principles that underlie learning in both formal and informal educational settings. In this course, we will explore the multitude of ways that people learn, the effects of different types of teaching strategies on learning, and the impact of individual differences on learning. We will also explore assessment, creativity and problem solving, as well as cultural and motivational influences on learning across diverse educational situations. Underlying the course will be an account of the way the human mind works, changes, and adapts in different settings. This includes the home, the school, the university and any context in which explicit or implicit education takes place. Open to all classes.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">ENGL 54.40: Literary Culture in the Age of Digital Distraction</p>
                    <p className="description">This course is organized around two main projects that will investigate the interesting and compelling ways that "traditional" forms of literacy are evolving to coexist with digital and social media. First, students will choose a contemporary practice, tool, or genre in which print and digital media have converged (e.g. book lists on Goodreads, e-book hardware, "Twitter fiction"), exploring what if anything is "new" about it. Next, student groups will design and prototype a digital technology that reimagines the ways that literature is produced or consumed in the context of digital media. This project will accommodate students with varying levels of technical expertise, though no programming experience is presumed. Throughout the course, readings on the history of media, the ethnography of literacy, and human-computer interaction will guide both our writing and production.</p>
                </div>

                <div className="course-dropdown" onClick={this.handleTitleClick}>
                    <p className="title">ENGL 55.11: <em>Hamilton: The Revolution</em> as a Work of Art</p>
                    <p className="description">In <em>Hamilton: The Revolution</em> (the book of annotated lyrics and account of the musical’s production), Lin-Manuel Miranda and his collaborators create two frames for their work’s significance. One is the historical American Revolution of the 18th century, which the musical rereads via the figure of the orphan-immigrant; the other references their own musical, which they describe as an act of cultural revolution in its engagement with the racial politics of the early millennium. What does it mean to read revolution as a work of art, and Hamilton as its artistic reinterpretation? In this course, we will develop frames for thinking analytically about Hamilton’s artistic engagement with class, gender and ethnicity in the historic past as well as our own moment.</p>
                </div>

                <div className="course-dropdown" id="buffer" onClick={this.handleTitleClick}>
                    <p className="title">GERM 3: Intermediate German</p>
                    <p className="description">Continuation of German 2. A continued intensive study of basic grammar and vocabulary through readings, oral and written drills, composition exercises, and conversation. Completion of this course constitutes fulfillment of the language requirement.</p>
                </div>
            </div>
        )
    }

    // show the course description when the user clicks on the course title
    handleTitleClick(event) {
        $(event.currentTarget).find('.description').slideToggle(350);
    }
}

export default Classes
