const Founders = () => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[6rem] px-[0rem] pb-[0rem] box-border gap-[5.5rem] max-w-full text-center text-[2.25rem] text-black font-plus-jakarta-sans`}
    >
      <h1 className='m-0 relative text-[4rem] font-semibold font-roboto inline-block max-w-full'>
        Founders
      </h1>
      <div className='self-stretch flex flex-row items-start justify-center py-[0rem] pl-[5rem] pr-[7.437rem] box-border gap-[4rem] max-w-full text-left'>
        <img
          className='w-[35.625rem] relative rounded-xl max-h-full object-cover max-w-full'
          loading='lazy'
          alt='Founder1'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/tj1w87bhm6iee3pafvgj'
        />
        <div className='flex-1 flex flex-col items-start justify-start min-w-[24.688rem] max-w-full gap-[1rem]'>
          <h2 className='m-0 self-stretch relative text-inherit leading-[140%] font-normal font-[inherit] '>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-center py-[0rem] px-[6.187rem] box-border gap-[4rem] max-w-full text-right'>
        <div className='flex-1 flex flex-col items-end justify-start min-w-[24.688rem] max-w-full gap-[1rem]'>
          <h2 className='m-0 self-stretch relative text-inherit leading-[140%] font-normal font-[inherit] '>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>
        </div>
        <img
          className='w-[35.625rem] relative rounded-xl max-h-full object-cover max-w-full'
          loading='lazy'
          alt='Founder2'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/jeagajwhx65ymyxkqn8o'
        />
      </div>
    </div>
  );
};

export default Founders;
