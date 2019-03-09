import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/Home.css';
var $ = require('jquery');

class Home extends Component {
    constructor(props) {
        super(props)
        this.boxLiveCount = 0;
        this.contentPreviewArea = React.createRef();
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    render() {
        return(
            <div>
                <div id="about-me-preview">
                    <div id="circle">
                        <Link to="/aboutme">
                            <img src={require("../assets/index/profile_photo.png")} alt="Photo of me" height="300" width="300"></img>
                        </Link>
                    </div>
                    <div id="about-me-text">
                        <p>Sophomore at Dartmouth College studying Computer Science and Quantitative Social Science.</p><br></br>
                        <p>I have experience in web development, data visualization, and workflow/process optimization. My interests include leveraging the power of technology to solve meaningful problems and the impact of data analytics on daily life. I'm currently seeking web/software development internship opportunities for Fall 2019.</p><br></br>
                        <p>Read more about me <strong><Link to="/aboutme">here</Link></strong> or download my full resume <strong><a href="https://drive.google.com/file/d/1uJMslqlzKiLzVONBaDUXBOwHZExmRiDE/view?usp=sharing">here.</a></strong></p>
                    </div>
                </div>

                <div id="content-preview-area" ref={this.contentPreviewArea}>
                    <Link to="/aboutme">
                        <div className="preview-box about-me-text" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <center>
                                <p>About Me</p>
                                <ul>
                                    <Link to="/aboutme"><li>Work Experience</li></Link>
                                    <Link to="/aboutme"><li>Skills & Abilities</li></Link>
                                </ul>
                            </center>
                        </div>
                    </Link>

                    <Link to="/projects">
                        <div className="preview-box projects-box" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <center>
                                <p>Projects</p>
                                <ul>
                                    <Link to="/projects"><li>Development</li></Link>
                                    <Link to="/design"><li>Design</li></Link>
                                </ul>
                            </center>
                        </div>
                    </Link>

                    <a href='mailto:thomas.a.monfre.21@dartmouth.edu'>
                        <div className="preview-box contact-me-box" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <center>
                                <p>Contact Me</p>
                                <ul>
                                    <li><em>Please click here to send me an email.</em></li>
                                </ul>
                            </center>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    handleMouseEnter(event) {
        // handle timeout
        clearTimeout($(event.currentTarget).data('timeoutId'));

        // update box visuals
        $(event.currentTarget).addClass('hoverBox');
        $(event.currentTarget).find('ul').slideDown(600);
        $(event.currentTarget).find('p').css({'font-weight':'bold'})

        // update height of spanning area
        var height = this.contentPreviewArea.current.style.height;
        this.contentPreviewArea.current.style.height = height + 60;

        // add another box to the live count if we haven't already hit three (avoids too many adds on user occilation)
        if (this.boxLiveCount < 3) {
            this.boxLiveCount += 1;
        }
        if (!event.currentTarget.classList.contains("hover")) {
            event.currentTarget.classList.add("hover");
        }
    }

    handleMouseLeave(event) {
        var target = event.currentTarget;
        event.currentTarget.classList.remove("hover");

        // handle timeout
        var timeoutId = setTimeout(() => {
            // so long as the user's mouse isn't over the current target after the timeout
            // TODO: fix this
            if (!target.classList.contains("hover")) {

                // update box visuals
                $(target).removeClass('hoverBox');
                $(target).find('ul').slideUp(600);
                $(target).find('p').css({'font-weight':'normal'});

                // update height of spanning area
                if (this.contentPreviewArea.current != null) {
                    var height = this.contentPreviewArea.current.style.height;
                    this.contentPreviewArea.current.style.height = height - 60;
                }

                // set one less box active
                if (this.boxLiveCount != null) {
                    this.boxLiveCount -= 1;
                }
            }
        }, 750); // 750 sets a box to wait 0.75 sec after mouse leaves until roll up
    }
}

export default Home
