// ProgressCard.jsx
import PropTypes from 'prop-types';

const ProgressCard = ({ title, image_uri, description }) => (
  <article className='flex-1 rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_33%,_#5f5f5f)] box-border flex flex-col items-end justify-start p-[4rem] gap-[0.5rem] max-w-full border-[1px] border-solid border-stroke-1 mq800:pt-[1.688rem] mq800:pb-[1.563rem] mq800:box-border'>
    <div className='self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem]'>
      <img
        className='h-[21.5rem] w-[17.5rem] relative'
        loading='lazy'
        alt={title}
        src={image_uri}
      />
    </div>
    <div className='self-stretch flex flex-col items-start justify-start gap-[1.5rem]'>
      <h2 className='m-0 self-stretch relative text-inherit leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-[1.875rem] mq800:leading-[2.25rem] mq450:text-[1.438rem] mq450:leading-[1.688rem]'>
        {title}
      </h2>
      <h3 className='m-0 self-stretch relative text-[1.75rem] leading-[140%] font-normal font-inherit mq450:text-[1.375rem] mq450:leading-[1.938rem]'>
        {description}
      </h3>
    </div>
  </article>
);

ProgressCard.propTypes = {
  title: PropTypes.string.isRequired,
  image_uri: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgressCard;