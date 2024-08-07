import PropTypes from 'prop-types';

const NewsCard = ({ title, image_uri }) => (
  <article className='w-[32.25rem] flex flex-col items-start justify-end box-border max-w-full shrink-0'>
    <img
      className='w-full relative object-cover z-[1] mq800:flex-1'
      alt='News'
      src={image_uri}
    />
    <div className='p-[0.5rem] box-border w-full bg-[#FBEBD9]'>
      <p className='my-[0.2rem] text-[0.6rem]'>News</p>
      <h2 className='m-0 text-[1rem]'>{title}</h2>
    </div>
  </article>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
};

export default NewsCard;
