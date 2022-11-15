import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure, Row, Col } from 'react-bootstrap';

export default function HobbyFigure(props) {
  return (
    <Figure className='p-3 pb-4'>
      <div className='hobbies-figure'>
        {props.windowWidth < 1460 && <Figure.Image alt={props.imageAltText} src={props.image} rounded={true} className='figure-img' />}
        <Figure.Caption className='secondary hobbies-figure-title'>{props.title}</Figure.Caption>
        <Figure.Caption className='text-dark hobbies-figure-text'>{props.text}</Figure.Caption>
      </div>
    </Figure>
  );
}
