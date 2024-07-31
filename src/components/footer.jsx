import PropTypes from 'prop-types';

//images
import logo from '../assets/logo.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = ({ className = '' }) => {
  return (
    <footer
      className={`self-stretch bg-gray overflow-hidden flex flex-col items-start justify-end py-[5.5rem] px-[3.75rem] box-border gap-[1.5rem] max-w-full shrink-0 text-left text-[1rem] text-darkgray font-plus-jakarta-sans mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:box-border ${className}`}
    >
      <img
        className='w-[15rem] h-[3.063rem] relative overflow-hidden shrink-0'
        loading='lazy'
        alt=''
        src={logo}
      />
      <div className='self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq800:flex-wrap'>
        <div className='flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq800:flex-wrap'>
          <div className='flex flex-row items-center justify-center gap-[0.75rem]'>
            <img
              className='h-[2rem] w-[2rem] relative overflow-hidden shrink-0'
              loading='lazy'
              alt=''
              src={email}
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
              src={phone}
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
            src={twitter}
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src={instagram}
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src={youtube}
          />
          <img
            className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
            loading='lazy'
            alt=''
            src={linkedin}
          />
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap'>
        <div className='flex flex-row items-start justify-start py-[0rem] pr-[0.937rem] pl-[0rem] gap-[1.437rem]'>
          <a className='[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[6.563rem]'>
            Privacy policy
          </a>
          <div className='relative leading-[1.5rem] inline-block min-w-[6.063rem]'>
            Terms of Use
          </div>
        </div>
        <div className='w-[46.688rem] relative leading-[1.5rem] text-right inline-block shrink-0 max-w-full'>
          © 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
