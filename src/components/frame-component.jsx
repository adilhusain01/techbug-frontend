import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[3.75rem] pb-[2.5rem] box-border max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <h1 className="m-0 relative text-inherit font-medium font-inherit mq800:text-[2rem] mq450:text-[1.5rem]">
            Our Testimonials
          </h1>
        </div>
        <div className="w-[82.5rem] overflow-x-auto flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[1.25rem] max-w-full text-left text-[1.25rem] text-text-default-default">
          <div className="w-[43.063rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4rem] px-[3rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2rem] max-w-full mq800:flex-wrap mq800:gap-[1rem]">
              <div className="w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[10.25rem] mq800:flex-1">
                <img
                  className="w-[7.313rem] h-[7.313rem] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-88@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="relative font-semibold mq450:text-[1rem]">
                    Julie Brissonneau
                  </div>
                  <div className="self-stretch relative text-[1rem] font-semibold text-dimgray-200 text-center">
                    Managing Director
                  </div>
                </div>
              </div>
              <blockquote className="m-0 flex-1 relative text-[1.625rem] font-medium inline-block min-w-[16.125rem] max-w-full mq450:text-[1.313rem]">
                “We’ve been impressed with Techbug’s creativity and ability to
                develop innovative designs. They use the latest technology and
                are always looking to improve.”
              </blockquote>
            </div>
          </div>
          <div className="w-[43.063rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4rem] px-[3rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2rem] max-w-full mq800:flex-wrap mq800:gap-[1rem]">
              <div className="w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[10.25rem] mq800:flex-1">
                <img
                  className="w-[7.313rem] h-[7.313rem] relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-88-1@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="relative font-semibold mq450:text-[1rem]">
                    Julie Brissonneau
                  </div>
                  <div className="self-stretch relative text-[1rem] font-semibold text-dimgray-200 text-center">
                    Managing Director
                  </div>
                </div>
              </div>
              <blockquote className="m-0 flex-1 relative text-[1.625rem] font-medium inline-block min-w-[16.125rem] max-w-full mq450:text-[1.313rem]">
                “We’ve been impressed with Techbug’s creativity and ability to
                develop innovative designs. They use the latest technology and
                are always looking to improve.”
              </blockquote>
            </div>
          </div>
          <div className="w-[43.063rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4rem] px-[3rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2rem] max-w-full mq800:flex-wrap mq800:gap-[1rem]">
              <div className="w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[10.25rem] mq800:flex-1">
                <img
                  className="w-[7.313rem] h-[7.313rem] relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-88-2@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.125rem]">
                  <div className="self-stretch h-[1.563rem] relative font-semibold inline-block mq450:text-[1rem]">
                    Julie Brissonneau
                  </div>
                  <div className="self-stretch h-[1.25rem] relative text-[1rem] font-semibold text-dimgray-200 text-center inline-block">
                    Managing Director
                  </div>
                </div>
              </div>
              <blockquote className="m-0 h-[12.375rem] flex-1 relative text-[1.625rem] font-medium inline-block min-w-[16.125rem] max-w-full mq450:text-[1.313rem]">
                “We’ve been impressed with Techbug’s creativity and ability to
                develop innovative designs. They use the latest technology and
                are always looking to improve.”
              </blockquote>
            </div>
          </div>
          <div className="w-[43.063rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4rem] px-[3rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2rem] max-w-full mq800:flex-wrap mq800:gap-[1rem]">
              <div className="w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[10.25rem] mq800:flex-1">
                <img
                  className="w-[7.313rem] h-[7.313rem] relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-88-3@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch h-[1.563rem] relative font-semibold inline-block mq450:text-[1rem]">
                    Julie Brissonneau
                  </div>
                  <div className="self-stretch h-[1.25rem] relative text-[1rem] font-semibold text-dimgray-200 text-center inline-block">
                    Managing Director
                  </div>
                </div>
              </div>
              <blockquote className="m-0 h-[12.375rem] flex-1 relative text-[1.625rem] font-medium inline-block min-w-[16.125rem] max-w-full mq450:text-[1.313rem]">
                “We’ve been impressed with Techbug’s creativity and ability to
                develop innovative designs. They use the latest technology and
                are always looking to improve.”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="h-[0.5rem] w-[38.625rem] bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
            <div className="h-[0.688rem] w-[24.5rem] relative bg-gold max-w-[calc(100%_-_0px)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
