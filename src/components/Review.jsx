import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';

const Review = ({ name, designation, image_uri, review }) => {
  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  const handleMouseEnter = () => {
    api.start({ transform: 'scale(1.05)' });
  };

  const handleMouseLeave = () => {
    api.start({ transform: 'scale(1)' });
  };

  return (
    <animated.article
      className='w-[20rem] md:w-[35rem] lg:w-[43rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[1.5rem] md:py-[2rem] lg:py-[4rem] px-[0.5rem] md:px-[2rem] lg:px-[3rem] box-border'
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-row items-center justify-start gap-[0.5rem] md:gap-[2rem]'>
        <div className='min-w-fit md:w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] md:min-w-[10.25rem]'>
          <img
            className='w-[4rem] md:w-[7.313rem] h-[4rem] md:h-[7.313rem] relative rounded-[50%] object-cover'
            loading='lazy'
            alt={name}
            src={image_uri}
          />
          <div className='self-stretch flex flex-col items-center justify-start gap-0 md:gap-[0.125rem]'>
            <h2 className='m-0 text-center text-[0.8rem] md:text-[1.2rem] lg:text-[1.4rem] self-stretch relative font-semibold inline-block'>
              {name}
            </h2>
            <div className='text-center text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] self-stretch relative font-semibold text-dimgray-200 inline-block'>
              {designation}
            </div>
          </div>
        </div>
        <blockquote className='m-0 my-auto flex-1 relative text-[0.8rem] md:text-lg lg:text-7xl font-medium inline-block min-w-[12rem] md:min-w-[16.125rem] tracking-tight md:tracking:normal leading-tighter md:leading-normal text-wrap'>
          {review}
        </blockquote>
      </div>
    </animated.article>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
