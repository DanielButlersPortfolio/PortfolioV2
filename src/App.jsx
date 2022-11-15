import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './css/style.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

export default function App() {
  const [windowWidth, setWindowWith] = React.useState(window.innerWidth);
  let appPadding = windowWidth > 850 ? '67.5px 0 0 0' : '67.5px 0 0 0';
  let mainStyle = {
    padding: appPadding,
  };

  window.addEventListener('resize', () => {
    setTimeout(() => {
      setWindowWith(window.innerWidth);
    }, 250);
  });
  return (
    <>
      <NavBar windowWidth={windowWidth} />
      <Container className='main m-0' style={mainStyle} fluid>
        <Hero
          title="Hi I'm Daniel"
          text1='With passion I started coding a few years ago, now I’m on my way to become a software developer. I’ve learned the basics of front and back-end development.'
          text2='. . . and I’m expanding my knowledge every day.'
          windowWidth={windowWidth}
        />
        <Skills windowWidth={windowWidth} />
        <Hobbies windowWidth={windowWidth} />
        <ContactForm windowWidth={windowWidth} />
        <Footer windowWidth={windowWidth} />
      </Container>
    </>
  );
}
