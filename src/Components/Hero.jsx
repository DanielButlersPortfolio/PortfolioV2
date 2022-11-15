import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

export default function Hero(props) {
  let height = window.innerHeight - 67.5 + 'px';
  let heroStyles = {
    height: height,
  };
  function openLink() {
    window.location = window.location.origin + '#skills';
  }
  return (
    <section className={(props.windowWidth > 850 ? ' m-5 ' : 'm-3') + 'mt-0 mb-0 section-hero'} id='me' style={heroStyles}>
      <div className='hero-text-div'>
        <h1 className={'hero-title fw-bold display-3' + (props.windowWidth < 850 && ' text-center')}>{props.title}</h1>
        <p className={'hero-text lh-base fs-4 text' + (props.windowWidth < 850 && ' text-center')}>
          {props.text1}
          <br />
          {props.text2}
        </p>
      </div>
      <div className='hero-arrow-up'>
        <Image className='hero-arrow-up-ico' src='./hero/up.svg' onClick={openLink} />
      </div>
    </section>
  );
}
