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
      className={`w-[50rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full font-body-base`}
    >
      <label
        htmlFor={name}
        className='self-stretch relative text-[0.8rem] md:text-[1.25rem] leading-[140%] font-semibold'
        style={{ color: theme.labelColor }}
      >
        {label}
      </label>

      <div
        className='self-stretch rounded-xl box-border overflow-hidden flex flex-row items-center justify-start py-[0.6rem] md:py-[0.8rem] lg:py-[1rem] px-[1.2rem] md:px-[1.5rem] border-[1px] border-solid'
        style={{
          backgroundColor: theme.inputBg,
          borderColor: theme.inputBorderColor,
        }}
      >
        <input
          id={name}
          className={`w-full [border:none] [outline:none] font-medium text-[0.8rem] md:text-[1.125rem] bg-[transparent] min-h-fit flex-1 relative leading-[100%] p-0`}
          placeholder={valuePlaceholder}
          type='text'
          name={name}
          value={value}
          onChange={onChange}
          style={{ color: theme.inputTextColor }}
          autoComplete='off'
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
