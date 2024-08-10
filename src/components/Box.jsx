import { useMemo } from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, icon, propOverflow }) => {
  let iconImage;
  switch (icon) {
    case 'web_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/r8kmiebkbamkeweuxwy4';
      break;
    case 'app_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/r8kmiebkbamkeweuxwy4';
      break;
    case 'marketing_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/mivt8wjv2oonnsmkvahm';
      break;
    case 'cards_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/q0otq4teqsomedhq6scc';
      break;
    case 'automation_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/gpvponqoecugwgirbapn';
      break;
    case 'services_icon':
      iconImage =
        'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/icons/u9nsdvsinmmjwavxlqi9';
      break;
    default:
      iconImage = null;
  }

  const iconsStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`rounded-2xl md:rounded-11xl [background:linear-gradient(233deg,_#1e1e1e_33.1%,_#5f5f5f_90%)] flex flex-col items-center justify-center p-[0.5rem] box-border w-[7rem] md:w-[11rem] lg:w-[13rem] h-[7rem] md:h-[11rem] lg:h-[13rem] text-center`}
    >
      <img
        className='h-[2rem] md:h-[4rem] lg:h-[6.25rem] w-[2rem] md:w-[4rem] lg:w-[6.25rem] relative object-contain shrink-0'
        alt='icon'
        src={iconImage}
        style={iconsStyle}
        loading='lazy'
      />
      <h1 className='text-[0.8rem] md:text-base lg:text-xl text-white'>
        {title}
      </h1>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Box;
