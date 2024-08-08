import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationPill = ({
  title,
  onNavigationPillContainerClick,
  to,
  isActive,
  theme,
}) => {
  const navigationPillStyle = useMemo(() => {
    return {
      backgroundColor: isActive ? `${theme.activeMenuBg}` : `${theme.menuBg}`,
      color: isActive ? `${theme.activeTextColor}` : `${theme.textColor}`,
    };
  }, [isActive]);

  return (
    <Link
      to={to}
      className={`no-underline rounded-3xl flex flex-row items-start justify-start py-[0.75rem] px-[2.5rem] text-[1.25rem] text-text-default-default font-plus-jakarta-sans}`}
      onClick={onNavigationPillContainerClick}
      style={navigationPillStyle}
    >
      <p
        className={`m-0 relative leading-[100%] font-medium inline-block min-w-[3.75rem]`}
      >
        {title}
      </p>
    </Link>
  );
};

NavigationPill.propTypes = {
  title: PropTypes.string,
  onNavigationPillContainerClick: PropTypes.func,
  isActive: PropTypes.bool,
  theme: PropTypes.object,
};

export default NavigationPill;
