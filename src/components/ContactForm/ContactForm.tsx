import React from 'react';
import './contactForm.scss';
import { BlueButton } from '../Button/BlueButton';

const ContacForm = () => {

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <h2>Kontakt</h2>
        <input className="input-wrapper" name="name" placeholder="Podaj swoje imię" required />
        <input className="input-wrapper" name="emailaddress" placeholder="Podaj swój email" required type="email" />
        <textarea className="textarea-wrapper" cols={50} name="subject" placeholder="Wpisz wiadomość do nas" required rows={4} />
        <BlueButton onClick={() => null} title="Wyslij wiadomosć" />
      </form>
    </div>
  );
};


export default ContacForm;