const Footer = () => {
  return (
    <footer
      className={`self-stretch bg-gray overflow-hidden flex flex-col items-start justify-end py-[5.5rem] px-[3.75rem] box-border gap-[1.5rem] max-w-full shrink-0 text-left text-[1rem] text-darkgray font-plus-jakarta-sans mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:box-border`}
    >
      <img
        className='w-[15rem] h-[3.063rem] relative overflow-hidden shrink-0'
        loading='lazy'
        alt=''
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/techbug_logo'
      />
      <div className='self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq800:flex-wrap'>
        <div className='flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq800:flex-wrap'>
          <div className='flex flex-row items-center justify-center gap-[0.75rem]'>
            <img
              className='h-[2rem] w-[2rem] relative overflow-hidden shrink-0'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/dx1ruiicql3ybkjepewn'
            />
            <div className='flex flex-col items-start justify-center gap-[0.25rem]'>
              <div className='relative inline-block min-w-[8.063rem]'>
                Have a question?
              </div>
              <b className='relative text-[1.125rem] text-gold'>310-437-2766</b>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-[0.75rem]'>
            <img
              className='h-[2rem] w-[2rem] relative overflow-hidden shrink-0'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/dfensk6qbd5yogbwoghg'
            />
            <div className='flex flex-col items-start justify-center gap-[0.25rem]'>
              <div className='relative inline-block min-w-[5.25rem]'>
                Contact us
              </div>
              <b className='relative text-[1.125rem] text-gold whitespace-nowrap'>
                evedesign@example.com
              </b>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start gap-[1rem]'>
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ffhbq1vdrm87fd9xnkhr'
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/xxtxxdtd5s24v9gdohaj'
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/gz2akfvqeoinmxmxcxlm'
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ejf1cub7byf8xl8bbakt'
          />
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap'>
        <div className='flex flex-row items-start justify-start py-[0rem] pr-[0.937rem] pl-[0rem] gap-[1.437rem]'>
          <a
            href=''
            className='[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[6.563rem]'
          >
            Privacy policy
          </a>
          <a
            href=''
            className='[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[6.563rem]'
          >
            Terms of Use
          </a>
        </div>
        <div className='w-[46.688rem] relative leading-[1.5rem] text-right inline-block shrink-0 max-w-full'>
          © 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
