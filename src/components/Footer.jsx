// const AnimatedSection = lazy(() => import('./AnimatedSection'));

const Footer = () => {
  return (
    <footer
      className={`w-full self-stretch bg-gray overflow-hidden flex flex-col md:flex-row items-center justify-between py-[4rem] md:py-[5.5rem] px-0 md:px-[3.75rem] box-border shrink-0 text-[1rem] text-darkgray`}
    >
      <div className='m-0 p-0 flex flex-col items-start justify-start gap-[0.5rem] lg:gap-[1.25rem]'>
        {/* <AnimatedSection> */}
        <img
          className='h-[1.8rem] md:h-[1.6rem] lg:h-[3rem] w-[8rem] md:[w-12rem] lg:w-[15rem] object-cover relative overflow-hidden shrink-0'
          loading='lazy'
          alt='logo'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/techbug_logo'
        />
        {/* </AnimatedSection> */}
        <div className='m-0 p-0 flex flex-row md:flex-col justify-start content-start'>
          <div className='m-0 p-0 flex flex-col md:flex-row content-center justify-center gap-[1.5rem]'>
            {/* <AnimatedSection> */}
            <div className='flex flex-row items-center justify-start gap-[0.75rem]'>
              <img
                className='h-[1rem] md:h-[1.5rem] lg:h-[2rem] w-[1.2rem] md:w-[1.5rem] lg:w-[2rem] object-cover relative overflow-hidden shrink-0'
                loading='lazy'
                alt='Phone'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/dx1ruiicql3ybkjepewn'
              />
              <div className='flex flex-col items-start justify-center gap-0 md:gap-[0.25rem]'>
                <p className='text-[0.8rem] md:text-[1rem] lg:text-[1.125rem] m-0 relative inline-block'>
                  Have a question?
                </p>
                <b className='relative text-[0.8rem] md:text-[1rem] lg:text-[1.125rem] text-gold'>
                  310-437-2766
                </b>
              </div>
            </div>
            {/* </AnimatedSection> */}
            {/* <AnimatedSection> */}
            <div className='flex flex-row items-center justify-start gap-[0.75rem]'>
              <img
                className='h-[1.2rem] md:h-[1.5rem] lg:h-[2rem] w-[1.2rem] md:w-[1.5rem] lg:w-[2rem] object-cover relative overflow-hidden shrink-0'
                loading='lazy'
                alt='Mail'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/dfensk6qbd5yogbwoghg'
              />
              <div className='flex flex-col items-start justify-center gap-0 md:gap-[0.25rem]'>
                <p className='text-[0.8rem]  md:text-[1rem] lg:text-[1.125rem] m-0 relative inline-block'>
                  Contact us
                </p>
                <b className='relative text-[0.8rem] md:text-[1rem] lg:text-[1.125rem] text-gold whitespace-nowrap'>
                  evedesign@example.com
                </b>
              </div>
            </div>
            {/* </AnimatedSection> */}
          </div>
          <div className='md:mt-[1rem] flex flex-col md:flex-row gap-0 md:gap-[1.5rem]'>
            {/* <AnimatedSection> */}
            <p className='m-0 [text-decoration:none] relative leading-[1.5rem] text-[0.8rem] md:text-[1rem] lg:text-[1.125rem]'>
              Privacy policy
            </p>
            {/* </AnimatedSection> */}
            {/* <AnimatedSection> */}
            <p className='m-0 [text-decoration:none] relative leading-[1.5rem] text-[0.8rem] md:text-[1rem] lg:text-[1.125rem]'>
              Terms of Use
            </p>
            {/* </AnimatedSection> */}
          </div>
        </div>
      </div>

      <div className='mt-[2rem] md:m-0 p-0 flex flex-col'>
        <div className='flex flex-row justify-center md:justify-end gap-[0.5rem]'>
          {/* <AnimatedSection> */}
          <img
            className='h-[1rem] md:h-[1.5rem] w-[1rem] md:w-[1.5rem] relative object-cover mx-auto'
            loading='lazy'
            alt='Twitter'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ffhbq1vdrm87fd9xnkhr'
          />
          {/* </AnimatedSection> */}
          {/* <AnimatedSection> */}
          <img
            className='h-[1rem] md:h-[1.5rem] w-[1rem] md:w-[1.5rem] relative object-cover mx-auto'
            loading='lazy'
            alt='Instagram'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/xxtxxdtd5s24v9gdohaj'
          />
          {/* </AnimatedSection> */}
          {/* <AnimatedSection> */}
          <img
            className='h-[1rem] md:h-[1.5rem] w-[1rem] md:w-[1.5rem] relative object-cover mx-auto'
            loading='lazy'
            alt='Youtube'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/gz2akfvqeoinmxmxcxlm'
          />
          {/* </AnimatedSection> */}
          {/* <AnimatedSection> */}
          <img
            className='h-[1rem] md:h-[1.5rem] w-[1rem] md:w-[1.5rem] relative object-cover mx-auto'
            loading='lazy'
            alt='Linkedin'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ejf1cub7byf8xl8bbakt'
          />
          {/* </AnimatedSection> */}
        </div>
        {/* <AnimatedSection> */}
        <h2 className='text-[0.8rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.5rem]'>
          © 2024, All Rights Reserved
        </h2>
        {/* </AnimatedSection> */}
      </div>
    </footer>
  );
};

export default Footer;
