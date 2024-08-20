import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MobileNavBar({ menu }) {
  return (
    <div className='text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mt-[7.5rem] md:mt-[10rem] flex flex-col items-center justify-center gap-[1.5rem] md:gap-[2rem] p-[1rem]'>
      <div className='flex flex-row items-center justify-center px-[1.5rem]'>
        <div className='flex-1 flex flex-col items-start justify-start gap-[1.5rem] md:gap-[2rem]'>
          <Link
            className='self-stretch relative leading-[3.313rem] font-semibold'
            to={'/'}
            style={{
              textDecoration: 'none',
              color: menu === 'Home' ? 'white' : 'black',
            }}
          >
            Home
          </Link>
          <Link
            className='self-stretch relative leading-[3.313rem] font-semibold'
            to={'/work'}
            style={{
              textDecoration: 'none',
              color: menu === 'Work' ? 'white' : 'black',
            }}
          >
            Work
          </Link>
          <Link
            className='self-stretch relative leading-[3.313rem] font-semibold'
            to={'/services'}
            style={{
              textDecoration: 'none',
              color: menu === 'Services' ? 'white' : 'black',
            }}
          >
            Services
          </Link>
          <Link
            className='self-stretch relative leading-[3.313rem] font-semibold'
            to={'/blog'}
            style={{
              textDecoration: 'none',
              color: menu === 'Blog' ? 'white' : 'black',
            }}
          >
            Blog
          </Link>
          <Link
            className='self-stretch relative leading-[3.313rem] font-semibold'
            to={'/about'}
            style={{
              textDecoration: 'none',
              color: menu === 'About' ? 'white' : 'black',
            }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

MobileNavBar.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default MobileNavBar;
