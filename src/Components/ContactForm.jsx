import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert } from 'react-bootstrap';
import sendMailFunction from '../../src/functions/sendMail';

export default function ContactForm(props) {
  var [formData, setFormData] = React.useState({
    name: '',
    mail: '',
    message: '',
    tel: '',
  });
  var [formBtnOn, setFormBtnOn] = React.useState(false);

  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const telRegex = /^\+?[1-9][0-9]{7,14}$/;

  function handleClick(event) {
    event.preventDefault();

    if (formData.mail.match(mailRegex) && formData.name.indexOf(' ') > -1 && (formData.tel.match(telRegex) || formData.tel == '') && formData.message.length > 2) {
      document.querySelector('.contact-form-submit-btn');
    } else {
      alert('Please fill out all the Required fields correctly');
    }
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      let name = event.target.name;
      let value = event.target.value;

      return { ...prevFormData, [name]: value };
    });
    if (formData.mail.match(mailRegex) && formData.name.indexOf(' ') > -1 && (formData.tel.match(telRegex) || formData.tel == '') && formData.message.length > 2) {
      setFormBtnOn(true);
    } else {
      setFormBtnOn(false);
    }
  }
  return (
    <section className={'section-form d-flex justify-content-center flex-column bg-light pt-7 mt-5 pb-10' + (props.windowWidth < 1400 ? ' pb-5' : ' ')} id='contact'>
      <h2 className='Form-subheading subheading fs-6 mb-3 d-flex justify-content-center'>CONTACT</h2>
      <h1 className='Form-heading fs-1 fw-bold m-0 d-flex justify-content-center'>want to tell me something?</h1>
      <Form
        className={
          'contact-form d-flex justify-content-center bg-light mt-2 ' +
          (props.windowWidth < 1400 ? ' flex-column' : ' mb-5 ') +
          (props.windowWidth > 850 && props.windowWidth < 1400 ? ' flex-column-reverse' : '')
        }>
        <Form.Group className={'mt-5 m-3 d-flex justify-content-start' + (props.windowWidth < 1400 ? ' m-auto' : ' ') + (props.windowWidth > 850 && props.windowWidth < 1400 ? ' ' : ' flex-column ')}>
          <div className={props.windowWidth < 1400 && props.windowWidth > 850 ? 'mr-5' : ' '}>
            <Form.Label className='text-dark'>Full Name*</Form.Label>
            <Form.Control
              name='name'
              type='text'
              placeholder='Daniel Butler'
              className={'mb-4 contact-form-input ' + (formData.name.indexOf(' ') > -1 || formData.name == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              value={formData.name}
              tabIndex={1}
            />
            <Form.Label className='text-dark'>E-Mail*</Form.Label>
            <Form.Control
              name='mail'
              type='email'
              placeholder='me@mywebsite.com'
              className={'mb-4 contact-form-input ' + (formData.mail.match(mailRegex) || formData.mail == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              value={formData.mail}
              tabIndex={2}
            />
          </div>
          <div className='h-100 d-flex flex-column'>
            <Form.Label className='text-dark'>Tel (optional)</Form.Label>
            <Form.Control
              name='tel'
              type='tel'
              placeholder='+41 12 345 67 09'
              className={'mb-4 contact-form-input ' + (formData.tel.match(telRegex) || formData.tel == '' || formData.tel == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              value={formData.tel}
              tabIndex={3}
            />
            {props.windowWidth > 850 && <Form.Label className='text-dark'>* Required</Form.Label>}
            {props.windowWidth > 850 && (
              <Button variant='secondary' type='submit' className='contact-form-submit-btn  p-2 mt-auto ' size='lg' onClick={handleClick} tabIndex={5} disabled={!formBtnOn}>
                SEND NOW
              </Button>
            )}
          </div>
        </Form.Group>

        <Form.Group className={'m-3 d-flex justify-content-between flex-column ' + (props.windowWidth < 1400 ? ' m-auto' : ' mt-5')}>
          <Form.Label className='text-dark'>Message*</Form.Label>
          <Form.Control
            name='message'
            as='textarea'
            placeholder='Enter text....'
            className={'contact-form-text-input pb-2' + (formData.message.length > 2 || formData.message == '' || formData.message == '' ? '' : ' bg-danger ')}
            size='lg'
            onChange={handleChange}
            value={formData.message}
            tabIndex={4}
            // style={{ width: '25rem' }} for phone
          />
          {props.windowWidth <= 850 && (
            <>
              <Form.Label className='text-dark mt-4'>* Required</Form.Label>
              <Button variant='secondary' type='submit' className='contact-form-submit-btn  p-2 mt-auto ' size='lg' onClick={handleClick} tabIndex={5} disabled={!formBtnOn}>
                SEND NOW
              </Button>
            </>
          )}
        </Form.Group>
      </Form>
    </section>
  );
}
