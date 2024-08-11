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
      className='max-w-full relative bg-gray flex flex-col items-start justify-start box-border font-plus-jakarta-sans z-0 overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='flex flex-col items-start justify-start box-border w-full px-[3.75rem]'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header menu={'Blog'} theme={'dark'} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <BlogHead />
      </Suspense>

      <section className='w-full bg-white'>
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
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FormContact theme={'white'} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Blog;
