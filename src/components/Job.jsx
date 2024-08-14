import React from 'react';
import AnimatedSection from './AnimatedSection';

function Job() {
  return (
    <section className='px-[2rem] lg:px-[3.5rem] py-[5rem] lg:py-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2.5rem] lg:gap-[5rem]'>
      <AnimatedSection>
        <img
          className='h-auto w-full max-w-[365px] md:max-w-[350px] lg:max-w-[600px] rounded-[20px] md:rounded-[60px] object-cover'
          loading='lazy'
          alt='office'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/wgdo3slwrcib7ltszr1x'
        />
      </AnimatedSection>
      <AnimatedSection>
        <h1 className='text-2xl md:text-11xl lg:text-29xl font-medium text-white tracking-tight md:tracking-normal lg:tracking-wider leading-tighter md:leading-tight lg:leading-relaxed text-center md:text-right my-auto'>
          Delivering pioneer digital solutions and top-notch design support to
          ambitious startups and leading corporations since 2018
        </h1>
      </AnimatedSection>
    </section>
  );
}

export default Job;
