import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer py-[0.125rem] px-[0.25rem] bg-[transparent] w-[16.188rem] rounded-37xl box-border flex flex-row items-start justify-start gap-[0.75rem] border-[1px] border-solid border-goldenrod-100 ${className}`}
    >
      <img
        className="h-[3rem] w-[3rem] relative rounded-117xl overflow-hidden shrink-0"
        alt=""
        src="/arrowrightupline-1.svg"
      />
      <div className="h-[1.563rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border">
        <div className="relative text-[1.25rem] font-medium font-plus-jakarta-sans text-white text-left mq450:text-[1rem]">
          Send your enquiry
        </div>
      </div>
    </button>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
