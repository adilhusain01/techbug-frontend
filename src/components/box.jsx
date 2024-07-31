import { useMemo } from 'react';
import PropTypes from 'prop-types';
import web_icon from '../assets/web_icon.svg';
import marketing_icon from '../assets/marketing_icon.svg';
import cards_icon from '../assets/cards_icon.svg';
import automation_icon from '../assets/automation_icon.svg';
import services_icon from '../assets/services_icon.svg';

const Box = ({ className = '', title, icon, propOverflow }) => {
  let iconImage;
  switch (icon) {
    case 'web_icon':
      iconImage = web_icon;
      break;
    case 'app_icon':
      iconImage = web_icon;
      break;
    case 'marketing_icon':
      iconImage = marketing_icon;
      break;
    case 'cards_icon':
      iconImage = cards_icon;
      break;
    case 'automation_icon':
      iconImage = automation_icon;
      break;
    case 'services_icon':
      iconImage = services_icon;
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
      className={`rounded-11xl [background:linear-gradient(233.07deg,_#1e1e1e_10.96%,_#5f5f5f)] flex flex-col items-center justify-center p-[0.25rem] box-border w-[13rem] h-[13rem] text-center mq1325:min-h-[auto] ${className}`}
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
