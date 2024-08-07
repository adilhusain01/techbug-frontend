import PropTypes from 'prop-types';

const ServiceCard = ({ title, image, description, features, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-left text-[2.5rem]  font-plus-jakarta-sans mq1425:flex-wrap`}
    >
      {isEven ? (
        <>
          <div className='w-[40.063rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] min-w-[40.063rem] max-w-full  mq825:min-w-full mq1425:flex-1'>
            <div className='self-stretch flex flex-col items-start justify-start gap-[1.75rem] max-w-full'>
              <div className='self-stretch relative leading-[3.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#9a8cfe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq825:text-[2rem] mq825:leading-[2.625rem] mq450:text-[1.5rem] mq450:leading-[2rem]'>
                {title}
              </div>
              <div className='w-[37.438rem] relative text-[2rem] leading-[2.5rem] inline-block max-w-full mq825:text-[1.625rem] mq825:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]'>
                {description}
              </div>
            </div>
            <div className='w-[33.5rem] flex flex-col items-start justify-start gap-[0.562rem] max-w-full text-[2rem]'>
              {features.map((feature, index) => (
                <span
                  key={index}
                  className={`self-stretch relative leading-[3.313rem] font-semibold  ${
                    index !== 0
                      ? 'border-white border-t-[1px] border-dashed'
                      : ''
                  } mq825:text-[1.625rem] mq825:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]`}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <img
            className='w-[40.5rem] relative rounded-11xl max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1425:flex-1'
            loading='lazy'
            alt=''
            src={image}
          />
        </>
      ) : (
        <>
          <img
            className='w-[40.5rem] relative rounded-11xl max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1425:flex-1'
            loading='lazy'
            alt=''
            src={image}
          />
          <div className='w-[40.063rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] min-w-[40.063rem] max-w-full  mq825:min-w-full mq1425:flex-1'>
            <div className='self-stretch flex flex-col items-start justify-start gap-[1.75rem] max-w-full'>
              <div className='self-stretch relative leading-[3.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ed763b,_#ffffff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq825:text-[2rem] mq825:leading-[2.625rem] mq450:text-[1.5rem] mq450:leading-[2rem]'>
                {title}
              </div>
              <div className='w-[37.438rem] relative text-[2rem] leading-[2.5rem] inline-block max-w-full mq825:text-[1.625rem] mq825:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]'>
                {description}
              </div>
            </div>
            <div className='w-[33.5rem] flex flex-col items-start justify-start gap-[0.562rem] max-w-full text-[2rem]'>
              {features.map((feature, index) => (
                <article
                  key={index}
                  className={`self-stretch relative leading-[3.313rem] font-semibold  ${
                    index !== 0
                      ? 'border-white border-t-[1px] border-dashed'
                      : ''
                  } mq825:text-[1.625rem] mq825:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]`}
                >
                  {feature}
                </article>
              ))}
            </div>
          </div>
        </>
      )}
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
