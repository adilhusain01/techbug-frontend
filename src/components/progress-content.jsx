import PropTypes from "prop-types";

const ProgressContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem] max-w-full text-left text-[2.375rem] text-white font-plus-jakarta-sans ${className}`}
    >
      <div className="h-[40.5rem] flex-1 relative rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_27.46%,_#5f5f5f)] box-border min-w-[26.313rem] max-w-full z-[1] border-[1px] border-solid border-stroke-1 mq800:min-w-full">
        <div className="absolute top-[21.438rem] left-[2.5rem] w-[35.5rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap mq800:text-[1.875rem] mq800:leading-[2.25rem] mq450:text-[1.438rem] mq450:leading-[1.688rem]">
            {" "}
            Transparent Weekly Updates
          </h2>
          <h3 className="m-0 self-stretch relative text-[1.75rem] leading-[140%] font-normal font-inherit mq450:text-[1.375rem] mq450:leading-[1.938rem]">
            Our projects are managed in sprints. We collaborate with you to
            define objectives, break down the development process into
            manageable tasks, and deliver weekly progress reports.
          </h3>
        </div>
        <img
          className="absolute top-[0.438rem] left-[calc(50%_-_140px)] w-[17.5rem] h-[21.5rem] overflow-hidden"
          loading="lazy"
          alt=""
          src="/updates.svg"
        />
      </div>
      <div className="flex-1 rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_27.46%,_#5f5f5f)] box-border flex flex-col items-end justify-start pt-[2.562rem] px-[2.437rem] pb-[2.375rem] gap-[0.487rem] max-w-full border-[1px] border-solid border-stroke-1 mq800:pt-[1.688rem] mq800:pb-[1.563rem] mq800:box-border">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem]">
          <img
            className="h-[18.263rem] w-[19.006rem] relative"
            loading="lazy"
            alt=""
            src="/insights.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-[1.875rem] mq800:leading-[2.25rem] mq450:text-[1.438rem] mq450:leading-[1.688rem]">
            {" "}
            Detailed Weekly Insights
          </h2>
          <h3 className="m-0 self-stretch relative text-[1.75rem] leading-[140%] font-normal font-inherit mq450:text-[1.375rem] mq450:leading-[1.938rem]">
            Our projects are managed in sprints. We collaborate with you to
            define objectives, break down the development process into
            manageable tasks, and deliver weekly progress reports.
          </h3>
        </div>
      </div>
    </div>
  );
};

ProgressContent.propTypes = {
  className: PropTypes.string,
};

export default ProgressContent;
