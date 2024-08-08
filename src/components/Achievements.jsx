import React from 'react';

function Achievements() {
  return (
    <section>
      <div className='w-[100] flex flex-row items-start justify-start px-[4.937rem] pb-[3.375rem] box-border max-w-full'>
        <div className='flex-1 flex flex-row items-start justify-between max-w-full gap-[24rem] '>
          <div className='w-[25.25rem] flex flex-col items-start justify-start max-w-full'>
            <div className='self-stretch relative font-extrabold'>12</div>

            <h1 className='m-0 relative text-[3rem] font-medium font-[inherit]'>
              Projects
            </h1>
          </div>

          <div className='w-[25.25rem] flex flex-col items-start justify-start max-w-full'>
            <div className='self-stretch relative font-extrabold'>56</div>

            <h1 className='m-0 relative text-[3rem] font-medium font-[inherit] inline-block max-w-full '>
              Team Members
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-8 w-[35.125rem] flex flex-row items-start justify-start py-[0rem] px-[4.937rem] box-border max-w-full'>
        <div className='flex-1 flex flex-col items-start justify-start max-w-full'>
          <div className='self-stretch relative font-extrabold'>150+</div>

          <h1 className='m-0 relative text-[3rem] font-medium font-[inherit]'>
            Projects
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
