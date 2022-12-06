import React from 'react';
import { darkModeContext } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

export default function Loading() {
  const { darkMode } = React.useContext(darkModeContext);
  return (
    <div className={'loading-div ' + (darkMode ? ' bg-dark' : '  bg-light')}>
      <Image className='loading-img' src='../loading.svg' alt='loading' />
    </div>
  );
}
