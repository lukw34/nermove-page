import React from 'react';
import './contact.scss';
import { ActionButton } from '../Button/ActionButton';
import ContactInfo from './ContactInfo';
import { RequestStatus, useSendContactEmnail } from '../../hooks/useSendContactEmail';

const ContactForm = () => {
  const { submitContactForm, requestStatus: { isLoading, result } } = useSendContactEmnail();
  const requestClass = isLoading ? 'contact-loader' : {
    [RequestStatus.SUCCESS]: 'contact-success',
    [RequestStatus.ERROR]: 'contact-error'
  }[result as RequestStatus] || '';
  return (
    <div className="contact-container">
      <form className={`contact-wrapper contact-wrapper-size ${requestClass}`} onSubmit={submitContactForm}>
        <h2>Kontakt</h2>
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <textarea className="textarea-wrapper" cols={50} name="message" placeholder="Wpisz wiadomość do nas" required rows={4} />
        <ActionButton disabled={isLoading} title="Wyslij wiadomosć" type="submit"/>
        <p className="regulation-note">Klikając &ldquo;Wyślij wiadomość&ldquo; akceptujesz <a href="/#/regulations">Regulamin</a></p>  
      </form>
      <ContactInfo />
    </div>
  );
};


export default ContactForm;