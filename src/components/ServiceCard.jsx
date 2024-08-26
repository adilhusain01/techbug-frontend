import PropTypes from 'prop-types';
import AnimatedSection from '../components/AnimatedSection';

const ServiceCard = ({ title, image, description, features, index }) => {
  const isEven = index % 2 === 0;

  return isEven ? (
    <AnimatedSection>
      <article className='flex flex-col-reverse md:grid md:grid-cols-2 md:justify-items-end w-[90%] lg:w-[85%] gap-[1rem] md:gap-[5rem] lg:gap-[1rem] mx-auto'>
        <div className='self-stretch flex flex-col items-center md:items-start justify-center gap-[0.5rem] md:gap-[1rem] lg:gap-[1.75rem]'>
          <h1 className='m-0 text-[1.5rem] md:text-[2.5rem] lg:text-[4rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#9a8cfe)] text-center md:text-left'>
            {title}
          </h1>
          <h2 className='m-0 text-[1rem] md:text-[1.5rem] lg:text-[2rem] leading-[1rem] md:leading-[1.75rem] lg:leading-[2.5rem] font-normal text-center md:text-left'>
            {description}
          </h2>
          <div className='flex flex-col items-center md:items-start justify-start gap-[0.5rem] '>
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
        <div className='w-full flex flex-col items-center justify-center md:items-end md:justify-end'>
          <img
            className='h-[20rem] w-full max-w-[21.5rem] md:h-[30rem] md:max-w-[18rem] lg:h-[43.5rem] lg:max-w-[35rem] rounded-11xl object-cover'
            loading='lazy'
            alt={title}
            src={image}
          />
        </div>
      </article>
    </AnimatedSection>
  ) : (
    <AnimatedSection>
      <article className='m-0 grid grid-cols-1 md:grid-cols-2 justify-items-end w-[90%] lg:w-[85%] gap-[1rem] md:gap-[5rem] lg:gap-[1rem] mx-auto'>
        <div className='w-full flex flex-col items-center justify-center md:items-start md:justify-start'>
          <img
            className='h-[20rem] w-full max-w-[21.5rem] md:h-[30rem] md:max-w-[18rem] lg:h-[43.5rem] lg:max-w-[35rem] rounded-11xl object-cover'
            loading='lazy'
            alt={title}
            src={image}
          />
        </div>
        <div className='self-stretch flex flex-col items-center md:items-end justify-center gap-[0.5rem] md:gap-[1rem] lg:gap-[1.75rem] md:px-0'>
          <h1 className='m-0 text-[1.5rem] md:text-[2.5rem] lg:text-[4rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#9a8cfe)] text-center md:text-right'>
            {title}
          </h1>
          <h2 className='m-0 text-[1rem] md:text-[1.5rem] lg:text-[2rem] leading-[1rem] md:leading-[1.75rem] lg:leading-[2.5rem] font-normal text-center md:text-right'>
            {description}
          </h2>
          <div className='flex flex-col items-center md:items-end justify-center gap-[0.5rem] '>
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
    </AnimatedSection>
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
