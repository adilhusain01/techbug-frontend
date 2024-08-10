const HeroSectionButton = () => {
  return (
    <button
      className={`cursor-pointer py-0 md:py-[0.125rem] px-[0.25rem] bg-[transparent] md:w-[12.75rem] rounded-37xl box-border flex flex-row items-center justify-start gap-[0.75rem] border-[2px] border-solid border-[#F1CB47] `}
    >
      <img
        className='h-[2rem] md:h-[3rem] w-[2rem] md:w-[3rem] relative rounded-117xl overflow-hidden shrink-0'
        alt='arrow'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ytryrgkpxv17uwjulsye'
      />

      <h2 className='text-[1rem] md:text-[1.25rem] font-medium text-white relative'>
        Git in Touch
      </h2>
    </button>
  );
};

export default HeroSectionButton;
