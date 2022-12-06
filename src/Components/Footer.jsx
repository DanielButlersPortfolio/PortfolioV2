import React from 'react';
import { darkModeContext, screenWithContext } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';

export default function Footer() {
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  return (
    <footer className={'border-top d-flex flex-row footer ' + (darkMode ? ' bg-dark' : ' bg-light')} id='footer'>
      {windowWidth > 700 && (
        <>
          <div className='d-flex justify-content-center h-100  p-2'>
            <p className={'d-flex justify-content-center flex-column copyright fs-6 m-0 ' + (darkMode && ' text-light')}>
              Copyright &copy; {new Date().getFullYear()} by me, Inc.
              <br />
              All rights reserved
            </p>
          </div>
        </>
      )}
      <div className={windowWidth > 700 ? 'p-2 ml-auto d-flex justify-content-space h-100' : 'd-flex justify-content-around w-100'}>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='mailto:d.butler13@outlook.com'>
            <Image src={'./footer/' + (darkMode ? 'blue' : 'black') + '/mail-outline.svg'} className='footer-btn-img h-100' alt='image of mail Icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='https://www.linkedin.com/in/danielbutlerismyname' target='_blank'>
            <Image src={'./footer/' + (darkMode ? 'blue' : 'black') + '/logo-linkedin.svg'} className='footer-btn-img h-100' alt='image of linkedin icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='https://github.com/DanielButlersPortfolio' target='_blank'>
            <Image src={'./footer/' + (darkMode ? 'blue' : 'black') + '/logo-github.svg'} className='footer-btn-img h-100' alt='image of GitHub Icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='#top'>
            <Image src={'./footer/' + (darkMode ? 'blue' : 'black') + '/chevron-up-outline.svg'} className='footer-btn-img footer-btn-img-up h-100' alt='arrow up' />
          </a>
        </Button>
      </div>
    </footer>
  );
}
