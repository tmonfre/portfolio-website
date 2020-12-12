import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Fade from 'react-reveal/Fade';

import './style.scss';
import photos from '../../assets/home/photo-gallery';

const profileImage = require('../../assets/home/profile_photo.png');

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (_, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Fade>
        <div id="about-me-preview">
          <div id="circle">
            <Link to="/about">
              <img src={profileImage} alt="me" height="300" width="300" />
            </Link>
          </div>
          <div id="about-me-text">
            <p>
              Senior at Dartmouth College studying Computer Science + Quantitative Social Science. Former intern
              at <a href="https://www.disneystreaming.com/" target="_blank" rel="noopener noreferrer">Disney Streaming Services</a>,
              and Full-Stack Software Engineer at the <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">DALI Lab.</a>
            </p>
            <br />
            <p>
              Have experience in full stack web development, mobile development, and software engineering.
              Self-motivated, driven to succeed, and excited about leveraging the power of technology to solve meaningful problems.
            </p>
            <br />
            <p>Read more about me <Link to="/about">here</Link> or download my full resume <a href="http://tiny.cc/thomas-monfre-resume">here.</a></p>
          </div>
        </div>

        <div id="photo-gallery">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
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
      </Fade>
    </div>
  );
};

export default Home;
