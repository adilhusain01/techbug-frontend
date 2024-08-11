import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { Helmet } from 'react-helmet';

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
      </Helmet>

      <section className='w-full m-0 flex-1 flex flex-col items-start justify-start px-[3.75rem] box-border'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header menu={'Blog'} theme={'dark'} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <BlogPostHead post={blogpost} />
        </Suspense>
      </section>

      <section className='pt-[6rem] mt-[8rem] w-full flex flex-col items-end justify-start gap-[3.8rem] shrink-0 text-[1rem] text-black bg-white box-border'>
        <div className='grid grid-cols-12 gap-[2rem] w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogLeftBar post={blogpost} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <BlogCenterBar post={blogpost} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <BlogRightBar post={blogpost} />
          </Suspense>
        </div>
        <div className='m-0 w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <TagArticles title={'Related Articles'} tags={tags} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LatestArticles />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsLetter theme={'dark'} />
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

export default BlogPost;
