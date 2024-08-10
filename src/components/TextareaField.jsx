import PropTypes from 'prop-types';

const TextareaField = ({ theme, label, name, value, onChange }) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-[1rem] font-body-base`}
    >
      <label
        htmlFor={name}
        className='self-stretch relative text-[0.8rem] md:text-[1.25rem] leading-[140%] font-semibold'
        style={{ color: theme.labelColor }}
      >
        {label}
      </label>

      <div
        className='self-stretch h-[8rem] rounded-xl  box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.6rem] md:py-[0.8rem] lg:py-[1rem] px-[1.2rem] md:px-[1.5rem] border-[1px] border-solid'
        style={{
          backgroundColor: theme.inputBg,
          borderColor: theme.inputBorderColor,
        }}
      >
        <textarea
          id={name}
          className='min-h-fit [border:none] [outline:none] font-medium text-[0.8rem] md:text-[1.125rem] bg-[transparent] flex-1 relative leading-[100%] text-left inline-block min-w-[15.625rem] max-w-full p-0'
          placeholder='Tell us more about your projects, needs, and timeline.'
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

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TextareaField;
