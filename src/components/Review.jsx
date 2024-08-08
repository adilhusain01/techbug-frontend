import PropTypes from 'prop-types';

const Review = ({ name, designation, image_uri, review }) => (
  <article className='w-[20rem] md:w-[35rem] lg:w-[43rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[1rem] md:py-[2rem] lg:py-[4rem] px-[0.5rem] md:px-[2rem] lg:px-[3rem] box-border'>
    <div className='self-stretch flex flex-row items-center justify-start gap-[0.5rem] md:gap-[2rem]'>
      <div className='w-[5rem] md:w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[8rem] md:min-w-[10.25rem]'>
        <img
          className='w-[4.5rem] md:w-[7.313rem] h-[4.5rem] md:h-[7.313rem] relative rounded-[50%] object-cover'
          loading='lazy'
          alt={name}
          src={image_uri}
        />
        <div className='self-stretch flex flex-col items-center justify-start gap-[0.125rem]'>
          <div className='text-center text-lg self-stretch relative font-semibold inline-block'>
            {name}
          </div>
          <div className='text-center text-[0.9rem] md:text-[1rem] self-stretch relative font-semibold text-dimgray-200 inline-block'>
            {designation}
          </div>
        </div>
      </div>
      <blockquote className='m-0 my-auto flex-1 relative text-[0.9rem] md:text-xl lg:text-7xl font-medium inline-block min-w-[12rem] md:min-w-[16.125rem] tracking-tight md:tracking:normal leading-tight md:leading-normal'>
        {review}
      </blockquote>
    </div>
  </article>
);

Review.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
