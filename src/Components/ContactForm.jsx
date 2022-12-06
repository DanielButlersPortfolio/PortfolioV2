import React from 'react';
import { darkModeContext, screenWithContext } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import sendMailFunction from '../../src/functions/sendMail';

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    mail: '',
    message: '',
    tel: '',
  });
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);
  var [formBtnOn, setFormBtnOn] = React.useState(false);

  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const telRegex = /^\+?[1-9][0-9]{7,14}$/;

  function handleClick(event) {
    event.preventDefault();

    if (formData.mail.match(mailRegex) && formData.name.indexOf(' ') > -1 && (formData.tel.match(telRegex) || formData.tel == '') && formData.message.length > 2) {
      sendMailFunction(...formData);
    } else {
      alert('Please fill out all the Required fields correctly');
    }
  }

  React.useEffect(() => {
    if (formData.mail.match(mailRegex) && formData.name.indexOf(' ') > -1 && (formData.tel.match(telRegex) || formData.tel == '') && formData.message.length > 2) {
      setFormBtnOn(true);
    } else {
      setFormBtnOn(false);
    }
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      let name = event.target.name;
      let value = event.target.value;
      return { ...prevFormData, [name]: value };
    });
  }

  return (
    <section className={'section-form d-flex justify-content-center flex-column pt-7 mt-5 pb-10' + (windowWidth < 1400 ? ' pb-5' : ' ') + (darkMode ? ' bg-dark' : ' bg-light')} id='contact'>
      <h2 className='Form-subheading subheading fs-6 mb-3 d-flex justify-content-center'>CONTACT</h2>
      <h1 className={'Form-heading fs-1 fw-bold m-0 d-flex justify-content-center ' + (darkMode && ' text-light')}>want to tell me something?</h1>
      <Form
        className={
          'contact-form d-flex justify-content-center mt-2 ' +
          (windowWidth < 1400 ? ' flex-column' : ' mb-5 ') +
          (windowWidth > 850 && windowWidth < 1400 ? ' flex-column-reverse' : '') +
          (darkMode ? ' bg-dark' : ' bg-light')
        }>
        <Form.Group className={'mt-5 m-3 d-flex justify-content-start ' + (windowWidth < 1400 ? ' m-auto' : ' ') + (windowWidth > 850 && windowWidth < 1400 ? ' ' : ' flex-column ')}>
          <div className={windowWidth < 1400 && windowWidth > 850 ? 'mr-5' : ' '}>
            <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Full Name*</Form.Label>
            <Form.Control
              name='name'
              type='text'
              placeholder='Daniel Butler'
              className={'mb-4 contact-form-input ' + (darkMode ? ' bg-dark text-light ' : '') + (formData.name.indexOf(' ') > -1 || formData.name == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              tabIndex={1}
            />
            <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>E-Mail*</Form.Label>
            <Form.Control
              name='mail'
              type='email'
              placeholder='me@mywebsite.com'
              className={'mb-4 contact-form-input ' + (darkMode ? ' bg-dark text-light ' : '') + (formData.mail.match(mailRegex) || formData.mail == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              tabIndex={2}
            />
          </div>
          <div className='h-100 d-flex flex-column'>
            <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Tel (optional)</Form.Label>
            <Form.Control
              name='tel'
              type='tel'
              placeholder='+41 12 345 67 09'
              className={'mb-4 contact-form-input ' + (darkMode ? ' bg-dark text-light ' : '') + (formData.tel.match(telRegex) || formData.tel == '' || formData.tel == '' ? '' : ' bg-danger ')}
              size='lg'
              onChange={handleChange}
              tabIndex={3}
            />
            {windowWidth > 850 && <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>* Required</Form.Label>}
            {windowWidth > 850 && (
              <Button variant='secondary' type='submit' className='contact-form-submit-btn  p-2 mt-auto ' size='lg' onClick={handleClick} tabIndex={5} disabled={!formBtnOn}>
                SEND NOW
              </Button>
            )}
          </div>
        </Form.Group>

        <Form.Group className={'m-3 d-flex justify-content-between flex-column ' + (windowWidth < 1400 ? ' m-auto' : ' mt-5')}>
          <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Message*</Form.Label>
          <Form.Control
            name='message'
            as='textarea'
            placeholder='Enter text....'
            className={
              'contact-form-text-input pb-2' + (darkMode ? ' bg-dark text-light ' : '') + (formData.message.length > 2 || formData.message == '' || formData.message == '' ? '' : ' bg-danger ')
            }
            size='lg'
            onChange={handleChange}
            tabIndex={4}
          />
          {windowWidth <= 850 && (
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
