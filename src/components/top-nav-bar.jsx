import { useCallback } from "react";
import NavigationPill from "./navigation-pill";
import PropTypes from "prop-types";

const TopNavBar = ({ className = "" }) => {
  const onNavigationPillContainerClick = useCallback(() => {
    // Please sync "Portfolio" to the project
  }, []);

  return (
    <div
      className={`rounded-11xl bg-white flex flex-row items-start justify-start p-[0.375rem] gap-[0.25rem] text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans mq1325:hidden ${className}`}
    >
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[2.5rem] bg-gold rounded-3xl flex flex-row items-start justify-start hover:bg-goldenrod-200">
        <div className="relative text-[1.25rem] leading-[100%] font-semibold font-plus-jakarta-sans text-text-default-default text-left inline-block min-w-[3.688rem]">
          Home
        </div>
      </button>
      <NavigationPill
        title="Work"
        propPadding="0.75rem 2.75rem"
        propMinWidth="3.188rem"
        onNavigationPillContainerClick={onNavigationPillContainerClick}
      />
      <NavigationPill
        title="Services"
        propPadding="0.75rem 1.75rem"
        propMinWidth="5.188rem"
      />
      <NavigationPill
        title="Blog"
        propPadding="0.75rem 2.937rem"
        propMinWidth="2.813rem"
      />
      <NavigationPill title="About" />
    </div>
  );
};

TopNavBar.propTypes = {
  className: PropTypes.string,
};

export default TopNavBar;
