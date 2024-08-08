import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const BlogHead = lazy(() => import('../components/BlogHead'));
const TagArticles = lazy(() => import('../components/TagArticles'));
const NewsLetter = lazy(() => import('../components/NewsLetter'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Blog = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='flex-1 flex flex-col items-start justify-start px-[3.75rem] mb-[10rem]  box-border max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header menu={'Blog'} theme={'dark'} />
          <BlogHead />
        </Suspense>
      </section>

      <section className='mb-[-1rem] w-full bg-white'>
        <Suspense fallback={<div>Loading...</div>}>
          <TagArticles
            title={'Customer Experience'}
            tags={'Customer Experience'}
          />
          <TagArticles
            title={'Instagram Marketing'}
            tags={'Instagram Marketing'}
          />
          <TagArticles
            title={'Marketing Strategy'}
            tags={'Marketing Strategy'}
          />
          <TagArticles
            title={'Business Automation'}
            tags={'Business Automation'}
          />
          <TagArticles title={'Custom Solutions'} tags={'Custom Solutions'} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsLetter theme={'light'} />
        <FormContact theme={'white'} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Blog;
