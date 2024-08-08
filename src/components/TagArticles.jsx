import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const TagArticles = ({ title, tags }) => {
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getBlogPost = async () => {
    try {
      const response = await axios.get(`/blogposts/meta/${tags}`);
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPost();
  }, [tags]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const firstThreePosts = posts.slice(0, 3);
  const remainingPosts = posts.slice(3);

  return (
    <section>
      <div className='flex flex-row px-[8rem] py-0'>
        <h1 className='min-w-[25rem] self-stretch  text-[3rem] font-semibold mq450:text-[1.813rem] mq825:text-[2.375rem]'>
          {title}
        </h1>
        <div className='w-full border-black border-t-[2px] border-solid box-border' />
      </div>
      <div className='flex flex-col justify-center pb-[4rem] px-[8rem] box-border max-w-full text-left text-[1rem] text-black font-plus-jakarta-sans'>
        <h1
          className='text-right text-[#F9CA06]'
          onClick={toggleShowAll}
          style={{ cursor: 'pointer' }}
        >
          {showAll ? 'Collapse' : 'View All'}
        </h1>
        <div className='grid grid-cols-3 gap-[2rem] lg:grid-cols-2'>
          {firstThreePosts.map((post, index) => (
            <Link
              key={index}
              className={`flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] font-plus-jakarta-sans`}
              to={`/blog/${post.slug}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <img
                className='self-stretch h-[14.25rem] max-w-full overflow-hidden shrink-0 object-cover'
                loading='lazy'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='self-stretch flex flex-col items-start justify-start mt-2'>
                <h1 className='p-0 m-0 self-stretch font-semibold flex items-center shrink-0 text-gray'>
                  {post.title}
                </h1>
                <h2 className='p-0 m-0 mt-4 self-stretch text-[1rem] font-semibold text-dimgray-100'>
                  {post.author}
                </h2>
                <h3 className='p-0 m-0 mt-1 [text-decoration:none] self-stretch text-[1rem] font-semibold text-dimgray-100'>
                  {post.updatedAt}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div
          className={`mt-8 grid grid-cols-3 gap-[2rem] lg:grid-cols-2 transition-container ${
            showAll ? 'expanded' : 'collapsed'
          }`}
        >
          {remainingPosts.map((post, index) => (
            <Link
              key={index + 3}
              className={`flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1rem] font-plus-jakarta-sans`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
              to={`/blog/${post.slug}`}
            >
              <img
                className='self-stretch h-[14.25rem] max-w-full overflow-hidden shrink-0 object-cover'
                loading='lazy'
                alt={post.title}
                src={post.thumbnail}
              />
              <div className='self-stretch flex flex-col items-start justify-start mt-2'>
                <h1 className='p-0 m-0 self-stretch font-semibold flex items-center shrink-0 text-gray'>
                  {post.title}
                </h1>
                <h2 className='p-0 m-0 mt-4 self-stretch text-[1rem] font-semibold text-dimgray-100'>
                  {post.author}
                </h2>
                <h3 className='p-0 m-0 mt-1 [text-decoration:none] self-stretch text-[1rem] font-semibold text-dimgray-100'>
                  {post.updatedAt}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

TagArticles.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default TagArticles;
