import React, { Component } from 'react';
import { Bounce } from 'react-reveal';

import '../styles/Classes.scss';

const $ = require('jquery');

class Classes extends Component {
    // show the course description when the user clicks on the course title
    handleTitleClick = (event) => {
      $(event.currentTarget).find('.description').slideToggle(350);
    }

    render() {
      return (
        <div id="classes">
          <Bounce left>
            <h3>Current Classes (Summer 2019)</h3>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 50: Software Design and Implementation</p>
              <p className="description">
                Techniques for building large, reliable, maintainable, and understandable software systems.
                Topics include UNIX tools and filters, programming in C, software testing, debugging, and teamwork in software development.
                Concepts are reinforced through a small number of medium-scale programs and one team programming project.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">QSS 17: Data Visualization</p>
              <p className="description">
                Big data are everywhere – in government, academic research, media, business, and everyday life.
                To tell the stories hidden behind blizzards of data, effective visualization is critical.
                This course primarily teaches R, a free software environment for statistical computing and graphics,
                which is widely regarded as one of the most versatile and flexible tools for data visualization and, more broadly, data science.
                Students completing the course will know how to “wrangle” and visualize data critical to their scientific endeavors.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">PHYS 3: General Physics</p>
              <p className="description">The fundamental laws and phenomena of mechanics, heat, wave motion, and sound, including relativistic concepts.</p>
            </div>

            <br />

            <h3>Relevant Past Courses</h3>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 1: Introduction to Programming and Computation</p>
              <p className="description">
                This course introduces computational concepts that are fundamental to computer science and are useful for the sciences,
                social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data,
                process text, draw graphics, manipulate images, and simulate physical systems.
                Problem decomposition, program efficiency, and good programming style are emphasized throughout the course.
                No prior programming experience is assumed.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 10: Problem Solving via Object-Oriented Programming</p>
              <p className="description">
                Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving
                computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems),
                data structures (how to efficiently organize data), and algorithms (procedures for solving problems).
                Laboratory assignments are implemented using object-oriented programming techniques.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 11: Foundations of Applied Computer Science</p>
              <p className="description">
                This course introduces core computational and mathematical techniques for data analysis and physical modeling,
                foundational to applications including computational biology, computer vision, graphics, machine learning, and robotics.
                The approaches covered include modeling and optimizing both linear and nonlinear systems, representing and computing with uncertainty,
                analyzing multi-dimensional data, and sampling from complex domains. The techniques are both grounded in mathematical principles and
                practically applied to problems from a broad range of areas.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 30: Discrete Mathematics in Computer Science</p>
              <p className="description">
                This course integrates discrete mathematics with algorithms and data structures, using computer science applications to motivate the mathematics.
                It covers logic and proof techniques, induction, set theory, counting, asymptotics, discrete probability, graphs, and trees.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 31: Algorithms</p>
              <p className="description">
                A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, lower bounds, dynamic programming,
                greedy algorithms, amortized analysis, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity
                and proofs of correctness, are all emphasized.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 52: Full-Stack Web Development <span className="citation">*</span></p>
              <p className="description">
                The Web is a powerful delivery tool for complex real-time applications.
                This is an introduction to full stack Web application development — the approach of integrating numerous techniques and technologies to build modern Web applications.
                Topics include: static pages, Internet protocols, layout, markup, event-driven asynchronous programming, deployment, security, scalability, and user experience.
                Projects include building real-time Web applications with front-end UIs and server-side APIs.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">CS 74: Machine Learning and Statistical Data Analysis</p>
              <p className="description">
                This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and
                unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide
                variety of data sets will be described.
              </p>
            </div>

            <br />

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">ECON 1: The Price System: Analysis, Problems, and Policies</p>
              <p className="description">
                Emphasis will be placed on problems and policies of current interest as they relate to resource use and the distribution of income and
                output. Students will receive an introduction to the theory of supply and demand in both product and factor markets in order to examine
                selected topics drawn from such areas as industrial organization and antitrust policy, labor economics, international trade, economic
                development, agriculture, urban problems, poverty and discrimination, public sector economics, and environmental problems.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">ECON 20: Econometrics</p>
              <p className="description">
                Econometrics is the statistical analysis of economic data.
                This course focuses on regression analysis (specification, estimation, and hypothesis testing) and problems and pitfalls in its application in economics.
                The course involves extensive use of the statistical program STATA and will enable students to implement their own empirical research projects
                in preparation for the culminating experience in the economics major.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">GOVT 10: Quantitative Political Analysis</p>
              <p className="description">
                This course will provide students with useful tools for undertaking empirical research in political science and will help them to
                become informed consumers of quantitative political analysis. The course will first consider the general theoretical concepts underlying
                empirical research, including the nature of causality, the structure and content of theories, and the formulation and testing of
                competing hypotheses. The course will then employ these concepts to develop several quantitative approaches to political analysis.
                Students will be introduced to two statistical methods frequently used by political scientists, contingency tables and linear regression.
                By learning to systematically analyze political data, students will gain the ability to better conduct and evaluate empirical research
                in both its quantitative and qualitative forms.
              </p>
            </div>

            <div className="course-dropdown" onClick={this.handleTitleClick}>
              <p className="title">GOVT 7.3: Media and Politics <span className="citation">*</span></p>
              <p className="description">
                The variety of media sources covering politics has expanded substantially in recent years: online-only news, satire-based news,
                social media forums such as blogs, and other types of “new media” now exist alongside more traditional media sources such as
                newspapers and television news hours. In this seminar, we will explore how the media influences the nature of politics and political
                knowledge in the United States. Some of the questions we will examine include: How does the rise of new media affect the public’s
                understanding of politics? Are market forces pushing media outlets away from objective, in-depth, fact-based political reporting?
                How prevalent is partisan bias in the news media? How do journalists and politicians vie for control of the news?
                How powerful can the media be in anointing (or destroying) candidates? Students who are devoted to improving their paper-writing
                abilities are encouraged to take this class, as we will spend about half of our classroom time discussing the media and about half of
                our time discussing writing and associated seminar abilities. Students will write and revise two 5-6 page analytical papers during the
                term; additionally, a class-produced blog about the media and politics will give us the opportunity to contrast formal and informal
                genres of writing and argumentation.
              </p>
            </div>
            <div id="citation-explanation">
              <p><span className="citation">*</span> indicates a merit citation</p>
            </div>
          </Bounce>
        </div>
      );
    }
}

export default Classes;
