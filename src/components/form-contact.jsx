import InputField from "./input-field";
import TextareaField from "./textarea-field";
import Component from "./component";
import PropTypes from "prop-types";

const FormContact = ({ className = "" }) => {
  return (
    <section
      className={`bg-gray overflow-hidden flex flex-col items-start justify-start py-[4.593rem] px-[19.25rem] box-border relative gap-[2.5rem] min-w-[20rem] max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:gap-[1.25rem] mq800:pl-[9.625rem] mq800:pr-[9.625rem] mq800:box-border mq450:py-[1.938rem] mq450:px-[1.25rem] mq450:box-border mq1125:pt-[3rem] mq1125:pb-[3rem] mq1125:box-border ${className}`}
    >
      <img
        className="w-[39.444rem] h-[32.406rem] absolute !m-[0] top-[-3.625rem] left-[-14.937rem] object-contain"
        loading="lazy"
        alt=""
        src="/ellipse-3.svg"
      />
      <div className="w-[35.938rem] flex flex-row items-start justify-end max-w-full">
        <h1 className="m-0 relative text-inherit font-medium font-inherit mq800:text-[2rem] mq450:text-[1.5rem]">
          Let’s get in touch
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start relative max-w-full text-left text-[1rem] font-body-base">
        <img
          className="h-[35.65rem] w-[43.388rem] absolute !m-[0] right-[-39.7rem] bottom-[-16.556rem] object-contain"
          alt=""
          src="/ellipse-2.svg"
        />
        <div className="w-[51.5rem] flex flex-row flex-wrap items-start justify-start gap-[0.687rem_1.5rem] min-h-[34rem] max-w-full z-[1]">
          <InputField
            label="Name "
            description="Description"
            valuePlaceholder="Enter your first name"
            error="Error"
            hasDescription={false}
            hasLabel
            hasError={false}
          />
          <InputField
            label="Email"
            description="Description"
            valuePlaceholder="Enter your  email id"
            error="Error"
            hasDescription={false}
            hasLabel
            hasError={false}
          />
          <InputField
            label="Phone no."
            description="Description"
            valuePlaceholder="Enter your  phone no."
            error="Error"
            hasDescription={false}
            hasLabel
            hasError={false}
          />
          <InputField
            label="Company (Optional)"
            description="Description"
            valuePlaceholder="Enter your company name"
            error="Error"
            hasDescription
            hasLabel
            hasError
          />
          <TextareaField
            label="Message"
            description="Description"
            error="Hint"
            hasDescription
            hasError
            hasLabel
          />
        </div>
      </div>
      <div className="w-[33.813rem] flex flex-row items-start justify-end max-w-full">
        <Component />
      </div>
    </section>
  );
};

FormContact.propTypes = {
  className: PropTypes.string,
};

export default FormContact;
