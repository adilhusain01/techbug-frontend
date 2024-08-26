import { useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Box = ({ title, icon, propOverflow }) => {
  const navigate = useNavigate();
  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  const handleClick = () => {
    navigate('/work', { state: { selectedMenu: title } });
  };

  const iconImage = useMemo(() => {
    switch (icon) {
      case 'web_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/r8kmiebkbamkeweuxwy4';
      case 'app_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/r8kmiebkbamkeweuxwy4';
      case 'marketing_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/mivt8wjv2oonnsmkvahm';
      case 'cards_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/q0otq4teqsomedhq6scc';
      case 'automation_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/gpvponqoecugwgirbapn';
      case 'services_icon':
        return 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/u9nsdvsinmmjwavxlqi9';
      default:
        return null;
    }
  }, [icon]);

  const iconsStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const handleMouseEnter = () => {
    api.start({ transform: 'scale(1.05)' });
  };

  const handleMouseLeave = () => {
    api.start({ transform: 'scale(1)' });
  };

  return (
    <animated.article
      className='rounded-2xl md:rounded-11xl [background:linear-gradient(233deg,_#1e1e1e_33.1%,_#5f5f5f_90%)] flex flex-col items-center justify-center p-[0.75rem] box-border h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem] text-center'
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        className='h-auto w-full max-w-[1.75rem] md:max-w-[4rem] lg:max-w-[5rem] relative object-contain shrink-0'
        alt='icon'
        src={iconImage}
        style={iconsStyle}
        loading='lazy'
      />
      <h1 className='text-[0.5rem] md:text-base lg:text-xl text-white'>
        {title}
      </h1>
    </animated.article>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  propOverflow: PropTypes.any,
};

export default Box;
