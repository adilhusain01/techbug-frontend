import PropTypes from 'prop-types';

const SendButton = ({ color }) => {
  return (
    <button
      type='submit'
      className={`mt-8 cursor-pointer py-[0.125rem] px-[0.25rem] bg-[transparent] w-[16.188rem] rounded-37xl box-border flex flex-row items-start justify-start gap-[0.75rem] border-[1px] border-solid border-goldenrod-100`}
    >
      <img
        className='h-[3rem] w-[3rem] relative overflow-hidden shrink-0'
        alt='Send'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ytryrgkpxv17uwjulsye'
      />

      <div>
        <h2
          className='text-[1rem] md:text-[1.25rem] font-medium font-plus-jakarta-sans'
          style={{ color: color }}
        >
          Send your enquiry
        </h2>
      </div>
    </button>
  );
};

export default SendButton;

SendButton.prototype = {
  color: PropTypes.string.isRequired,
};
