import { useMemo } from "react";
import PropTypes from "prop-types";

const Box = ({
  className = "",
  appDevelopment,
  design,
  icons,
  propOverflow,
}) => {
  const iconsStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`flex-1 rounded-11xl [background:linear-gradient(233.07deg,_#1e1e1e_10.96%,_#5f5f5f)] overflow-hidden flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.75rem] min-w-[12.688rem] max-w-[12.938rem] min-h-[12.75rem] text-center text-[1.25rem] text-white font-plus-jakarta-sans mq1325:min-h-[auto] ${className}`}
    >
      <div className="h-[3.5rem] w-[11.919rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border shrink-0">
        <div className="self-stretch relative leading-[140%] font-semibold mq450:text-[1rem] mq450:leading-[1.375rem]">
          <p className="m-0">{appDevelopment}</p>
          <p className="m-0">{design}</p>
        </div>
      </div>
      <img
        className="h-[6.25rem] w-[6.25rem] relative object-contain shrink-0"
        alt=""
        src={icons}
        style={iconsStyle}
      />
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  appDevelopment: PropTypes.string,
  design: PropTypes.string,
  icons: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Box;
