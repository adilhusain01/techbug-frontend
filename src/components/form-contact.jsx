import { useState } from 'react';
import InputField from './input-field';
import TextareaField from './textarea-field';
import SendButton from './send-button';
import PropTypes from 'prop-types';
import axios from '../api/axios';

const FormContact = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/contact', formData);
      if (response.status === 201) {
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        setErrorMessage('Unexpected response from the server.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(
        'There was an error sending your message. Please try again.'
      );
      setSuccessMessage('');
    }
  };

  return (
    <section
      className={`mt-24 py-10 w-full overflow-hidden flex flex-col items-center justify-center box-border min-w-[20rem] max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:gap-[1.25rem] mq800:pl-[9.625rem] mq800:pr-[9.625rem] mq800:box-border mq450:py-[1.938rem] mq450:px-[1.25rem] mq450:box-border mq1125:pt-[3rem] mq1125:pb-[3rem] mq1125:box-border ${className}`}
    >
      <div className='w-[35.938rem] flex flex-row items-center justify-center max-w-full'>
        <h1 className='m-0 relative text-inherit font-medium font-inherit mq800:text-[2rem] mq450:text-[1.5rem]'>
          Let’s get in touch
        </h1>
      </div>
      <form
        className='flex flex-col items-center justify-center relative max-w-full text-left text-[1rem] font-body-base'
        onSubmit={handleSubmit}
      >
        {successMessage && (
          <div className='mt-4 text-green-500'>{successMessage}</div>
        )}
        {errorMessage && (
          <div className='mt-4 text-red-500'>{errorMessage}</div>
        )}
        <div className='w-[51.5rem] flex flex-row flex-wrap items-start justify-start gap-[0.687rem_1.5rem] min-h-[34rem] max-w-full z-[1]'>
          <InputField
            label='Name '
            valuePlaceholder='Enter your first name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label='Email'
            valuePlaceholder='Enter your email id'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label='Phone no.'
            valuePlaceholder='Enter your phone no.'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label='Company (Optional)'
            valuePlaceholder='Enter your company name'
            name='company'
            value={formData.company}
            onChange={handleChange}
          />
          <TextareaField
            label='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className='w-[33.813rem] flex flex-row items-center justify-center max-w-full'>
          <SendButton />
        </div>
      </form>
    </section>
  );
};

FormContact.propTypes = {
  className: PropTypes.string,
};

export default FormContact;
