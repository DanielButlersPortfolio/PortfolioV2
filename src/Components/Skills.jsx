import React from 'react';
import { darkModeContext, screenWithContext, SkillsContentContext } from '../Context';

import SkillCard from './SkillCard.jsx';
import SkillPoints from './SkillPoints.jsx';
// import data from '../Data/SkillsData';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col, Modal, Image } from 'react-bootstrap';

export default function Skills() {
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  const data = React.useContext(SkillsContentContext);

  let [modalOverlay, setModalOverlay] = React.useState(false);
  let [modalContent, setModalContent] = React.useState(data[0]);
  let [skillImages, setSkillImages] = React.useState([]);
  let [CardsInCarouselSlide, setCardsInCarouselSlide] = React.useState(3);

  let i = 0;
  let keyInt = 1;
  let tempCarouselCardHolder = [];
  let carouselCardItems = [];

  // generate all skill cards
  let skillCards = data.map((skill) => <SkillCard key={skill.id} {...skill} defineModalContentFunction={defineModalContent} toggleShowModalFunction={toggleShowModal}></SkillCard>);

  React.useEffect(() => {
    if (windowWidth > 1500) {
      setCardsInCarouselSlide(3);
    }
    if (windowWidth < 1500) {
      setCardsInCarouselSlide(2);
    }
    if (windowWidth < 1000) {
      setCardsInCarouselSlide(1);
    }
  }, [windowWidth]);

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
    <section className={'section-skills pt-7 mt-0' + (darkMode ? ' bg-dark' : '  bg-light')} id='skills'>
      <Modal show={modalOverlay} onHide={toggleShowModal} size='lg'>
        <Modal.Header closeButton style={{ zIndex: 1 }} className={'border-bottom border-secondary ' + (darkMode ? ' bg-dark' : '  bg-light')}>
          <Modal.Title className={darkMode ? ' text-light' : ' text-dark'}>{modalContent.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ zIndex: 1 }} className={darkMode ? ' bg-dark' : '  bg-light'}>
          {modalContent.introduction && <p className={darkMode ? ' text-light' : ' text-dark'}>{modalContent.introduction}</p>}
          {modalContent.subheading1 && <h3 className={'modal-subheading  fs-4 fw-bold mt-2' + (darkMode ? ' text-light' : ' text-dark')}>{modalContent.subheading1}</h3>}
          {modalContent.text1 && <p className={'modal-text  mt-1' + (darkMode ? ' text-light' : ' text-dark')}>{modalContent.text1}</p>}
          {modalContent.subheading2 && <h3 className={'modal-subheading  fs-4 fw-bold' + (darkMode ? ' text-light' : ' text-dark')}>{modalContent.subheading2}</h3>}
          {modalContent.text2 && <p className={'modal-text ' + (darkMode ? ' text-light' : ' text-dark')}>{modalContent.text2}</p>}
          {modalContent.img && (
            <div className='modal-img-div mb-4'>
              <Image src={modalContent.img} className='modal-img shadow' alt={modalContent.imgAlt} />
            </div>
          )}
          {modalContent.coveredPoints && <h3 className={' fs-4 fw-bold' + (darkMode ? ' text-light' : ' text-dark')}>Content Covered for this skill</h3>}
          <div className='modal-covered-points-div'>{modalContent.coveredPoints && <SkillPoints coveredPoints={modalContent.coveredPoints} />}</div>
        </Modal.Body>

        <Modal.Footer style={{ zIndex: 1 }} className={'d-flex justify-content-between border-top border-secondary ' + (darkMode ? ' bg-dark' : '  bg-light')}>
          <div className='modal-footer-left'>
            <p className={' mb-1 fw-bold' + (darkMode ? ' text-light' : ' text-dark')}>Experience compared to the skill I’m best at: </p>
            <div className='skillLevel-Div d-flex justify-content-start'>{skillImages}</div>
          </div>

          <div className='modal-footer-right'>
            {modalContent.modalLinkName && (
              <a href={modalContent.modalLink} target='_blank'>
                {modalContent.modalLinkName}
              </a>
            )}
          </div>
        </Modal.Footer>

        {modalOverlay && <Image src={darkMode ? modalContent.logoDark : modalContent.logoBlack} className='modalBgImage' alt={modalContent.logoAlt} />}
      </Modal>
      <h2 className='skills-subheading subheading fs-6 mb-3 d-flex justify-content-center'>SKILLS</h2>
      <h1 className={'skills-heading fs-1 fw-bold m-0 d-flex justify-content-center text-center' + (darkMode ? ' text-light' : ' text-dark')}>What I can do at the moment</h1>
      <Carousel
        className='skills-cards-carousel'
        variant={darkMode ? 'light' : 'dark'}
        interval={modalOverlay ? null : 5000}
        controls={CardsInCarouselSlide > 1 ? true : false}
        touch={CardsInCarouselSlide > 1 ? false : true}>
        {carouselCardItems}
      </Carousel>
    </section>
  );
}
