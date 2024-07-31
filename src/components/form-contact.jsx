import InputField from './input-field';
import TextareaField from './textarea-field';
import SendButton from './send-button';
import PropTypes from 'prop-types';

const FormContact = ({ className = '' }) => {
  return (
    <section
      className={`mt-24 py-10 w-full overflow-hidden flex flex-col items-center justify-center box-border min-w-[20rem] max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:gap-[1.25rem] mq800:pl-[9.625rem] mq800:pr-[9.625rem] mq800:box-border mq450:py-[1.938rem] mq450:px-[1.25rem] mq450:box-border mq1125:pt-[3rem] mq1125:pb-[3rem] mq1125:box-border ${className}`}
    >
      <div className='w-[35.938rem] flex flex-row items-center justify-center max-w-full'>
        <h1 className='m-0 relative text-inherit font-medium font-inherit mq800:text-[2rem] mq450:text-[1.5rem]'>
          Let’s get in touch
        </h1>
      </div>
      <div className='flex flex-row items-center justify-center relative max-w-full text-left text-[1rem] font-body-base'>
        <div className='w-[51.5rem] flex flex-row flex-wrap items-start justify-start gap-[0.687rem_1.5rem] min-h-[34rem] max-w-full z-[1]'>
          <InputField label='Name ' valuePlaceholder='Enter your first name' />
          <InputField label='Email' valuePlaceholder='Enter your email id' />
          <InputField
            label='Phone no.'
            valuePlaceholder='Enter your phone no.'
          />
          <InputField
            label='Company (Optional)'
            valuePlaceholder='Enter your company name'
          />
          <TextareaField label='Message' />
        </div>
      </div>
      <div className='w-[33.813rem] flex flex-row items-center justify-center max-w-full'>
        <SendButton />
      </div>
    </section>
  );
};

FormContact.propTypes = {
  className: PropTypes.string,
};

export default FormContact;
