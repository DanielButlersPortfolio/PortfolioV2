import React from 'react';
import SkillCard from './SkillCard.jsx';
import SkillPoints from './SkillPoints.jsx';
import data from '../Data/SkillsData';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col, Modal, Image, ListGroup } from 'react-bootstrap';

export default function Skills(props) {
  // generate all skill cards
  let skillCards = data.map((skill) => <SkillCard key={skill.id} {...skill} defineModalContentFunction={defineModalContent} toggleShowModalFunction={toggleShowModal}></SkillCard>);

  let [modalOverlay, setModalOverlay] = React.useState(false);
  let [modalContent, setModalContent] = React.useState(data[0]);
  let [skillImages, setSkillImages] = React.useState([]);
  let [CardsInCarouselSlide, setCardsInCarouselSlide] = React.useState(3);
  let i = 0;
  let keyInt = 1;
  let tempCarouselCardHolder = [];
  let carouselCardItems = [];

  React.useEffect(() => {
    if (props.windowWidth > 1500) {
      setCardsInCarouselSlide(3);
    }
    if (props.windowWidth < 1500) {
      setCardsInCarouselSlide(2);
    }
    if (props.windowWidth < 1000) {
      setCardsInCarouselSlide(1);
    }
  }, [props.windowWidth]);

  // split cards into groups of 3
  skillCards.forEach((skillCard) => {
    tempCarouselCardHolder.push(
      <Col key={String(keyInt)} xs={12 / CardsInCarouselSlide} className='h-100'>
        {skillCard}
      </Col>
    );
    skillCard = null;
    i++;

    // once we have a group of 3 make a slide
    if (i == CardsInCarouselSlide) {
      i = 0;
      carouselCardItems.push(
        <Carousel.Item key={String(keyInt)} className='carouselItem'>
          <Row key={String(keyInt)}>{tempCarouselCardHolder}</Row>
        </Carousel.Item>
      );
      tempCarouselCardHolder = [];
    }
    keyInt++;
  });

  // if any cards remain make a smaller slide
  if (tempCarouselCardHolder.length != 0) {
    carouselCardItems.push(
      <Carousel.Item key={String(keyInt)} className='carouselItem'>
        {tempCarouselCardHolder}
      </Carousel.Item>
    );
  }

  function defineModalContent(ModalContent, SkillImgs) {
    setModalContent(ModalContent);
    setSkillImages(SkillImgs);
  }

  function toggleShowModal() {
    if (modalOverlay) {
      setModalOverlay(false);
    } else {
      setModalOverlay(true);
    }
  }

  return (
    <section className='section-skills pt-7 mt-0 bg-light' id='skills'>
      <Modal show={modalOverlay} onHide={toggleShowModal} size='lg'>
        <Modal.Header closeButton style={{ zIndex: 1 }} className='border-bottom border-secondary'>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ zIndex: 1 }}>
          {modalContent.modal.introduction && <p className='text-dark'>{modalContent.modal.introduction}</p>}
          {modalContent.modal.subheading1 && <h3 className='modal-subheading text-dark fs-4 fw-bold mt-2'>{modalContent.modal.subheading1}</h3>}
          {modalContent.modal.text1 && <p className='modal-text text-dark mt-1'>{modalContent.modal.text1}</p>}
          {modalContent.modal.subheading2 && <h3 className='modal-subheading text-dark fs-4 fw-bold'>{modalContent.modal.subheading2}</h3>}
          {modalContent.modal.text2 && <p className='modal-text text-dark'>{modalContent.modal.text2}</p>}
          {modalContent.modal.img && (
            <div className='modal-img-div mb-4'>
              <Image src={modalContent.modal.img} className='modal-img shadow' alt={modalContent.modal.imgAlt} />
            </div>
          )}
          {modalContent.coveredPoints && <h3 className='text-dark fs-4 fw-bold'>Content Covered for this skill</h3>}
          <div className='modal-covered-points-div'>{modalContent.modal.coveredPoints && <SkillPoints ListOfPoints={modalContent.modal.coveredPoints} windowWidth={props.windowWidth} />}</div>
        </Modal.Body>

        <Modal.Footer style={{ zIndex: 1 }} className='d-flex justify-content-between border-top border-secondary'>
          <div className='modal-footer-left'>
            <p className='text-dark mb-1 fw-bold'>Experience compared to the skill I’m best at: </p>
            <div className='skillLevel-Div d-flex justify-content-start'>{skillImages}</div>
          </div>

          <div className='modal-footer-right'>
            {modalContent.linkName && (
              <a href={modalContent.modal.link} target='_blank'>
                {modalContent.modal.linkName}
              </a>
            )}
          </div>
        </Modal.Footer>

        {modalOverlay && <Image src={modalContent.logo} className='modalBgImage' />}
      </Modal>
      <h2 className='skills-subheading subheading fs-6 mb-3 d-flex justify-content-center'>SKILLS</h2>
      <h1 className='skills-heading fs-1 fw-bold m-0 d-flex justify-content-center text-center'>What I can do at the moment</h1>
      <Carousel
        className='skills-cards-carousel'
        variant='dark'
        interval={modalOverlay ? null : 5000}
        controls={CardsInCarouselSlide > 1 ? true : false}
        touch={CardsInCarouselSlide > 1 ? false : true}>
        {carouselCardItems}
      </Carousel>
    </section>
  );
}
