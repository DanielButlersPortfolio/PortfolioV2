import React from 'react';
import { darkModeContext, screenWithContext, HobbiesIMGContentContext, HobbyCategoriesContentContext } from '../Context';

import HobbyImageRow from './HobbyImageRow';
import HobbyFigure from './HobbyFigure';

// import hobbiesData from '../Data/hobbiesData';
// import hobbiesIMGData from '../Data/hobbiesIMGData';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

export default function Hobbies() {
  let [activeImg, setActiveImg] = React.useState(null);
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  const hobbiesIMGData = React.useContext(HobbiesIMGContentContext);
  const hobbiesData = React.useContext(HobbyCategoriesContentContext);

  let HobbyImageRowElements = [];

  for (let index = 0; index < hobbiesIMGData.length; index = index + 3) {
    if (hobbiesIMGData[index] && hobbiesIMGData[index + 1] && hobbiesIMGData[index + 2]) {
      HobbyImageRowElements.push(
        <HobbyImageRow key={index} hobby1={hobbiesIMGData[index]} hobby2={hobbiesIMGData[index + 1]} hobby3={hobbiesIMGData[index + 2]} setActiveImageFunction={toggleActiveImg} />
      );
    } else {
      break;
    }
  }

  function toggleActiveImg(img) {
    if (activeImg) {
      setActiveImg(null);
    } else {
      setActiveImg(img);
    }
  }
  function zoom() {
    setTimeout(() => {
      document.querySelector('.hobby-active-Image').style.height = '85%';
    }, 25);
    setTimeout(() => {
      document.querySelector('.hobbies-close-active-img-logo').style.display = 'flex';
    }, 525);
    return;
  }
  return (
    <section className={'section-hobbies mt-0 m-3' + (windowWidth < 850 ? ' p-0 mt-5 pb-5' : ' p-5')} id='hobbies'>
      <Row className='section-hobbies-grid'>
        <Col xs={windowWidth > 1500 ? 6 : 12} className='d-flex flex-column justify-content-center'>
          <Row xs={12}>
            <h2 className={'hobbies-subheading subheading fs-6 mb-3 d-flex justify-content-flex-start' + (windowWidth < 850 ? ' m-3 mt-5' : ' m-3')}>HOBBIES</h2>
            <h1 className={'hobbies-heading fs-1 fw-bold mt-0 d-flex justify-content-flex-start' + (windowWidth < 850 ? ' m-3 mb-5' : ' m-3 mb-4') + (darkMode && ' text-light')}>
              {windowWidth > 850 ? 'What I like doing in my free time' : 'Free time'}
            </h1>
          </Row>
          <Row>
            <Row>
              <Col xs={windowWidth > 850 ? 6 : 12}>
                <HobbyFigure key='1' {...hobbiesData[0]} windowWidth={windowWidth} darkMode={darkMode} />
              </Col>
              <Col xs={windowWidth > 850 ? 6 : 12}>
                <HobbyFigure key='4' {...hobbiesData[3]} windowWidth={windowWidth} darkMode={darkMode} />
              </Col>
            </Row>
            <Row>
              <Col xs={windowWidth > 850 ? 6 : 12}>
                <HobbyFigure key='3' {...hobbiesData[2]} windowWidth={windowWidth} darkMode={darkMode} />
              </Col>
              <Col xs={windowWidth > 850 ? 6 : 12}>
                <HobbyFigure key='2' {...hobbiesData[1]} windowWidth={windowWidth} darkMode={darkMode} />
              </Col>
            </Row>
          </Row>
        </Col>
        {windowWidth > 1460 && (
          <Col xs={6} className='p-5 hobby-picture-gird'>
            {activeImg && (
              <>
                <Image src={activeImg} className='hobby-active-Image' onClick={toggleActiveImg} rounded />
                <Image src='./hobbies/close-hobby.svg' className='hobbies-close-active-img-logo p-4' onClick={toggleActiveImg} style={{ display: 'none' }} />
              </>
            )}
            {activeImg && zoom()}
            {HobbyImageRowElements}
          </Col>
        )}
      </Row>
    </section>
  );
}
