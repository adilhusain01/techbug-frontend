import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import BlogPostHead from '../components/blogPostHead';
import BlogLeftBar from '../components/blogLeftBar';
import BlogCenterBar from '../components/blogCenterBar';
import BlogRightBar from '../components/blogRightBar';
import LatestArticles from '../components/latestArticles';
import TagArticles from '../components/tagArticles';
import NewsLetter from '../components/newsletter';
import FormContact from '../components/form-contact';
import Footer from '../components/footer';

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
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>{blogpost.title}</title>
      </Helmet>
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'>
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem]  box-border bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Header menu={'Blog'} theme={'dark'} />

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
          <BlogPostHead post={blogpost} />
        </div>
      </section>
      <section className='mt-[8rem] pt-[6rem] w-full bg-white self-stretch flex flex-row items-center justify-center box-border-w-full text-left text-[1.031rem] text-black font-body-base mq825:pl-[1.375rem] mq825:pr-[1.375rem] mq825:box-border mq1425:pl-[2.75rem] mq1425:pr-[2.75rem] mq1425:box-border'>
        <div className='w-full flex flex-col items-end justify-start gap-[3.812rem] shrink-0 text-[1rem] text-black font-plus-jakarta-sans'>
          <div className='self-stretch flex flex-col items-start justify-start gap-[0.293rem] max-w-full'>
            <div className='self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full'>
              <div className='grid grid-cols-12 gap-[2rem] w-full'>
                <BlogLeftBar post={blogpost} />
                <BlogCenterBar post={blogpost} />
                <BlogRightBar />
              </div>
            </div>
          </div>

          <TagArticles title={'Related Articles'} tags={tags} />
          <LatestArticles />
        </div>
      </section>

      <NewsLetter theme={'dark'} />

      <FormContact theme={'white'} />
      <Footer />
    </main>
  );
};

export default BlogPost;
