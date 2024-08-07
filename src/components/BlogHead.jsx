import React from 'react';
import NewsSlider from './NewsSlider';
import LatestArticlesGroup from './LatestArticlesGroup';

function BlogHead() {
  return (
    <section className='w-full'>
      <div className='mt-[8rem] flex flex-row items-start justify-start py-[0rem] px-[5rem] box-border max-w-full'>
        <div className='flex flex-col items-start justify-start gap-[0.5rem] max-w-full'>
          <div className='text-white text-2xl flex flex-row items-start justify-start gap-[2rem] lg:flex-wrap'>
            <div className='relative font-medium text-[#F9CA06] inline-block min-w-[5.063rem] z-[1] mq450:text-[1rem]'>
              All Posts
            </div>
            <div className='relative font-semibold inline-block min-w-[5.25rem] z-[1] mq450:text-[1rem]'>
              WebDev
            </div>
            <a className='[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem] z-[1] mq450:text-[1rem]'>
              AppDev
            </a>
            <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
              Digital Marketing
            </div>
            <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
              Smart Business Cards
            </div>
            <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
              Software Solutions
            </div>
          </div>
          <div className='w-[5.438rem] h-[0.125rem] relative border-[#F9CA06] border-t-[2px] border-solid box-border z-[1]' />
        </div>
      </div>

      <NewsSlider />

      <LatestArticlesGroup />
    </section>
  );
}

export default BlogHead;
