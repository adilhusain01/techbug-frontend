import Box from './box';

const Expertise = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[9rem] box-border max-w-full shrink-0 text-center text-[4.25rem] text-gray font-plus-jakarta-sans mq800:pb-[5.875rem] mq800:box-border`}
    >
      <div className='flex-1 flex flex-col items-center justify-start max-w-full'>
        <div
          className="w-[88.625rem] rounded-13xl flex flex-col items-center justify-start pt-[2.5rem] px-[1.25rem] pb-[10.687rem] box-border bg-[url('/public/our-expertise@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[23.188rem] max-w-full mq450:pt-[1.625rem] mq450:pb-[6.938rem] mq450:box-border"
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
              background: 'linear-gradient(to right, #F9CA06, #ED763B)', // Adjust colors as needed
              opacity: 0.6, // Adjust opacity (0.6 for 60% darkness)
            }}
          />
          <div className='w-[72.313rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-full'>
            <h1 className='m-0 self-stretch relative text-inherit font-semibold font-inherit mq800:text-[3.375rem] mq450:text-[2.563rem]'>
              Our Expertise
            </h1>
            <h1 className='m-0 relative text-[2.5rem] font-medium font-inherit text-left mq800:text-[2rem] mq450:text-[1.5rem]'>
              Techbug provides a range of services to choose from, dive in!
            </h1>
          </div>
        </div>

        <div className='self-stretch flex flex-row items-start justify-center pb-[3rem] gap-[4rem] z-[1] mt-[-6rem] text-[1.25rem] text-white mq1325:flex-wrap'>
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
