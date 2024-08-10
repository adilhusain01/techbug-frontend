import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

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
    <section className='mt-[5rem] px-[5rem]'>
      <div className='flex flex-row'>
        <h1 className='min-w-[25rem] self-stretch  text-[3rem] font-semibold text-white'>
          Latest Articles
        </h1>
        <div className='w-full border-white border-t-[2px] border-solid box-border' />
      </div>
      <div className='w-full self-stretch'>
        <div className='grid grid-cols-2 gap-[2rem]'>
          {firstTwoPosts.map((post) => (
            <Link
              className='flex-1 flex flex-col items-end justify-start min-w-[24.875rem] max-w-full'
              key={post._id}
              to={`/blog/${post.slug}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                className='h-[20rem] self-stretch box-border'
                loading='lazy'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='self-stretch bg-linen flex flex-col items-start justify-start py-[2rem] px-[1rem] gap-[1rem] z-[2] bg-[#fef4ea]'>
                <h2 className='text-[#344252] m-0 self-stretch relative font-semibold font-[inherit] '>
                  {post.title}
                </h2>
                <p className='m-0 self-stretch relative text-[1rem] font-semibold text-[#65666D]'>
                  {post.description}
                </p>
                <div className='flex flex-row items-end justify-start gap-[0.5rem] text-[0.969rem] text-[#8186A2]'>
                  <p className='m-0 relative leading-[1rem] font-semibold inline-block min-w-[4.288rem] shrink-0'>
                    {post.author}
                  </p>
                  <p className='m-0 relative text-[0.906rem] leading-[0.956rem] font-semibold text-lightslategray-500 inline-block min-w-[3.319rem] shrink-0'>
                    {post.updatedAt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='grid grid-cols-3 gap-[2rem] mt-[2rem]'>
          {remainingPosts.map((post, index) => (
            <Link
              className='flex-1 flex flex-col items-end justify-start min-w-[24.875rem] max-w-full '
              key={post._id}
              to={`/blog/${post.slug}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                className='h-[13rem] self-stretch box-border'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='self-stretch bg-linen flex flex-col items-start justify-start py-[1rem] px-[1rem] gap-[1rem] z-[2] bg-[#fef4ea]'>
                <h2 className='text-[#344252] m-0 self-stretch relative font-semibold font-[inherit] '>
                  {post.title}
                </h2>
                <p className='m-0 self-stretch relative text-[1rem] font-semibold text-[#65666D]'>
                  {post.description}
                </p>
                <div className='flex flex-row items-end justify-start gap-[0.5rem] text-[0.969rem] text-[#8186A2]'>
                  <p className='m-0 relative leading-[1rem] font-semibold inline-block min-w-[4.288rem] shrink-0'>
                    {post.author}
                  </p>
                  <p className='m-0 relative text-[0.906rem] leading-[0.956rem] font-semibold text-lightslategray-500 inline-block min-w-[3.319rem] shrink-0'>
                    {post.updatedAt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticlesGroup;
