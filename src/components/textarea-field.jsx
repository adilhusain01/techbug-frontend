import PropTypes from 'prop-types';

const TextareaField = ({ label, name, value, onChange }) => {
  return (
    <div
      className={`w-[51.438rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] text-text-default-secondary font-body-base`}
    >
      <label
        htmlFor={name}
        className='self-stretch relative text-[1.25rem] leading-[140%] font-semibold font-plus-jakarta-sans mq450:text-[1rem] mq450:leading-[1.375rem]'
      >
        {label}
      </label>

      <div className='self-stretch h-[8rem] rounded-xl bg-icon-default-tertiary box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1rem] pb-[0.375rem] pr-[1.375rem] pl-[1.5rem] relative min-w-[15rem] min-h-[5rem] max-w-full border-[1px] border-solid border-border-default-default'>
        <textarea
          id={name}
          className='w-[calc(100%_-_52.6px)] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-[1.125rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[100%] text-dimgray-100 text-left inline-block min-w-[15.625rem] max-w-full p-0'
          placeholder='Tell us more about your projects, needs, and timeline.'
          name={name}
          value={value}
          onChange={onChange}
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
};

export default TextareaField;
