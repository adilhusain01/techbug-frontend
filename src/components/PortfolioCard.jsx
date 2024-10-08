import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import AnimatedSection from '../components/AnimatedSection';

const PortfolioCard = ({ work, index }) => {
  const patternIndex = index % 4;

  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  const handleMouseEnter = () => {
    api.start({ transform: 'scale(1.05)' });
  };

  const handleMouseLeave = () => {
    api.start({ transform: 'scale(1)' });
  };

  const big = (
    <AnimatedSection>
      <animated.article
        className={`h-auto w-full max-w-[20rem] md:max-w-[20rem] lg:max-w-[37.5rem] flex flex-col items-start justify-center gap-[1rem] text-white mx-auto`}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className='self-stretch flex flex-col items-center justify-end pt-[12.5rem] md:pt-[30rem] lg:pt-[45rem] px-[1rem] md:px-[1.5rem] pb-[1.5rem] md:pb-[2rem] gap-[0.25rem] md:gap-[1rem] bg-cover'
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image_uri})`,
          }}
        >
          <h2 className='m-0 self-stretch relative text-[1.2rem] md:text-[1.6rem] lg::text-[2rem] font-bold font-[inherit]'>
            {work.title}
          </h2>
          <p className='m-0 self-stretch relative text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem]'>
            {work.description}
          </p>
        </div>
      </animated.article>
    </AnimatedSection>
  );

  const small = (
    // <AnimatedSection>
    <animated.article
      className={`h-auto w-full max-w-[20rem] md:max-w-[20rem] lg:max-w-[37.5rem] flex flex-col items-start justify-center gap-[1rem] text-white mx-auto`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='self-stretch flex flex-col items-center justify-end pt-[12.5rem] md:pt-[20rem] lg:pt-[30rem] px-[1rem] md:px-[1.5rem] pb-[1.5rem] md:pb-[2rem] gap-[0.25rem] md:gap-[1rem] bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${work.image_uri})`,
        }}
      >
        <h2 className='m-0 self-stretch relative text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] font-bold font-[inherit]'>
          {work.title}
        </h2>
        <p className='m-0 self-stretch relative text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem]'>
          {work.description}
        </p>
      </div>
    </animated.article>
    // </AnimatedSection>
  );

  return patternIndex === 0 || patternIndex === 3 ? big : small;
};

PortfolioCard.propTypes = {
  work: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default PortfolioCard;
