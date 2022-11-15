import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export default function NavItem(props) {
  return (
    <Nav.Item>
      <Nav.Link href={props.link} className='nav-link fs-5 fw-bold'>
        {props.text}
      </Nav.Link>
    </Nav.Item>
  );
}
