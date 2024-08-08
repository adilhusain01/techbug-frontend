import Box from './Box';

const Expertise = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start px-[0.5rem] pb-[4rem] lg:pb-[9rem] box-border shrink-0 text-center text-gray font-plus-jakarta-sans`}
    >
      <div className='flex-1 flex flex-col items-center justify-start w-full'>
        <div
          className='w-[88rem] rounded-13xl flex flex-col items-center justify-start box-border min-h-[15rem] lg:min-h-[23rem]'
          style={{
            backgroundImage: `url(https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/sr9yjt9w41typvkajumb)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            padding: '4rem',
            height: '60%',
            width: '95%',
          }}
        >
          <div
            className='rounded-13xl'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, #F9CA06, #ED763B)',
              opacity: 0.6,
            }}
          />
          <div className='p-0 w-full flex flex-col items-center justify-start gap-[0.75rem] lg:gap-[1.5rem]'>
            <h1 className='m-0 self-stretch text-13xl md:text-21xl lg:text-49xl relative font-semibold font-inherit'>
              Our Expertise
            </h1>
            <h1 className='m-0 relative mx-auto text-2xl md:text-7xl lg:text-21xl font-medium font-inherit tracking-tight md:tracking-normal leading-tight md:leading-normal'>
              Techbug provides a range of services to choose from, dive in!
            </h1>
          </div>
        </div>

        <div className='justify-items-center grid grid-cols-3 lg:grid-cols-6 gap-[0.3rem] md:gap-[1rem] lg:gap-[4rem] pb-[3rem] z-[1] mt-[-3rem] lg:mt-[-6rem] text-white'>
          <Box
            title='Web Development & Design'
            icon={'web_icon'}
            propOverflow='hidden'
          />
          <Box
            title='App Development & Design'
            icon={'app_icon'}
            propOverflow='hidden'
          />
          <Box
            title='Digital Marketing'
            icon={'marketing_icon'}
            propOverflow='hidden'
          />
          <Box
            title='Smart Business Cards'
            icon={'cards_icon'}
            propOverflow='hidden'
          />
          <Box
            title='Business Automations'
            icon={'automation_icon'}
            propOverflow='hidden'
          />
          <Box
            title='Custom Services'
            icon={'services_icon'}
            propOverflow='hidden'
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
