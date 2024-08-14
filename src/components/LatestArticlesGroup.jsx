import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

// const AnimatedSection = lazy(() => import('./AnimatedSection'));

function LatestArticlesGroup() {
  const [blogPostsMeta, setBlogPostsMeta] = useState([]);

  const getBlogPostsMeta = async () => {
    try {
      const response = await axios.get('/blogposts/meta');
      const data = response.data;
      setBlogPostsMeta(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPostsMeta();
  }, []);

  const firstTwoPosts = blogPostsMeta.slice(0, 2);
  const remainingPosts = blogPostsMeta.slice(2, 5);

  return (
    <section className='max-w-full my-[2.5rem] lg:my-[5rem] px-[2rem] lg:px-[8rem]'>
      <div className='flex flex-row gap-[1.25rem] lg:gap-[2rem]'>
        {/* <AnimatedSection> */}
        <h1 className='p-0 min-w-fit self-stretch text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-semibold m-0 text-white w-full'>
          Latest Articles
        </h1>
        {/* </AnimatedSection> */}
        {/* <AnimatedSection> */}
        <div className='w-full border-white border-b-[2px] border-solid box-border' />
        {/* </AnimatedSection> */}
      </div>

      <div className='mt-[4rem] p-0 w-full self-stretch gap-[1.5rem]'>
        <div
          className={`grid justify-items-center grid-cols-1 md:grid-cols-2 gap-[1.5rem]`}
        >
          {firstTwoPosts.map((post, index) => (
            // <AnimatedSection>
            <Link
              className='bg-[#FEF4EA] flex flex-col items-start justify-start w-[20rem] md:w-[22rem] lg:w-[51rem] mx-auto'
              key={post._id}
              to={`/blog/${post.slug}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                className='m-0 h-[10rem] md:h-[11rem] lg:h-[25rem] w-[20rem] md:w-[22rem] lg:w-[51rem] self-stretch box-border'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='m-0 px-[1rem] py-[0.5rem] flex flex-col items-start justify-start mt-2 self-stretch'>
                <h1 className='m-0 font-semibold flex text-[0.75rem] md:text-[0.85rem] lg:text-[1.35rem] shrink-0 text-gray'>
                  {post.title}
                </h1>
                <span className='mt-1 flex flex-row gap-[1rem]'>
                  <h2 className='m-0 p-0 text-[0.65rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {post.author}
                  </h2>
                  <h3 className='m-0 p-0 [text-decoration:none] text-[0.65rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {new Date(post.updatedAt).toLocaleString('en-UK', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </h3>
                </span>
              </div>
            </Link>
            // </AnimatedSection>
          ))}
        </div>

        <div
          className={`mt-[2rem] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]`}
        >
          {remainingPosts.map((post, index) => (
            // <AnimatedSection>
            <Link
              className='bg-[#FEF4EA]  flex flex-col items-start justify-start gap-0 w-[20rem] md:w-[22rem] lg:w-[33.5rem] mx-auto'
              key={post._id}
              to={`/blog/${post.slug}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                className='m-0 h-[10rem] md:h-[11rem] lg:h-[16.5rem] w-[20rem] md:w-[22rem] lg:w-[33.5rem] self-stretch box-border'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='m-0 px-[1rem] py-[0.5rem] flex flex-col items-start justify-start mt-2'>
                <h1 className='m-0 font-semibold flex text-[0.75rem] md:text-[0.85rem] lg:text-[1.35rem] shrink-0 text-gray'>
                  {post.title}
                </h1>
                <span className='mt-1 flex flex-row gap-[1rem]'>
                  <h2 className='m-0 p-0 text-[0.65rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {post.author}
                  </h2>
                  <h3 className='m-0 p-0 [text-decoration:none] text-[0.65rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {new Date(post.updatedAt).toLocaleString('en-UK', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </h3>
                </span>
              </div>
            </Link>
            // </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticlesGroup;
