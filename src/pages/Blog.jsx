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

      <Suspense fallback={<div>Loading...</div>}>
        <section className='flex flex-col items-start justify-start box-border w-full px-[3.75rem]'>
          <Header menu={'Blog'} theme={'dark'} />
        </section>

        <BlogHead />

        <section className='w-full bg-white'>
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
        </section>

        <NewsLetter theme={'light'} />
        <FormContact theme={'white'} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Blog;
