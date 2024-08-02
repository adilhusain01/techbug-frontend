import React from 'react';

function Achievements() {
  return (
    <section>
      <div className='w-[100] flex flex-row items-start justify-start px-[4.937rem] pb-[3.375rem] box-border max-w-full mq1125:pl-[2.438rem] mq1125:pr-[2.438rem] mq1125:box-border'>
        <div className='flex-1 flex flex-row items-start justify-between max-w-full gap-[24rem] mq1125:flex-wrap'>
          <div className='w-[25.25rem] flex flex-col items-start justify-start max-w-full'>
            <div className='self-stretch relative font-extrabold mq800:text-[3.75rem] mq450:text-[2.313rem]'>
              12
            </div>

            <h1 className='m-0 relative text-[3rem] font-medium font-[inherit] mq800:text-[2.375rem] mq450:text-[1.813rem]'>
              Projects
            </h1>
          </div>

          <div className='w-[25.25rem] flex flex-col items-start justify-start max-w-full'>
            <div className='self-stretch relative font-extrabold mq800:text-[3.75rem] mq450:text-[2.313rem]'>
              56
            </div>

            <h1 className='m-0 relative text-[3rem] font-medium font-[inherit] inline-block max-w-full mq800:text-[2.375rem] mq450:text-[1.813rem]'>
              Team Members
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-8 w-[35.125rem] flex flex-row items-start justify-start py-[0rem] px-[4.937rem] box-border max-w-full mq800:pl-[2.438rem] mq800:pr-[2.438rem] mq800:box-border'>
        <div className='flex-1 flex flex-col items-start justify-start max-w-full'>
          <div className='self-stretch relative font-extrabold mq800:text-[3.75rem] mq450:text-[2.313rem]'>
            150+
          </div>

          <h1 className='m-0 relative text-[3rem] font-medium font-[inherit] mq800:text-[2.375rem] mq450:text-[1.813rem]'>
            Projects
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
