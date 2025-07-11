import React from 'react';
import './contact.scss';
import { ActionButton } from '../Button/ActionButton';
import { RequestStatus, useSendContactEmnail } from '../../hooks/useSendContactEmail';


const SimpleContacForm = () => {
  const { submitConfigurationForm, requestStatus: { isLoading, result } } = useSendContactEmnail();
  const requestClass = isLoading ? 'contact-loader' : {
    [RequestStatus.SUCCESS]: 'contact-success',
    [RequestStatus.ERROR]: 'contact-error'
  }[result as RequestStatus] || '';
  
  return (
    <div className={`simple-contact-container contact-container ${requestClass}`}>
      <form className="contact-wrapper" onSubmit={submitConfigurationForm} >
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <ActionButton  disabled={isLoading} title="Wyslij zapytanie o oferte" type="submit" />
        <p className="regulation-note">Klikając &ldquo;Wyślij wiadomość&ldquo; akceptujesz <a href="/#/regulations">Regulamin</a></p>  
      </form>
    </div>
  );
};


export default SimpleContacForm;