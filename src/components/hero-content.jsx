import HeroSectionButton from "./hero-section-button";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-[4.375rem] text-white font-plus-jakarta-sans ${className}`}
    >
      <div className="w-[65.875rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]">
        <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-inherit mq800:text-[3.5rem] mq800:leading-[3.5rem] mq450:text-[2.625rem] mq450:leading-[2.625rem]">
          Building Customer Experiences
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.875rem] box-border max-w-full text-[1.875rem] mq1125:pl-[2.438rem] mq1125:pr-[2.438rem] mq1125:box-border">
          <h3 className="m-0 flex-1 relative text-inherit leading-[149%] font-medium font-inherit inline-block max-w-full mq800:text-[1.5rem] mq800:leading-[2.25rem] mq450:text-[1.125rem] mq450:leading-[1.688rem]">
            At Techbug, we are dedicated to provide comprehensive digital
            solutions to small and medium-sized businesses, individual
            professionals, and freelancers.
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <HeroSectionButton />
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
