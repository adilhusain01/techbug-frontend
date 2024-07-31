import PropTypes from "prop-types";

const BookACall = ({ className = "" }) => {
  return (
    <div
      className={`h-[3.5rem] rounded-81xl bg-white overflow-hidden flex flex-row items-start justify-start pt-[3.437rem] pb-[0rem] pr-[4.937rem] pl-[5rem] box-border ml-[-8.938rem] ${className}`}
    >
      <div className="h-[1.5rem] w-[1.5rem] relative rounded-[50%] bg-black" />
    </div>
  );
};

BookACall.propTypes = {
  className: PropTypes.string,
};

export default BookACall;
