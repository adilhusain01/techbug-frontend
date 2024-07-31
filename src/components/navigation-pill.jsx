import { useMemo } from "react";
import PropTypes from "prop-types";

const NavigationPill = ({
  className = "",
  title,
  propPadding,
  propMinWidth,
  onNavigationPillContainerClick,
}) => {
  const navigationPillStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const titleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`rounded-3xl bg-white flex flex-row items-start justify-start py-[0.75rem] px-[2.437rem] text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans ${className}`}
      style={navigationPillStyle}
      onClick={onNavigationPillContainerClick}
    >
      <div
        className="relative leading-[100%] font-medium inline-block min-w-[3.75rem]"
        style={titleStyle}
      >
        {title}
      </div>
    </div>
  );
};

NavigationPill.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onNavigationPillContainerClick: PropTypes.func,
};

export default NavigationPill;
