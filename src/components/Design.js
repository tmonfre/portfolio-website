import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import ImgurEmbed from 'react-imgur-embed';
import '../styles/Design.css';

class Design extends Component {
    render() {
        return(
            <div id="design">
                <div className="design-samples">
                    <div className="left">
                        <h2>Relevant Radio Internship</h2>
                        <p>In the summer of 2017, I held a part-time internship with Relevant Radio. As a part of this experience, I designed announcements and graphics for the Morning Air program.</p>
                        <em><p>Click through the images in the album below.</p></em>
                        <ImgurEmbed id="a/2UC4xpr" />
                    </div>

                    <div className="right">
                        <h2>Quality Insulators Website</h2>
                        <p>In the summer of 2017, I was the Technology Development intern at Quality Insulators. Part of my role included the design and maintenance of the company website.</p>
                        <em><p>Navigate to <a href="http://www.qualityinsulators.com/" target="_blank">the following link</a> to view this live website.</p></em>
                        <ImgurEmbed id="a/v3dDvAQ" />
                    </div>

                    <div style={{clear:"both"}}></div>

                    <div className="left">
                        <h2>Snapchat Filters</h2>
                        <p>Throughout my life, I’ve created several Snapchat filters for events, including my high school graduation, prom, and a local concert. I’ve also published community filters for prominent locations in my area. Below are two examples I've created.</p>
                        <em><p>Click through the images in the album below.</p></em>
                        <ImgurEmbed id="a/mOOruET" />
                    </div>

                    <div className="right">
                        <h2>DECA Marketing Campaign</h2>
                        <p>My senior year of high school, I was put in charge of co-directing the annual Mr. Bay Port Guy Pageant. In addition to planning this event, I designed all of the marketing materials. Below are presentation boards and logo designs from the project. </p>
                        <em><p>Click through the images in the album below.</p></em>
                        <ImgurEmbed id="a/GZeC7o8" />
                        <ImgurEmbed id="a/NRiGURH" />
                    </div>

                    <div style={{clear:"both"}}></div>

                </div>
                <div id="more-info">
                    <h3 id="last">Please <a href="mailto:thomas.a.monfre.21@dartmouth.edu">contact me</a> for additional design samples.</h3>
                </div>
            </div>
        )
    }
}

export default Design
