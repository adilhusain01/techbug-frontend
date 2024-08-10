import PropTypes from 'prop-types';

const PortfolioCard = ({ work, index }) => {
  const patternIndex = index % 4;

  const big = (
    <div
      className={`w-[37.5rem] flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-white`}
    >
      <div
        className='self-stretch flex flex-col items-center justify-end pt-[45rem] px-[1.5rem] pb-[2rem] gap-[1rem] bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image_uri})`,
        }}
      >
        <h2 className='m-0 self-stretch relative text-inherit font-bold font-[inherit]'>
          {work.title}
        </h2>
        <div className='self-stretch relative text-[1.5rem] font-medium'>
          {work.description}
        </div>
      </div>
    </div>
  );

  const small = (
    <div
      className={`w-[37.5rem] flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-white`}
    >
      <div
        className='self-stretch flex flex-col items-center justify-end pt-[30.75rem] px-[1.5rem] pb-[2rem] gap-[1rem] bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image_uri})`,
        }}
      >
        <h2 className='m-0 self-stretch relative text-inherit font-bold font-[inherit]'>
          {work.title}
        </h2>
        <div className='self-stretch relative text-[1.5rem] font-medium'>
          {work.description}
        </div>
      </div>
    </div>
  );

  return patternIndex === 0 || patternIndex === 3 ? big : small;
};

PortfolioCard.propTypes = {
  work: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default PortfolioCard;
