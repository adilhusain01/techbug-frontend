import PropTypes from "prop-types";

const TextareaField = ({
  className = "",
  label = "Message",
  description = "Description",
  error = "Hint",
  hasDescription = false,
  hasError = false,
  hasLabel = true,
}) => {
  return (
    <div
      className={`w-[51.438rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] text-text-default-secondary font-body-base ${className}`}
    >
      {hasLabel && (
        <div className="self-stretch relative text-[1.25rem] leading-[140%] font-semibold font-plus-jakarta-sans text-white mq450:text-[1rem] mq450:leading-[1.375rem]">
          {label}
        </div>
      )}
      {hasDescription && (
        <div className="w-[15rem] relative leading-[140%]">{description}</div>
      )}
      <div className="self-stretch h-[5rem] rounded-xl bg-icon-default-tertiary box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1rem] pb-[0.375rem] pr-[1.375rem] pl-[1.5rem] relative min-w-[15rem] min-h-[5rem] max-w-full border-[1px] border-solid border-border-default-default">
        <input
          className="w-[calc(100%_-_52.6px)] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-[1.125rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[100%] text-dimgray-100 text-left inline-block min-w-[15.625rem] max-w-full p-0"
          placeholder="Tell us more about your projects, needs, and timeline. "
          type="text"
        />
        <img
          className="h-[0.413rem] w-[0.413rem] absolute !m-[0] right-[0.25rem] bottom-[0.313rem]"
          alt=""
          src="/drag.svg"
        />
      </div>
      {hasError && (
        <div className="w-[15rem] relative leading-[140%]">{error}</div>
      )}
    </div>
  );
};

TextareaField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  hasDescription: PropTypes.bool,
  hasError: PropTypes.bool,
  hasLabel: PropTypes.bool,
};

export default TextareaField;
