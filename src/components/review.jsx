import PropTypes from 'prop-types';

const Review = ({ name, designation, image_uri, review }) => (
  <div className='w-[43.063rem] rounded-xl bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4rem] px-[3rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border'>
    <div className='self-stretch flex flex-row items-center justify-start gap-[2rem] max-w-full mq800:flex-wrap mq800:gap-[1rem]'>
      <div className='w-[10.25rem] flex flex-col items-center justify-start gap-[0.5rem] min-w-[10.25rem] mq800:flex-1'>
        <img
          className='w-[7.313rem] h-[7.313rem] relative rounded-[50%] object-cover'
          loading='lazy'
          alt={name}
          src={image_uri}
        />
        <div className='self-stretch flex flex-col items-center justify-start gap-[0.125rem]'>
          <div className='self-stretch h-[1.563rem] relative font-semibold inline-block mq450:text-[1rem]'>
            {name}
          </div>
          <div className='self-stretch h-[1.25rem] relative text-[1rem] font-semibold text-dimgray-200 text-center inline-block'>
            {designation}
          </div>
        </div>
      </div>
      <blockquote className='m-0 h-[12.375rem] flex-1 relative text-[1.625rem] font-medium inline-block min-w-[16.125rem] max-w-full mq450:text-[1.313rem]'>
        {review}
      </blockquote>
    </div>
  </div>
);

Review.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
