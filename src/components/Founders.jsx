const Founders = () => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[6rem] px-[0rem] pb-[0rem] box-border gap-[5.5rem] max-w-full text-center text-[2.25rem] text-black font-plus-jakarta-sans`}
    >
      <h1 className='m-0 relative text-[4rem] font-semibold font-roboto inline-block max-w-full mq800:text-[3.188rem] mq450:text-[2.375rem]'>
        Founders
      </h1>
      <div className='self-stretch flex flex-row items-start justify-center py-[0rem] pl-[5rem] pr-[7.437rem] box-border gap-[4rem] max-w-full text-left mq800:pr-[1.813rem] mq800:box-border mq1350:flex-wrap mq1350:pl-[2.5rem] mq1350:pr-[3.688rem] mq1350:box-border'>
        <img
          className='w-[35.625rem] relative rounded-xl max-h-full object-cover max-w-full mq1350:flex-1'
          loading='lazy'
          alt='Founder1'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/tj1w87bhm6iee3pafvgj'
        />
        <div className='flex-1 flex flex-col items-start justify-start min-w-[24.688rem] max-w-full gap-[1rem] mq800:min-w-full'>
          <h2 className='m-0 self-stretch relative text-inherit leading-[140%] font-normal font-[inherit] mq800:text-[1.813rem] mq800:leading-[2.5rem] mq450:text-[1.375rem] mq450:leading-[1.875rem]'>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-center py-[0rem] px-[6.187rem] box-border gap-[4rem] max-w-full text-right mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border mq1125:flex-wrap mq1350:pl-[3.063rem] mq1350:pr-[3.063rem] mq1350:box-border'>
        <div className='flex-1 flex flex-col items-end justify-start min-w-[24.688rem] max-w-full gap-[1rem] mq800:min-w-full'>
          <h2 className='m-0 self-stretch relative text-inherit leading-[140%] font-normal font-[inherit] mq800:text-[1.813rem] mq800:leading-[2.5rem] mq450:text-[1.375rem] mq450:leading-[1.875rem]'>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>
        </div>
        <img
          className='w-[35.625rem] relative rounded-xl max-h-full object-cover max-w-full mq1125:flex-1'
          loading='lazy'
          alt='Founder2'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/jeagajwhx65ymyxkqn8o'
        />
      </div>
    </div>
  );
};

export default Founders;
