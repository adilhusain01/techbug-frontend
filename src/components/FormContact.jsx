import { useState } from 'react';
import ReactGA from 'react-ga4';
import InputField from './InputField';
import TextareaField from './TextareaField';
import SendButton from './SendButton';
import axios from '../api/axios';
import PropTypes from 'prop-types';
// const AnimatedSection = lazy(() => import('./AnimatedSection'));

const FormContact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9]\d{1,9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = '';

    // Validation
    if (name === 'email' && !emailRegex.test(value)) {
      error = 'Invalid email format';
    } else if (name === 'phone' && !phoneRegex.test(value)) {
      error = 'Invalid phone number format';
    } else if (value.length > 100) {
      error = 'Input exceeds maximum length of 100 characters';
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessage(error);
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ReactGA.event({
      category: 'Form',
      action: 'Submitted Contact Form',
    });

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
        setErrorMessage(response.data.message || 'An error occurred');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred.');
      setSuccessMessage('');
    }
  };

  const themeStyles = {
    black: {
      bg: '#ffffff',
      h1Color: '#1e1e1e',
      labelColor: '#1e1e1e',
      inputBg: '#313131',
      inputTextColor: '#696565',
      inputBorderColor: '#d9d9d9',
      buttonColor: '#1e1e1e',
    },
    white: {
      bg: '#171717',
      h1Color: '#FFFFFF',
      labelColor: '#ffffff',
      inputBg: '#b3b3b3',
      inputTextColor: '#696565',
      inputBorderColor: '#d9d9d9',
      buttonColor: '#ffffff',
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.black;

  return (
    <section
      id='contact-form'
      className={`px-[2rem] md:px-[7.5rem] lg:px-0 py-[3rem] md:py-[4.25rem] lg:py-[6.25rem] w-full overflow-hidden flex flex-col items-center justify-center box-border shrink-0 text-center mx-auto`}
      style={{
        backgroundColor: currentTheme.bg,
      }}
    >
      {/* <AnimatedSection> */}
      <div className='flex flex-row items-center justify-center mx-auto'>
        <h1
          className='m-0 relative font-medium font-inherit text-[1.5rem] md:text-[2rem] lg:text-[3rem]'
          style={{ color: currentTheme.h1Color }}
        >
          Let’s get in touch
        </h1>
      </div>
      {/* </AnimatedSection> */}
      <form
        className='mt-[2rem] flex flex-col items-center justify-center relative max-w-full text-left text-[1rem] font-body-base'
        onSubmit={handleSubmit}
      >
        {successMessage && (
          <div className='mt-4 text-green-500'>{successMessage}</div>
        )}
        {errorMessage && (
          <div className='mt-4 text-red-500'>{errorMessage}</div>
        )}
        <div className='w-[50rem] flex flex-row flex-wrap items-start justify-start gap-[0.65rem_1.5rem] max-w-full z-[1]'>
          <InputField
            label='Name '
            valuePlaceholder='Enter your first name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            theme={currentTheme}
          />
          <InputField
            label='Email'
            valuePlaceholder='Enter your email id'
            name='email'
            value={formData.email}
            onChange={handleChange}
            theme={currentTheme}
          />
          <InputField
            label='Phone no.'
            valuePlaceholder='Enter your phone no.'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            theme={currentTheme}
          />
          <InputField
            label='Company (Optional)'
            valuePlaceholder='Enter your company name'
            name='company'
            value={formData.company}
            onChange={handleChange}
            theme={currentTheme}
          />
          <TextareaField
            label='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            theme={currentTheme}
          />
        </div>

        <SendButton color={currentTheme.buttonColor} />
      </form>
    </section>
  );
};

export default FormContact;

FormContact.propTypes = {
  theme: PropTypes.string.isRequired,
};
