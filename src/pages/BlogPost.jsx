import { Helmet } from 'react-helmet';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedSection from '../components/AnimatedSection';

const Header = lazy(() => import('../components/Header'));
const BlogPostHead = lazy(() => import('../components/BlogPostHead'));
const BlogLeftBar = lazy(() => import('../components/BlogLeftBar'));
const BlogCenterBar = lazy(() => import('../components/BlogCenterBar'));
const BlogRightBar = lazy(() => import('../components/BlogRightBar'));
const TagArticles = lazy(() => import('../components/TagArticles'));
const LatestArticles = lazy(() => import('../components/LatestArticles'));
const NewsLetter = lazy(() => import('../components/NewsLetter'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const BlogPost = () => {
  const { slug } = useParams();
  const [blogpost, setBlogpost] = useState({});
  const [relatedPostsMeta, setRelatedPostsMeta] = useState([]);
  const [tags, setTags] = useState('');

  const getBlogPost = async () => {
    try {
      const response = await axios.get(`/blogposts/posts/slug/${slug}`);
      const data = response.data;
      const tagsArray = data.tags;
      const tagsString = tagsArray.join('-');
      setTags(tagsString);
      setBlogpost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPost();
  }, [slug]);

  return (
    <main
      className='w-full relative bg-gray flex flex-col items-start justify-start box-border font-plus-jakarta-sans overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>{blogpost.title}</title>
        <meta name='description' content={blogpost.title} />
        <meta name='keywords' content='Article, Post, Latest Post, Techbug' />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedSection>
          <section className='w-full m-0 flex-1 flex flex-col items-start justify-start px-[3.75rem] box-border'>
            <Header menu={'Blog'} theme={'dark'} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <BlogPostHead post={blogpost} />
        </AnimatedSection>

        <section className='pt-[2rem] md:pt-[3rem] lg:pt-[6rem] mt-[0.5rem] md:mt-[4rem] lg:mt-[8rem] w-full flex flex-col items-center justify-center text-black bg-white box-border'>
          <AnimatedSection>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-[2rem] w-full'>
              <BlogLeftBar post={blogpost} />

              <BlogCenterBar post={blogpost} />

              <BlogRightBar post={blogpost} />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className='m-0 w-full'>
              <TagArticles title={'Related Articles'} tags={tags} />

              <LatestArticles />
            </div>
          </AnimatedSection>
        </section>

        <AnimatedSection>
          <NewsLetter theme={'dark'} />
        </AnimatedSection>

        <AnimatedSection>
          <FormContact theme={'white'} />
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </Suspense>
    </main>
  );
};

export default BlogPost;
