import { FormEventHandler, useContext, useState } from 'react';
import { ConfiguratorContext } from '../context/Configurator.context';

enum RequestStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export const useSendContactEmnail = () => {
  const [requestStatus, setRequestStatus] = useState<{
    isLoading: boolean,
    result: RequestStatus | null
  }>({ isLoading: false, result: null});

  const {
    configurator: {
      getSummary
    }
  } = useContext(ConfiguratorContext);
  
  const sendEmail = async (title: string, message: string) => {
    setRequestStatus({
      isLoading: false,
      result: null
    });
    try {
      setRequestStatus({
        isLoading: true,
        result: null
      });
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          title,
          message
        }),
            
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      setTimeout(() => {
        setRequestStatus({
          isLoading: false,
          result: RequestStatus.SUCCESS
        });
      }, 2000);
    } catch(e) {
      console.error(e);
      setRequestStatus({
        isLoading: false,
        result: RequestStatus.ERROR
      });
    }
  };

  const submitContactForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const {
      name: {
        value: name
      }, 
      emailaddress: {
        value: emailAddress
      },
      message: {
        value: message
      }
    } = event.target as any;
    const title  = `[Contact] [${emailAddress}] Wiadomość od ${name}`;
    await sendEmail(title, message);
    return false;
  };

  const submitConfigurationForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const {
      name: {
        value: name
      }, 
      emailaddress: {
        value: emailAddress
      }
    } = event.target as any;
    const title  = `[Order] [${emailAddress}] Wiadomość od ${name}`;
    console.log(getSummary());
    await sendEmail(title, getSummary());
    return false;
  };

  return {
    submitContactForm,
    requestStatus,
    submitConfigurationForm
  };

};