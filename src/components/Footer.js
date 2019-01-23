import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
    render() {
        return(
            <div>
                <div id="footer-bar"></div>
                <div id="footer">
                    <div className="container">
                        <div id="footer-images">
                            <a href="https://www.linkedin.com/in/thomas-monfre" target="_blank" rel="noopener noreferrer"><img id="linkedin" src={require("../assets/footer/linkedin_logo.png")} alt="My LinkedIn account" width="250" height="68"></img></a>
                            <a href="https://github.com/tmonfre" target="_blank" rel="noopener noreferrer"><img id="github" src={require("../assets/footer/github_logo.png")} alt="My GitHub account" width="211" height="55"></img></a>
                        </div>
                        <div style={{clear:"both"}}></div>
                        <p>Click the images above to navigate to my LinkedIn and GitHub profiles.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
