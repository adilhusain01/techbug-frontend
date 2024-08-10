import Greeting from './Greeting';

const DesktopTablet = () => {
  return (
    <div
      className={`w-full overflow-x-auto shrink-0 flex flex-row items-center justify-center gap-[1.875rem] max-w-full`}
    >
      <Greeting />
    </div>
  );
};

export default DesktopTablet;
