import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';
import AnimatedSection from '../components/AnimatedSection';

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
      <Helmet>
        <title>Blog</title>
        <meta name='description' content='TechBug Blogs and Articles' />
        <meta
          name='keywords'
          content='Blog, Latest Post, Post, Category, Article, App Development, Marketing, Digital Solution, Web development and design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Service, Techbug'
        />
      </Helmet>

      <AnimatedSection>
        <section className='flex flex-col items-start justify-start box-border w-full px-[3.75rem]'>
          <Suspense fallback={<div>Loading...</div>}>
            <Header menu={'Blog'} theme={'dark'} />
          </Suspense>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogHead />
        </Suspense>
      </AnimatedSection>

      <section className='w-full bg-white'>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedSection>
            <TagArticles
              title={'Customer Experience'}
              tags={'Customer Experience'}
            />
          </AnimatedSection>

          <AnimatedSection>
            <TagArticles
              title={'Instagram Marketing'}
              tags={'Instagram Marketing'}
            />
          </AnimatedSection>

          <AnimatedSection>
            <TagArticles
              title={'Marketing Strategy'}
              tags={'Marketing Strategy'}
            />
          </AnimatedSection>

          <AnimatedSection>
            <TagArticles
              title={'Business Automation'}
              tags={'Business Automation'}
            />
          </AnimatedSection>

          <AnimatedSection>
            <TagArticles title={'Custom Solutions'} tags={'Custom Solutions'} />
          </AnimatedSection>
        </Suspense>
      </section>

      <AnimatedSection>
        <Suspense fallback={<div>Loading...</div>}>
          <NewsLetter theme={'light'} />
        </Suspense>
      </AnimatedSection>

      <AnimatedSection>
        <Suspense fallback={<div>Loading...</div>}>
          <FormContact theme={'white'} />
        </Suspense>
      </AnimatedSection>

      <AnimatedSection>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </AnimatedSection>
    </main>
  );
};

export default Blog;
