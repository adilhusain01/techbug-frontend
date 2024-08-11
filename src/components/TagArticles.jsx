import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const TagArticles = ({ title, tags }) => {
  const [posts, setPosts] = useState([]);
  // const [showAll, setShowAll] = useState(false);

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

  // const toggleShowAll = () => {
  //   setShowAll(!showAll);
  // };

  return (
    <section className='max-w-full px-[1.5rem] md:px-[4rem] lg:px-[8rem] my-[1.5rem] md:my-[2.5rem] lg:my-[4rem]'>
      <div className='flex flex-row gap-[1.25rem] lg:gap-[2rem]'>
        <h2 className='p-0 min-w-fit self-stretch text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-semibold m-0'>
          {title}
        </h2>
        <div className='p-0 w-full border-black border-t-[2px] border-solid box-border' />
      </div>
      <div className='mt-[2rem] p-0 flex flex-col justify-center box-border text-[1rem] text-black'>
        {/* <h1
          className='text-right text-[#F9CA06] p-0'
          onClick={toggleShowAll}
          style={{ cursor: 'pointer' }}
        >
          {showAll ? 'Collapse' : 'View All'}
        </h1> */}

        <div className='overflow-x-auto flex flex-row gap-[1rem] pb-[1.5rem]'>
          <div className={`flex flex-row gap-[1.5rem]`}>
            {/*  ${!showAll ? 'w-max' : ''} */}
            {posts.map((post, index) => (
              <Link
                key={index}
                className={`flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] w-[20rem] md:w-[25rem] lg:w-[33.5rem]`}
                to={`/blog/${post.slug}`}
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                {/*  ${
                  !showAll && index >= 3 ? 'hidden' : ''
                } */}
                <img
                  className='self-stretch h-[11rem] md:h-[13rem] lg:h-[16.5rem] w-[20rem] md:w-[25rem] lg:w-[33.5rem] overflow-hidden shrink-0 object-cover'
                  loading='lazy'
                  alt={post.title}
                  src={post.thumbnail}
                />
                <div className='flex flex-col items-start justify-start mt-2'>
                  <h1 className='m-0 font-semibold flex text-[1rem] md:text-[1.15rem] lg:text-[1.35rem] shrink-0 text-gray'>
                    {post.title}
                  </h1>
                  <h2 className='m-0 mt-2 text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {post.author}
                  </h2>
                  <h3 className='m-0 mt-1 [text-decoration:none] text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                    {post.updatedAt}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
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
