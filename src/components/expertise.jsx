import Box from './box';
import PropTypes from 'prop-types';

const Expertise = ({ className = '' }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[9rem] box-border max-w-full shrink-0 text-center text-[4.25rem] text-gray font-plus-jakarta-sans mq800:pb-[5.875rem] mq800:box-border ${className}`}
    >
      <div className='flex-1 flex flex-col items-center justify-start max-w-full'>
        <div className="w-[88.625rem] rounded-13xl flex flex-col items-center justify-start pt-[2.5rem] px-[1.25rem] pb-[10.687rem] box-border bg-[url('/public/our-expertise@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[23.188rem] max-w-full mq450:pt-[1.625rem] mq450:pb-[6.938rem] mq450:box-border">
          <div className='w-[72.313rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-full'>
            <h1 className='m-0 self-stretch relative text-inherit font-semibold font-inherit mq800:text-[3.375rem] mq450:text-[2.563rem]'>
              Our Expertise
            </h1>
            <h1 className='m-0 relative text-[2.5rem] font-medium font-inherit text-left mq800:text-[2rem] mq450:text-[1.5rem]'>
              Techbug provides a range of services to choose from, dive in!
            </h1>
          </div>
        </div>
        <div className='self-stretch flex flex-row items-start justify-center pt-[0rem] px-[2.5rem] pb-[3rem] gap-[1.5rem] z-[1] mt-[-6rem] text-[1.25rem] text-white mq1325:flex-wrap'>
          <div className='flex-1 rounded-11xl [background:linear-gradient(233.07deg,_#1e1e1e_10.96%,_#5f5f5f)] overflow-hidden flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.75rem] min-w-[12.688rem] max-w-[12.938rem] min-h-[12.75rem] mq1325:min-h-[auto]'>
            <div className='h-[3.5rem] w-[11.919rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border shrink-0'>
              <div className='self-stretch relative leading-[140%] font-semibold mq450:text-[1rem] mq450:leading-[1.375rem]'>{`Web Development & Design`}</div>
            </div>
            <img
              className='h-[6.25rem] w-[6.25rem] relative object-contain shrink-0'
              loading='lazy'
              alt=''
              src='/icons.svg'
            />
          </div>
          <Box
            appDevelopment='App Development '
            design={`& Design`}
            icons='/icons-1.svg'
          />
          <button className='cursor-pointer [border:none] p-[0.25rem] bg-[transparent] flex-1 rounded-11xl [background:linear-gradient(233.07deg,_#1e1e1e_10.96%,_#5f5f5f)] overflow-hidden flex flex-row items-start justify-start box-border gap-[0.75rem] min-w-[12.688rem] max-w-[12.938rem] min-h-[12.75rem] mq1325:min-h-[auto]'>
            <img
              className='h-[6.25rem] w-[6.25rem] relative overflow-hidden shrink-0 object-cover'
              alt=''
              src='/icons-2@2x.png'
            />
            <div className='h-[3.5rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border'>
              <div className='relative text-[1.25rem] leading-[140%] font-semibold font-plus-jakarta-sans text-white text-center mq450:text-[1rem] mq450:leading-[1.375rem]'>
                <p className='m-0'>{`Digital `}</p>
                <p className='m-0'>Marketing</p>
              </div>
            </div>
          </button>
          <Box
            appDevelopment='Smart Business'
            design='Cards'
            icons='/icons-3@2x.png'
            propOverflow='hidden'
          />
          <Box
            appDevelopment='Business '
            design='Automations'
            icons='/icons-4@2x.png'
            propOverflow='hidden'
          />
          <Box
            appDevelopment='Custom '
            design='Services'
            icons='/icons-5@2x.png'
            propOverflow='hidden'
          />
        </div>
      </div>
    </section>
  );
};

Expertise.propTypes = {
  className: PropTypes.string,
};

export default Expertise;
