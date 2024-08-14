import PropTypes from 'prop-types';
// const AnimatedSection = lazy(() => import('./AnimatedSection'));

const TextareaField = ({ theme, label, name, value, onChange }) => {
  return (
    // <AnimatedSection>
    <article
      className={`w-full flex flex-col items-start justify-start gap-[0.5rem] max-w-full font-plus-jakarta-sans`}
    >
      <label
        htmlFor={name}
        className='self-stretch relative text-[0.8rem] md:text-[1.25rem] leading-[140%] font-semibold'
        style={{ color: theme.labelColor }}
      >
        {label}
      </label>

      <div
        className='self-stretch h-[8rem] rounded-xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.6rem] md:py-[0.8rem] lg:py-[1rem] px-[1.2rem] md:px-[1.5rem] border-[1px] border-solid'
        style={{
          backgroundColor: theme.inputBg,
          borderColor: theme.inputBorderColor,
        }}
      >
        <textarea
          id={name}
          className='w-full [border:none] [outline:none] text-[0.8rem] md:text-[0.95rem] bg-[transparent] min-h-fit flex-1 relative leading-[100%] p-0'
          placeholder='Tell us more about your projects, needs, and timeline.'
          name={name}
          value={value}
          onChange={onChange}
          style={{ color: theme.inputTextColor }}
          autoComplete='off'
        />
      </div>
    </article>
    // </AnimatedSection>
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
