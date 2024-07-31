import PropTypes from "prop-types";

const InputField = ({
  className = "",
  label = "Company (Optional)",
  description = "Description",
  valuePlaceholder,
  error = "Error",
  hasDescription = false,
  hasLabel = true,
  hasError = false,
}) => {
  return (
    <div
      className={`w-[51.5rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] text-white font-body-base ${className}`}
    >
      {hasLabel && (
        <div className="self-stretch relative text-[1.25rem] leading-[140%] font-semibold font-plus-jakarta-sans mq450:text-[1rem] mq450:leading-[1.375rem]">
          {label}
        </div>
      )}
      {hasDescription && (
        <div className="w-[15rem] relative leading-[140%] text-text-default-secondary">
          {description}
        </div>
      )}
      <div className="self-stretch rounded-xl bg-icon-default-tertiary box-border overflow-hidden flex flex-row items-center justify-start py-[1.187rem] px-[1.437rem] min-w-[15rem] max-w-full border-[1px] border-solid border-border-default-default">
        <input
          className="w-full [border:none] [outline:none] font-medium font-plus-jakarta-sans text-[1.125rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[100%] text-dimgray-100 text-left inline-block min-w-[15.625rem] max-w-full p-0"
          placeholder={valuePlaceholder}
          type="text"
        />
      </div>
      {hasError && (
        <div className="w-[2.313rem] relative leading-[140%] text-text-default-default">
          {error}
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  valuePlaceholder: PropTypes.string,
  error: PropTypes.string,
  hasDescription: PropTypes.bool,
  hasLabel: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default InputField;
