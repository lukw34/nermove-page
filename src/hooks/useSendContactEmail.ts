import { FormEventHandler, useContext, useState } from 'react';
import { ConfiguratorContext } from '../context/Configurator.context';

export enum RequestStatus {
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
    },
    selectedModel
  } = useContext(ConfiguratorContext);
  
  const sendEmail = async (subject: string, message: string) => {
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
          subject,
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
      }, 1500);
    } catch(e) {
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
    const subject  = `[Contact] [${emailAddress}] Wiadomość od ${name}`;
    await sendEmail(subject, message);
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
    const subject  = `[Order] [${selectedModel.name}] [${emailAddress}] Wiadomość od ${name}`;
    await sendEmail(subject, getSummary());
    return false;
  };

  return {
    submitContactForm,
    requestStatus,
    submitConfigurationForm
  };

};