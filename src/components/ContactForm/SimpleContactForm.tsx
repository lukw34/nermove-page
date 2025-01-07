import React from 'react';
import './contactForm.scss';
import { SubmitButton } from '../Button/SubmitButton';

const SimpleContacForm = () => {
  return (
    <div className="form-container">
      <form className="form-wrapper">
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <SubmitButton onClick={() => null} title="Wyslij wiadomosć" />
      </form>
    </div>
  );
};


export default SimpleContacForm;