import { useMemo } from 'react';
import PropTypes from 'prop-types';

const Box = ({ className = '', title, icon, propOverflow }) => {
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
      className={`rounded-11xl [background:linear-gradient(233deg,_#1e1e1e_33.1%,_#5f5f5f_90%)] flex flex-col items-center justify-center p-[0.25rem] box-border w-[13rem] h-[13rem] text-center mq1325:min-h-[auto] ${className}`}
    >
      <img
        className='h-[6.25rem] w-[6.25rem] relative object-contain shrink-0'
        alt=''
        src={iconImage}
        style={iconsStyle}
      />
      <h1 className=' text-[1.25rem] text-white font-plus-jakarta-sans'>
        {title}
      </h1>
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Box;
