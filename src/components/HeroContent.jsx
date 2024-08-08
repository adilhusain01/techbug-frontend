import HeroSectionButton from './HeroSectionButton';

const HeroContent = () => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center w-full text-center  text-white font-plus-jakarta-sans`}
    >
      <div className='w-full md:w-[65rem] flex flex-col items-start justify-start gap-[1.5rem] md:gap-[2rem]'>
        <h1 className='text-9xl md:text-23xl lg:text-49xl m-0 relative leading-tight md:leading-[100%] font-semibold mx-auto'>
          Building Customer Experiences
        </h1>
        <div className='self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] md:px-[4.875rem] box-border'>
          <h2 className='text-lg md:text-7xl lg:text-11xl m-0 flex-1 relative text-inherit leading-[149%] font-medium font-inherit inline-block max-w-full'>
            At Techbug, we are dedicated to provide comprehensive digital
            solutions to small and medium-sized businesses, individual
            professionals, and freelancers.
          </h2>
        </div>
        <div className='self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]'>
          <HeroSectionButton />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
