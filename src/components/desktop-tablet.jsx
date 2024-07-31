import Greeting from './greeting';
import PropTypes from 'prop-types';

const DesktopTablet = ({ className = '' }) => {
  return (
    <div
      className={`w-full overflow-x-auto shrink-0 flex flex-row items-center justify-center gap-[1.875rem] max-w-full font-plus-jakarta-sans ${className}`}
    >
      <Greeting />
    </div>
  );
};

DesktopTablet.propTypes = {
  className: PropTypes.string,
};

export default DesktopTablet;
