import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

export default function HobbyImageRow(props) {
  return (
    <Row xs={12}>
      <Col xs={4} className='p-2 hobby-img'>
        <Image
          src={props.hobby1.image}
          alt={props.hobby1.imageAltText}
          fluid
          rounded={true}
          onClick={() => {
            props.setActiveImageFunction(props.hobby1.image);
          }}
        />
      </Col>
      <Col xs={4} className='p-2 hobby-img'>
        <Image
          src={props.hobby2.image}
          alt={props.hobby2.imageAltText}
          fluid
          rounded={true}
          onClick={() => {
            props.setActiveImageFunction(props.hobby2.image);
          }}
        />
      </Col>
      <Col xs={4} className='p-2 hobby-img'>
        <Image
          src={props.hobby3.image}
          alt={props.hobby3.imageAltText}
          fluid
          rounded={true}
          onClick={() => {
            props.setActiveImageFunction(props.hobby3.image);
          }}
        />
      </Col>
    </Row>
  );
}
