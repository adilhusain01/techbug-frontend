import TopNavBar from './TopNavBar';
import PropTypes from 'prop-types';

const Header = ({ menu, theme }) => {
  const themeStyles = {
    light: {
      textColor: '#1E1E1E',
      activeTextColor: '#FFFFFF',
      menuBg: '#F9CA06',
      activeMenuBg: '#171717',
      callBg: '#171717',
      callTextColor: '#FFFFFF',
      logo: 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ddhkrmchqvq2kbkzbkef',
    },

    dark: {
      textColor: '#1E1E1E',
      activeTextColor: '#1E1E1E',
      menuBg: '#FFFFFF',
      activeMenuBg: '#F9CA06',
      callBg: '#FFFFFF',
      callTextColor: '#000000',
      logo: 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/techbug_logo',
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.dark;

  return (
    <header
      className={`mt-12 self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.25rem] font-plus-jakarta-sans `}
    >
      <div className='flex-1 flex flex-row items-end justify-around max-w-full gap-[1.25rem]'>
        <div className='h-[3.25rem] w-[15rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem] box-border'>
          <img
            className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover'
            loading='lazy'
            alt='logo'
            src={currentTheme.logo}
          />
        </div>
        <div className='flex flex-col items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full'>
          <TopNavBar menu={menu} theme={currentTheme} />
        </div>
        <div
          className='flex flex-col items-center justify-center py-[1rem] px-[2rem]  rounded-[10rem]'
          style={{
            backgroundColor: currentTheme.callBg,
            color: currentTheme.callTextColor,
          }}
        >
          Book A Call
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
