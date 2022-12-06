import React from 'react';
import { darkModeContext, screenWithContext, HeroContentContext } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

// const apiPath = React.useContext(apiPathContext);
// import data from '../Data/Hero';
export default function Hero() {
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  let data = React.useContext(HeroContentContext);


  let height = window.innerHeight - 67.5 + 'px';
  let heroStyles = {
    height: height,
  };
  function openLink() {
    window.location = window.location.origin + '#skills';
  }
  return (
    <section className={(windowWidth > 850 ? ' m-5 ' : 'm-3') + ' mt-0 mb-0 section-hero'} id='me' style={heroStyles}>
      <div className='hero-text-div'>
        <h1 className={'hero-title fw-bold display-3' + (windowWidth < 850 && ' text-center') + (windowWidth < 850 && darkMode && ' text-light')}>{data.title}</h1>
        <p className={'hero-text lh-base fs-4 text' + (windowWidth < 850 && ' text-center') + (windowWidth < 850 && darkMode && ' text-light')}>
          {data.text1}
          <br />
          {data.text2}
        </p>
      </div>
      <div className='hero-arrow-up'>
        <Image className='hero-arrow-up-ico' src='./hero/up.svg' onClick={openLink} alt='skip to skills section button' />
      </div>
    </section>
  );
}
