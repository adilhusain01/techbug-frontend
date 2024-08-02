import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationPill = ({
  title,
  propPadding,
  propMinWidth,
  onNavigationPillContainerClick,
  to,
  isActive,
}) => {
  const navigationPillStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundColor: isActive ? 'gold' : 'white',
    };
  }, [propPadding, isActive]);

  const titleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <Link
      to={to}
      className={`no-underline rounded-3xl bg-white flex flex-row items-start justify-start py-[0.75rem] px-[2.437rem] text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans}`}
      onClick={onNavigationPillContainerClick}
      style={navigationPillStyle}
    >
      <div
        className={`relative leading-[100%] font-medium inline-block min-w-[3.75rem]`}
        style={titleStyle}
      >
        {title}
      </div>
    </Link>
  );
};

NavigationPill.propTypes = {
  title: PropTypes.string,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  onNavigationPillContainerClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default NavigationPill;
