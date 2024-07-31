import { useMemo } from "react";
import PropTypes from "prop-types";

const Component1 = ({
  className = "",
  propHeight,
  propHeight1,
  propWidth,
  propDisplay,
}) => {
  const helloStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const namasteStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const ciaoStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.25rem] pb-[0.187rem] pr-[3.125rem] pl-[0.625rem] box-border relative gap-[5rem] max-w-full text-left text-[6rem] text-white font-plus-jakarta-sans mq800:gap-[2.5rem] mq1325:flex-wrap mq1325:pr-[1.563rem] mq1325:box-border mq450:gap-[1.25rem] ${className}`}
    >
      <h1
        className="m-0 h-[7.563rem] w-[15rem] relative text-inherit font-semibold font-inherit inline-block mq800:text-[3rem] mq450:text-[1.813rem]"
        style={helloStyle}
      >
        Hello
      </h1>
      <h1
        className="m-0 h-[7.563rem] w-[26.063rem] relative text-inherit font-semibold font-inherit inline-block max-w-full mq800:text-[3rem] mq450:text-[1.813rem]"
        style={namasteStyle}
      >
        Namaste
      </h1>
      <div className="h-[1.25rem] w-[1.25rem] absolute !m-[0] top-[calc(50%_-_10px)] left-[17.5rem] rounded-[50%] bg-white" />
      <div className="h-[1.25rem] w-[1.25rem] absolute !m-[0] top-[calc(50%_-_10px)] right-[36.875rem] rounded-[50%] bg-white" />
      <div className="h-[1.25rem] w-[1.25rem] absolute !m-[0] top-[calc(50%_-_10px)] right-[18.313rem] rounded-[50%] bg-white" />
      <div className="h-[1.25rem] w-[1.25rem] absolute !m-[0] top-[calc(50%_-_10px)] right-[0rem] rounded-[50%] bg-white" />
      <div className="h-[0.5rem] w-[3rem] absolute !m-[0] right-[-15.5rem] bottom-[2.063rem] box-border border-t-[8px] border-solid border-white" />
      <h1
        className="m-0 w-[13.563rem] relative text-inherit font-semibold font-inherit inline-block mq800:text-[3rem] mq450:text-[1.813rem]"
        style={ciaoStyle}
      >
        Ciao
      </h1>
      <h1 className="m-0 w-[13.313rem] relative text-inherit font-semibold font-inherit inline-block mq800:text-[3rem] mq450:text-[1.813rem]">
        Hola
      </h1>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Component1;
