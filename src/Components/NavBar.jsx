import React from 'react';
import { darkModeContext, screenWithContext } from '../Context';
import Scrollspy from 'react-scrollspy';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default function NavBar() {
  const [mobNav, setMobNav] = React.useState('nav');
  const { darkMode, setDarkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);

  function toggleMobNav() {
    if (mobNav == 'nav') {
      setMobNav('close');
    } else {
      setMobNav('nav');
    }
  }
  function handleDarkModeChange(event) {
    setDarkMode((mode) => !mode);
  }

  let mobStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    zIndex: '20',
  };
  let mobNavStyles = {
    listStyle: 'none',
  };

  return (
    <>
      {mobNav == 'close' && (
        <div style={mobStyles}>
          <ul style={mobNavStyles} className='h-100 w-100 p-0 d-flex justify-content-center flex-column bg-white'>
            <li className='text-center fs-1 fw-bold m-5' onClick={toggleMobNav}>
              <a href='#top'>
                <p>ME</p>
              </a>
            </li>
            <li className='text-center fs-1 fw-bold m-5' onClick={toggleMobNav}>
              <a href='#skills'>
                <p>SKILLS</p>
              </a>
            </li>
            <li className='text-center fs-1 fw-bold m-5' onClick={toggleMobNav}>
              <a href='#hobbies'>
                <p>HOBBIES</p>
              </a>
            </li>
            <li className='text-center fs-1 fw-bold m-5' onClick={toggleMobNav}>
              <a href='#contact'>
                <p>CONTACT</p>
              </a>
            </li>
          </ul>
        </div>
      )}
      <Navbar bg={darkMode ? 'dark' : 'white'} variant={darkMode ? 'dark' : 'light'} fixed='top' className={'main-nav-bar' + (darkMode ? ' shadow-lg' : ' shadow-sm')} style={{ zIndex: '55' }}>
        <Container fluid className='h-100'>
          <Navbar.Brand href='#top' className='h-100'>
            <Image src='./DANIEL.svg' className='d-inline-block align-center h-100 p-1' alt='Daniel logo' />
          </Navbar.Brand>
          {windowWidth > 1000 ? (
            <Nav id='nav-list'>
              <Scrollspy className='scrollspy m-0 p-0 d-flex' items={['me', 'skills', 'hobbies', 'contact']} currentClassName='navLinkIsActive' componentTag={'div'}>
                <Nav.Item>
                  <Nav.Link active href='#me' className='nav-link fw-bold fs-5'>
                    ME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active href='#skills' className='nav-link fw-bold fs-5'>
                    SKILLS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active href='#hobbies' className='nav-link fw-bold fs-5'>
                    HOBBIES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active href='#contact' className='nav-link fw-bold fs-5'>
                    CONTACT
                  </Nav.Link>
                </Nav.Item>
              </Scrollspy>

              <ToggleButtonGroup type='radio' name='options' defaultValue={darkMode ? 1 : 2} onChange={handleDarkModeChange} className='ml-3 navbar-toggle'>
                <ToggleButton id='navbar-light-btn' className='navbar-btn' value={1} variant={darkMode ? 'dark' : 'light'}>
                  <Image src='./darkMode/moon.svg' className='navbar-dark-btn-icon' alt='moon' />
                </ToggleButton>
                <ToggleButton id='navbar-dark-btn' className='navbar-btn' value={2} variant={darkMode ? 'dark' : 'light'}>
                  <Image src='./darkMode/sun.svg' className='navbar-light-btn-icon' alt='sun' />
                </ToggleButton>
              </ToggleButtonGroup>
            </Nav>
          ) : (
            <Image
              src={'./nav/' + mobNav + '.svg'}
              onClick={toggleMobNav}
              style={{ zIndex: '50', position: 'absolute', top: '0.25rem', right: '0.25rem', height: '4rem' }}
              alt='toggle mobile nav button'
            />
          )}
        </Container>
      </Navbar>
    </>
  );
}
