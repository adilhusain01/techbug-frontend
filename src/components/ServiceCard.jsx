import PropTypes from 'prop-types';

const ServiceCard = ({ title, image, description, features, index }) => {
  const isEven = index % 2 === 0;

  return isEven ? (
    <article className='m-0 grid grid-cols-1 md:grid-cols-2 justify-center content-center gap-[1rem] md:gap-[2.5rem] lg:gap-[5rem]'>
      <div className='self-stretch flex flex-col items-start justify-center gap-[0.5rem] md:gap-[1rem] lg:gap-[1.75rem] '>
        <h1 className='m-0 text-[1.5rem] md:text-[2.5rem] lg:text-[4rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#9a8cfe)]'>
          {title}
        </h1>
        <h2 className='m-0 text-[1rem] md:text-[1.5rem] lg:text-[2rem] leading-[1rem] md:leading-[1.75rem] lg:leading-[2.5rem] font-normal'>
          {description}
        </h2>
        <div className='flex flex-col items-start justify-start gap-[0.5rem] '>
          {features.map((feature, index) => (
            <p
              key={index}
              className={`m-0 py-1 text-[0.9rem] md:text-[1.25rem] lg:text-[2rem] font-normal ${
                index !== 0 ? 'border-white border-t-[1px] border-dashed' : ''
              }`}
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
      <img
        className='h-[20rem] w-[21.5rem] md:h-[30rem] md:w-[22rem] lg:h-[43.5rem] lg:w-[37.5rem] rounded-11xl object-cover mx-auto'
        loading='lazy'
        alt={title}
        src={image}
      />
    </article>
  ) : (
    <article className='m-0 grid grid-cols-1 md:grid-cols-2 justify-center content-center gap-[1rem] md:gap-[2.5rem] lg:gap-[5rem]'>
      <img
        className='h-[20rem] w-[21.5rem] md:h-[30rem] md:w-[22rem] lg:h-[43.5rem] lg:w-[37.5rem] rounded-11xl object-cover mx-auto'
        loading='lazy'
        alt={title}
        src={image}
      />
      <div className='self-stretch flex flex-col items-end justify-center gap-[0.5rem] md:gap-[1rem] lg:gap-[1.75rem] '>
        <h1 className='m-0 text-[1.5rem] md:text-[2.5rem] lg:text-[4rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#9a8cfe)]'>
          {title}
        </h1>
        <h2 className='m-0 text-[1rem] md:text-[1.5rem] lg:text-[2rem] leading-[1rem] md:leading-[1.75rem] lg:leading-[2.5rem] font-normal text-right'>
          {description}
        </h2>
        <div className='flex flex-col items-end justify-start gap-[0.5rem] '>
          {features.map((feature, index) => (
            <p
              key={index}
              className={`m-0 py-1 text-[0.9rem] md:text-[1.25rem] lg:text-[2rem] font-normal ${
                index !== 0 ? 'border-white border-t-[1px] border-dashed' : ''
              }`}
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  index: PropTypes.number,
};
