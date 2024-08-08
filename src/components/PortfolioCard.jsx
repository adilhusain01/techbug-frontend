import PropTypes from 'prop-types';

const PortfolioCard = ({ work, index }) => {
  const patternIndex = index % 4;

  const big = (
    <div
      className={`w-[37.5rem] flex flex-col items-start justify-start max-w-full text-left text-[2rem] text-white font-plus-jakarta-sans`}
    >
      <div
        className="self-stretch flex flex-col items-center justify-end pt-[44.75rem] px-[1.5rem] pb-[2rem] gap-[1rem] bg-[url('/public/web-dev2@3x.png')] bg-cover bg-no-repeat bg-[top] lg:pt-[4.25rem] lg:pb-[1.313rem] lg:box-border"
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
      className={`w-[37.5rem] flex flex-col items-start justify-center gap-[1rem] max-w-full text-left text-[2rem] text-white font-plus-jakarta-sans`}
    >
      <div
        className="self-stretch flex flex-col items-center justify-end pt-[30.75rem] px-[1.5rem] pb-[2rem] gap-[1rem] bg-[url('/public/app-dev2@3x.png')] bg-cover bg-no-repeat bg-[top]"
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
