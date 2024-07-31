import TopNavBar from './top-nav-bar';
import BookACall from './book-a-call';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';

const Header = ({ className = '' }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans ${className}`}
    >
      <div className='flex-1 flex flex-row items-end justify-around max-w-full gap-[1.25rem]'>
        <div className='h-[3.25rem] w-[15rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem] box-border'>
          <img
            className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover'
            loading='lazy'
            alt=''
            src={logo}
          />
        </div>
        <div className='flex flex-col items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full'>
          <TopNavBar />
        </div>
        <div className='flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.812rem] text-black'>
          <div className='relative leading-[150%] font-medium inline-block min-w-[6.438rem] whitespace-nowrap'>
            Book a call
          </div>
        </div>
      </div>
      <BookACall />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
