import PropTypes from 'prop-types';

const HeroSectionButton = () => {
  return (
    <button
      className={`cursor-pointer py-[0.125rem] px-[0.25rem] bg-[transparent] w-[12.75rem] rounded-37xl box-border flex flex-row items-start justify-start gap-[0.75rem] border-[2px] border-solid border-[#F1CB47] `}
    >
      <img
        className='h-[3rem] w-[3rem] relative rounded-117xl overflow-hidden shrink-0'
        alt=''
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ytryrgkpxv17uwjulsye'
      />
      <div className='flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]'>
        <div className='relative text-[1.25rem] font-medium font-plus-jakarta-sans text-white text-left inline-block min-w-[7.25rem] mq450:text-[1rem]'>
          Get in touch
        </div>
      </div>
    </button>
  );
};

export default HeroSectionButton;
