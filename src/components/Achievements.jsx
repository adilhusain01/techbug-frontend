import React from 'react';

function Achievements() {
  return (
    <section className='bg-white grid grid-cols-2 gap-[2rem] md:gap-[6rem] lg:gap-[10rem] w-full py-[5rem] md:py-[10rem] pl-[3rem] lg:pl-[10rem]'>
      <div className='flex flex-col items-start justify-start'>
        <h1 className='m-0 self-stretch text-[4rem] md:text-[8rem] lg:text-[11rem] relative font-extrabold'>
          12
        </h1>

        <h2 className='m-0 text-[1.5rem] md:text-[2.1rem] lg:text-[3rem] font-medium font-[inherit]'>
          Projects
        </h2>
      </div>

      <div className='flex flex-col items-start justify-start'>
        <h1 className='m-0 self-stretch text-[4rem] md:text-[8rem] lg:text-[11rem] relative font-extrabold'>
          56
        </h1>

        <h2 className='m-0 text-[1.5rem] md:text-[2.1rem] lg:text-[3rem] font-medium font-[inherit]'>
          Team Members
        </h2>
      </div>

      <div className='flex flex-col items-start justify-start'>
        <h1 className='m-0 self-stretch text-[4rem] md:text-[8rem] lg:text-[11rem] relative font-extrabold'>
          150+
        </h1>

        <h2 className='m-0 text-[1.5rem] md:text-[2.1rem] lg:text-[3rem] font-medium font-[inherit]'>
          Projects
        </h2>
      </div>
    </section>
  );
}

export default Achievements;
