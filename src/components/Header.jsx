import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import MobileNavBar from './MobileNavBar';
import PropTypes from 'prop-types';

const Header = ({ menu, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeStyles = {
    light: {
      textColor: '#1E1E1E',
      activeTextColor: '#FFFFFF',
      menuBg: '#F9CA06',
      activeMenuBg: '#171717',
      callBg: 'bg-[#171717]',
      callTextColor: 'text-[#FFFFFF]',
      logo: 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/zuqbajuyhavubnv8l7le',

      breadcrumb:
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/p97ifgieewh6ujdx3v5v',
    },

    dark: {
      textColor: '#1E1E1E',
      activeTextColor: '#1E1E1E',
      menuBg: '#FFFFFF',
      activeMenuBg: '#F9CA06',
      callBg: 'bg-[#FFFFFF]',
      callTextColor: 'text-[#000000]',
      logo: 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/b9loymbrksijbqi80ypt',
      breadcrumb:
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ueadzzp4swfy8iso0snq',
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.dark;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#contact-form').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header
        className={`hidden lg:block mt-12 self-stretch flex flex-row items-start justify-start box-border top-[0] z-[99] sticky max-w-full text-[1.25rem]`}
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
          <a
            href='#contact-form'
            onClick={handleClick}
            className={`m-0 flex flex-col items-center justify-center py-[0.85rem] px-[2rem] text-[1.25rem] rounded-[10rem] hover:bg-[#F1CB47] ${currentTheme.callBg} ${currentTheme.callTextColor} duration-300 ease-in-out`}
            style={{
              textDecoration: 'none',
            }}
          >
            Book Call
          </a>
        </div>
      </header>
      <header className='block lg:hidden mt-6 md:mt-12 w-full relative overflow-hidden flex flex-col items-start justify-start box-border gap-[4rem] text-center p-0'>
        <div className='m-0 p-0 self-stretch flex flex-row items-center justify-between'>
          <Link to={'/'}>
            <img
              className='m-0 p-0 h-[1.85rem] w-[9rem] md:h-[2.05rem] md:w-[10rem] self-stretch relative overflow-hidden shrink-0 object-cover'
              loading='lazy'
              alt='logo'
              src={currentTheme.logo}
            />
          </Link>
          <img
            className='m-0 p-0 h-[1rem] w-[1.2rem]'
            style={{ cursor: 'pointer' }}
            onClick={toggleMenu}
            src={currentTheme.breadcrumb}
          />
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-full z-[99999] bg-[#ff6e1f] transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='mt-6 md:mt-16 px-8 md:px-16 flex flex-row content-center justify-between'>
            <span className='w-[2rem] h-[2rem]' />
            <Link to={'/'}>
              <img
                className='pt-1 h-[1.85rem] w-[9rem] md:h-[2.05rem] md:w-[10rem] object-cover self-stretch relative overflow-hidden shrink-0'
                loading='lazy'
                alt='logo'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/ddhkrmchqvq2kbkzbkef'
              />
            </Link>
            <img
              className='h-[2rem] w-[2rem]'
              style={{ cursor: 'pointer' }}
              onClick={toggleMenu}
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/boazg5wp1udtahz4ta8b'
            />
          </div>

          <MobileNavBar menu={menu} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
