import PropTypes from 'prop-types';

const Slide = ({ name, designation, image_uri, review }) => (
  <div
    className='w-[43.063rem] h-[20rem] bg-whitesmoke overflow-hidden shrink-0 flex box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border'
    style={{
      backgroundImage: `url(https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/articles/vi4kukddehv4fwputvra)`,
    }}
  >
    <div className='w-[50%]'>
      <p>News</p>
      <h1>Celebrating Success:Our Projects Shine at The Webby Awards2024</h1>
    </div>
  </div>
);

Slide.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Slide;
