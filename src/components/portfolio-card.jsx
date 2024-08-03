import PropTypes from 'prop-types';

const PortfolioCard = ({ work, index }) => {
  const patternIndex = index % 4;
  const isBig = patternIndex === 0 || patternIndex === 3;

  return (
    <div
      className={`w-[37.5rem] flex flex-col items-start justify-${
        isBig ? 'start' : 'center'
      } gap-[1rem] max-w-full text-left text-[2rem] text-white font-plus-jakarta-sans`}
    >
      <div
        className={`relative self-stretch flex flex-col items-center justify-end pt-[${
          isBig ? '44.75rem' : '30.75rem'
        }] px-[1.5rem] pb-[2rem] gap-[1rem] bg-cover bg-no-repeat bg-[top] ${
          isBig
            ? 'lg:pt-[4.25rem] lg:pb-[1.313rem] lg:box-border mq450:pb-[1.25rem] mq450:box-border'
            : 'mq825:pt-[4.25rem] mq825:pb-[1.313rem] mq825:box-border'
        }`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image_uri})`,
        }}
      >
        <h2 className='m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-[1.188rem] mq825:text-[1.625rem]'>
          {work.title}
        </h2>
        <div className='self-stretch relative text-[1.5rem] font-medium mq450:text-[1.188rem]'>
          {work.description}
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  work: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default PortfolioCard;