import PropTypes from 'prop-types';

const InputField = ({
  theme,
  label,
  valuePlaceholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div
      className={`w-[51.5rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] font-body-base`}
    >
      <label
        htmlFor={name}
        className='self-stretch relative text-[1.25rem] leading-[140%] font-semibold font-plus-jakarta-sans mq450:text-[1rem] mq450:leading-[1.375rem]'
        style={{ color: theme.labelColor }}
      >
        {label}
      </label>

      <div
        className='self-stretch rounded-xl  box-border overflow-hidden flex flex-row items-center justify-start py-[1.187rem] px-[1.437rem] min-w-[15rem] max-w-full border-[1px]'
        style={{
          backgroundColor: theme.inputBg,
          borderColor: theme.inputBorderColor,
        }}
      >
        <input
          id={name}
          className='w-full [border:none] [outline:none] font-medium font-plus-jakarta-sans text-[1.125rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[100%] text-dimgray-300 text-left inline-block min-w-[15.625rem] max-w-full p-0'
          placeholder={valuePlaceholder}
          type='text'
          name={name}
          value={value}
          onChange={onChange}
          style={{ color: theme.inputTextColor }}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  valuePlaceholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default InputField;
