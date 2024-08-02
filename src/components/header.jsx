import TopNavBar from './top-nav-bar';
import PropTypes from 'prop-types';

const Header = ({ menu }) => {
  return (
    <header
      className={`mt-12 self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans `}
    >
      <div className='flex-1 flex flex-row items-end justify-around max-w-full gap-[1.25rem]'>
        <div className='h-[3.25rem] w-[15rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem] box-border'>
          <img
            className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover'
            loading='lazy'
            alt=''
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/techbug_logo'
          />
        </div>
        <div className='flex flex-col items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full'>
          <TopNavBar menu={menu} />
        </div>
        <div className='flex flex-col items-center justify-center py-[1rem] px-[2rem] bg-white text-black rounded-[10rem]'>
          Book A Call
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default Header;
