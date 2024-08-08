import PropTypes from 'prop-types';

const ProgressCard = ({ title, image_uri, description }) => (
  <article className='flex-1 rounded-2xl md:rounded-11xl [background:linear-gradient(191.03deg,_#1e1e1e_33%,_#5f5f5f)] box-border flex flex-col items-end justify-start p-[1.25rem] md:p-[2rem] lg:p-[4rem] gap-[0.5rem] w-full border-[1px] border-solid border-stroke-1'>
    <div className='self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem]'>
      <img
        className='h-[12rem] md:h-[15rem] lg:h-[21.5rem] w-[12rem] md:w-[11.75rem] lg:w-[17.5rem] relative'
        loading='lazy'
        alt={title}
        src={image_uri}
      />
    </div>
    <div className='self-stretch flex flex-col items-start justify-start gap-0 md:gap-[1.5rem]'>
      <h2 className='m-0 self-stretch relative text-2xl md:text-11xl lg:text-19xl leading-[2.875rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9ca06,_#ed763b),_#fff]'>
        {title}
      </h2>
      <h3 className='m-0 text-center self-stretch relative text-base md:text-2xl lg:text-9xl leading-tight md:leading-[140%] tracking-tight md:tracking:normal font-normal font-inherit'>
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
