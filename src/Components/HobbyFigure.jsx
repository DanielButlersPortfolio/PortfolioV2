import React from 'react';
import { darkModeContext, screenWithContext } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure, Image } from 'react-bootstrap';

export default function HobbyFigure(props) {
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  return (
    <Figure className='p-3 pb-4'>
      <div className='hobbies-figure'>
        {windowWidth < 1460 && <Figure.Image alt={props.imageAltText} src={props.image} rounded={true} className='figure-img' />}
        <Figure.Caption className={'secondary hobbies-figure-title ' + (darkMode && ' text-light')}>
          <Image src={props.icon} alt={props.iconAlt} className='hobby-figure-icon' />
          {props.title}
        </Figure.Caption>
        <Figure.Caption className={'hobbies-figure-text' + (darkMode ? ' text-light' : ' text-dark')}>{props.text}</Figure.Caption>
      </div>
    </Figure>
  );
}
