import PropTypes from 'prop-types';

const SendButton = ({ color }) => {
  return (
    <button
      type='submit'
      className={`mt-8 cursor-pointer py-[0.125rem] px-[0.25rem] bg-[transparent] w-[16.188rem] rounded-37xl box-border flex flex-row items-start justify-start gap-[0.75rem] border-[1px] border-solid border-goldenrod-100`}
    >
      <img
        className='h-[3rem] w-[3rem] relative rounded-117xl overflow-hidden shrink-0'
        alt='Send'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ytryrgkpxv17uwjulsye'
      />
      <div className='h-[1.563rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border'>
        <div
          className='relative text-[1.25rem] font-medium font-plus-jakarta-sans text-left'
          style={{ color: color }}
        >
          Send your enquiry
        </div>
      </div>
    </button>
  );
};

export default SendButton;

SendButton.prototype = {
  color: PropTypes.string.isRequired,
};
