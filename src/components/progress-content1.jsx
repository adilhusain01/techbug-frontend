import PropTypes from "prop-types";

const ProgressContent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem] max-w-full text-left text-[2.375rem] text-white font-plus-jakarta-sans ${className}`}
    >
      <div className="h-[40.5rem] flex-1 relative rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_27.46%,_#5f5f5f)] box-border min-w-[26.313rem] max-w-full border-[1px] border-solid border-stroke-1 mq800:min-w-full">
        <h2 className="m-0 absolute top-[21.438rem] left-[2.5rem] text-inherit leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[35rem] h-[2.875rem] mq800:text-[1.875rem] mq800:leading-[2.25rem] mq450:text-[1.438rem] mq450:leading-[1.688rem]">
          Consistent Weekly Progress
        </h2>
        <h3 className="m-0 absolute top-[25.813rem] left-[2.5rem] text-[1.75rem] leading-[140%] font-normal font-inherit flex items-center w-[35.5rem] mq450:text-[1.375rem] mq450:leading-[1.938rem]">
          Our projects are managed in sprints. We collaborate with you to define
          objectives, break down the development process into manageable tasks,
          and deliver weekly progress reports.
        </h3>
        <div className="absolute top-[2.438rem] left-[calc(50%_-_192px)] w-[24.063rem] h-[19.75rem] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0rem] top-[3.938rem] [transform:scale(1.397)]"
            loading="lazy"
            alt=""
            src="/progress.svg"
          />
        </div>
      </div>
      <div className="h-[40.5rem] flex-1 relative rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_27.46%,_#5f5f5f)] box-border min-w-[26.313rem] max-w-full border-[1px] border-solid border-stroke-1 mq800:min-w-full">
        <h2 className="m-0 absolute top-[21.438rem] left-[2.5rem] text-inherit leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[35rem] h-[2.875rem] mq800:text-[1.875rem] mq800:leading-[2.25rem] mq450:text-[1.438rem] mq450:leading-[1.688rem]">
          {" "}
          Weekly Progress Tracking
        </h2>
        <h3 className="m-0 absolute top-[25.813rem] left-[2.5rem] text-[1.75rem] leading-[140%] font-normal font-inherit flex items-center w-[35.5rem] mq450:text-[1.375rem] mq450:leading-[1.938rem]">
          Our projects are managed in sprints. We collaborate with you to define
          objectives, break down the development process into manageable tasks,
          and deliver weekly progress reports.
        </h3>
        <img
          className="absolute top-[2.063rem] left-[calc(50%_-_129px)] w-[16.188rem] h-[19.95rem]"
          alt=""
          src="/updates-1.svg"
        />
      </div>
    </div>
  );
};

ProgressContent1.propTypes = {
  className: PropTypes.string,
};

export default ProgressContent1;
