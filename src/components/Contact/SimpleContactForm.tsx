import React from 'react';
import './contact.scss';
import { ActionButton } from '../Button/ActionButton';
import { useSendContactEmnail } from '../../hooks/useSendContactEmail';

const SimpleContacForm = () => {
  const { submitConfigurationForm, requestStatus: { isLoading } } = useSendContactEmnail();
  return (
    <div className="simple-contact-container contact-container">
      <form className="contact-wrapper" onSubmit={submitConfigurationForm} >
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <ActionButton  disabled={isLoading} title="Wyslij wiadomosć" type="submit" />
        <p className="regulation-note">Klikając &ldquo;Wyślij wiadomość&ldquo; akceptujesz <a href="/#/regulations">Regulamin</a></p>  
      </form>
    </div>
  );
};


export default SimpleContacForm;