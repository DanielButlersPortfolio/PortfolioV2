import React from 'react';

import NavItem from './NavItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';

export default function NavBar(props) {
  const [mobNav, setMobNav] = React.useState('nav');

  function toggleMobNav() {
    if (mobNav == 'nav') {
      setMobNav('close');
    } else {
      setMobNav('nav');
    }
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
      <Navbar bg='white' variant='light' fixed='top' className='main-nav-bar shadow-sm' style={{ zIndex: '55' }}>
        <Container fluid className='h-100'>
          <Navbar.Brand href='#top' className='h-100'>
            <Image src='./DANIEL.svg' className='d-inline-block align-center h-100 p-1' alt='Daniel logo' />
          </Navbar.Brand>
          {props.windowWidth > 1000 ? (
            <Nav>
              <NavItem text='ME' link='#top' />
              <NavItem text='SKILLS' link='#skills' />
              <NavItem text='HOBBIES' link='#hobbies' />
              <NavItem text='CONTACT' link='#contact' />
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
