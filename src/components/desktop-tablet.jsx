import Component1 from "./component1";
import PropTypes from "prop-types";

const DesktopTablet = ({ className = "" }) => {
  return (
    <div
      className={`w-[89rem] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[1.875rem] max-w-full text-left text-[6rem] text-white font-plus-jakarta-sans ${className}`}
    >
      <Component1
        propHeight="unset"
        propHeight1="unset"
        propWidth="unset"
        propDisplay="unset"
      />
      <Component1 />
    </div>
  );
};

DesktopTablet.propTypes = {
  className: PropTypes.string,
};

export default DesktopTablet;
