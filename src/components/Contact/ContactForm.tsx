import React from 'react';
import './contact.scss';
import { SubmitButton } from '../Button/SubmitButton';
import ContactInfo from './ContactInfo';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <form className="contact-wrapper contact-wrapper-size">
        <h2>Kontakt</h2>
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <textarea className="textarea-wrapper" cols={50} name="subject" placeholder="Wpisz wiadomość do nas" required rows={4} />
        <SubmitButton onClick={() => null} title="Wyslij wiadomosć" />
      </form>
      <ContactInfo />
    </div>
  );
};


export default ContactForm;