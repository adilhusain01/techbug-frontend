import PropTypes from 'prop-types';
// const AnimatedSection = lazy(() => import('./AnimatedSection'));
const SendButton = ({ color }) => {
  return (
    // <AnimatedSection>
    <button
      type='submit'
      className={`mt-8 cursor-pointer py-0 md:py-[0.125rem] px-[0.25rem] bg-[transparent] w-[12rem] md:w-[16rem] rounded-37xl box-border flex flex-row items-center justify-start gap-[0.75rem] border-[1px] border-solid border-goldenrod-100 mx-auto`}
    >
      <img
        className='h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] relative overflow-hidden shrink-0'
        alt='Send'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ytryrgkpxv17uwjulsye'
      />

      <h2
        className='text-[1rem] md:text-[1.25rem] font-medium'
        style={{ color: color }}
      >
        Send your enquiry
      </h2>
    </button>
    // </AnimatedSection>
  );
};

export default SendButton;

SendButton.prototype = {
  color: PropTypes.string.isRequired,
};
