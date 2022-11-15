import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SkillCard(props) {
  function getDot(dotIndex) {
    let level = props.level;

    if (level == dotIndex - 0.5) {
      return 'half';
    }
    if (level >= dotIndex) {
      return 'full';
    }
    if (level < dotIndex) {
      return 'empty';
    }
  }

  let skillLevelImages = [];

  for (let index = 1; index <= 10; index++) {
    skillLevelImages.push(<Image key={index.toString()} src={`./square/${getDot(index)}.svg`} alt='skill dot' />);
  }

  return (
    <Card
      key={'card' + props.id}
      onClick={() => {
        props.defineModalContentFunction(props, skillLevelImages);
        props.toggleShowModalFunction();
      }}
      className='pe-auto card'>
      <Card.Img variant='top' src={props.logo ? props.logo : './Icons/code-outline.svg'} data-toggle='modal' data-target='#exampleModal' alt={props.logoAlt} />
      <Card.Body className='d-flex flex-column justify-content-start '>
        <Card.Title>{props.title}</Card.Title>
        <OverlayTrigger placement='left' overlay={<Tooltip>Experience compared to the skill I’m best at!</Tooltip>}>
          <div className='skillLevel-Div d-flex justify-content-start mb-1'>{skillLevelImages}</div>
        </OverlayTrigger>
        <Card.Text className='lh-2'>{props.cardText}</Card.Text>

        {/* not Card.link otherwise the entire el would be the link and I only want the text to be the link */}
        <Card.Text style={{ zIndex: 3 }} className='mt-auto d-inline'>
          <a href={props.link} target='_blank'>
            {props.linkName}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
