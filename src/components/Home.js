import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Fade from 'react-reveal/Fade';

import '../styles/Home.scss';
import photos from '../assets/home/photo-gallery';

const $ = require('jquery');

function animateScroll(hashLinkID) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`#${hashLinkID}`).offset().top - 225,
  }, 1000);
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxLiveCount: 0,
      currentImage: 0,
      viewerIsOpen: false,
    };

    this.contentPreviewArea = React.createRef();
  }

  componentDidMount() {
    $('.hash-link').on('click', (e) => {
      const hashLinkID = e.target.id.slice(0, -5);
      setTimeout(() => { animateScroll(hashLinkID); }, 500);
    });
  }

  handleMouseEnter = (event) => {
    // handle timeout
    clearTimeout($(event.currentTarget).data('timeoutId'));

    // update box visuals
    $(event.currentTarget).addClass('hoverBox');
    $(event.currentTarget).find('ul').slideDown(600);
    $(event.currentTarget).find('p').css({ 'font-weight': 'bold' });

    // update height of spanning area
    const { height } = this.contentPreviewArea.current.style;
    this.contentPreviewArea.current.style.height = height + 60;

    // add another box to the live count if we haven't already hit three (avoids too many adds on user occilation)
    if (this.state.boxLiveCount < 3) {
      this.state.boxLiveCount += 1;
    }
    if (!event.currentTarget.classList.contains('hover')) {
      event.currentTarget.classList.add('hover');
    }
  }

  handleMouseLeave = (event) => {
    const target = event.currentTarget;
    event.currentTarget.classList.remove('hover');

    // handle timeout
    setTimeout(() => {
      // so long as the user's mouse isn't over the current target after the timeout
      // TODO: fix this
      if (!target.classList.contains('hover')) {
        // update box visuals
        $(target).removeClass('hoverBox');
        $(target).find('ul').slideUp(600);
        $(target).find('p').css({ 'font-weight': 'normal' });

        // update height of spanning area
        if (this.contentPreviewArea.current != null) {
          const { height } = this.contentPreviewArea.current.style;
          this.contentPreviewArea.current.style.height = height - 60;
        }

        // set one less box active
        if (this.state.boxLiveCount != null) {
          this.state.boxLiveCount -= 1;
        }
      }
    }, 750); // 750 sets a box to wait 0.75 sec after mouse leaves until roll up
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      viewerIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false,
    });
  };

  render() {
    return (
      <div>
        <Fade>
          <div id="about-me-preview">
            <div id="circle">
              <Link to="/aboutme">
                <img src={require('../assets/home/profile_photo.png')} alt="me" height="300" width="300" />
              </Link>
            </div>
            <div id="about-me-text">
              <p>
                Junior at Dartmouth College studying Computer Science + Quantitative Social Science. Software Engineering Intern
                at <a href="https://www.disneystreaming.com/" target="_blank" rel="noopener noreferrer">Disney Streaming Services</a>,
                and Full-Stack Software Engineer at the <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">DALI Lab.</a>
              </p>
              <br />
              <p>
                Have experience building full-stack web apps, designing database/server architectures, and creating robust data visualizations.
                Passionate about building end-to-end web and mobile apps that integrate with APIs and cloud computing services. Self-motivated, driven to succeed,
                and excited about leveraging the power of technology to solve meaningful problems.
              </p>
              <br />
              <p>Read more about me <Link to="/aboutme">here</Link> or download my full resume <a href="http://tiny.cc/thomas-monfre-resume">here.</a></p>
            </div>
          </div>

          <div id="photo-gallery">
            <Gallery photos={photos} onClick={this.openLightbox} />
            <ModalGateway>
              {this.state.viewerIsOpen ? (
                <Modal onClose={this.closeLightbox}>
                  <Carousel
                    currentIndex={this.state.currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>

          <div id="content-preview-area" ref={this.contentPreviewArea}>
            <Link to="/aboutme">
              <div className="preview-box about-me-text" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <center>
                  <p>About Me</p>
                  <ul>
                    <Link to="/aboutme" className="hash-link"><li id="work-experience-link">Work Experience</li></Link>
                    <Link to="/aboutme" className="hash-link"><li id="skills-abilities-link">Skills & Abilities</li></Link>
                  </ul>
                </center>
              </div>
            </Link>

            <div className="preview-box projects-box" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <center>
                <Link to="/projects" id="projects-box-header"><p>Projects</p></Link>
                <ul>
                  <Link to="/projects"><li>Samples</li></Link>
                  <a href="https://github.com/tmonfre" target="_blank" rel="noopener noreferrer"><li>GitHub</li></a>
                </ul>
              </center>
            </div>

            <a href="mailto:thomas.a.monfre.21@dartmouth.edu">
              <div className="preview-box contact-me-box" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <center>
                  <p>Contact Me</p>
                  <ul>
                    <li><em>Click here to send me an email</em></li>
                  </ul>
                </center>
              </div>
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}
