import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';

export default function Footer(props) {
  return (
    <footer className='bg-light border-top d-flex flex-row footer' id='footer'>
      {props.windowWidth > 700 && (
        <>
          <div className='d-flex justify-content-center h-100  p-2'>
            <p className='d-flex justify-content-center flex-column copyright fs-6 m-0'>
              Copyright &copy; {new Date().getFullYear()} by me, Inc.
              <br />
              All rights reserved
            </p>
          </div>
        </>
      )}
      <div className={props.windowWidth > 700 ? 'p-2 ml-auto d-flex justify-content-space h-100' : 'd-flex justify-content-around w-100'}>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='mailto:d.butler13@outlook.com'>
            <Image src='./footer/mail-outline.svg' className='footer-btn-img h-100' alt='image of mail Icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='https://www.linkedin.com/in/danielbutlerismyname' target='_blank'>
            <Image src='./footer/logo-linkedin.svg' className='footer-btn-img h-100' alt='image of linkedin icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='https://github.com/DanielButlersPortfolio' target='_blank'>
            <Image src='./footer/logo-github.svg' className='footer-btn-img h-100' alt='image of GitHub icon' />
          </a>
        </Button>
        <Button variant='none' className='h-100 p-1 w-100'>
          <a href='#top'>
            <Image src='./footer/chevron-up-outline.svg' className='footer-btn-img footer-btn-img-up h-100' alt='arrow up' />
          </a>
        </Button>
      </div>
    </footer>
  );
}
