import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
// const AnimatedSection = lazy(() => import('./AnimatedSection'));

const TagArticles = ({ title, tags }) => {
  const [posts, setPosts] = useState([]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

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

  useEffect(() => {
    const preventScroll = (e) => {
      if (scrollRef.current && scrollRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', preventScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', preventScroll);
    };
  }, []);

  return (
    <section className='max-w-full px-[1.5rem] md:px-[4rem] lg:px-[8rem] my-[2.5rem] lg:my-[4rem]'>
      <div className='flex flex-row gap-[1.25rem] lg:gap-[2rem]'>
        {/* <AnimatedSection> */}
        <h2 className='p-0 min-w-fit self-stretch text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-semibold m-0'>
          {title}
        </h2>
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <div className='p-0 m-0 w-full border-black border-t-[2px] border-solid box-border' />
        {/* </AnimatedSection> */}
      </div>

      <div
        className={`mt-[2rem] p-0 overflow-x-auto flex flex-row gap-[1rem] text-black text-[1rem] box-border`}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {posts.map((post, index) => (
          // <AnimatedSection>
          <Link
            key={index}
            className={`flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] w-[20rem] md:w-[25rem] lg:w-[33.5rem]`}
            to={`/blog/${post.slug}`}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <img
              className='self-stretch h-[11rem] md:h-[13rem] lg:h-[16.5rem] w-[20rem] md:w-[25rem] lg:w-[33.5rem] overflow-hidden shrink-0 object-cover'
              loading='lazy'
              alt={post.title}
              src={post.thumbnail}
            />
            <div className='flex flex-col items-start justify-start mt-2'>
              <h1 className='m-0 font-semibold text-[0.9rem] md:text-[1.15rem] lg:text-[1.35rem] shrink-0 text-gray'>
                {post.title}
              </h1>
              <h2 className='m-0 mt-2 text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                {post.author}
              </h2>
              <h3 className='m-0 mt-1 text-[0.75rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-dimgray-100'>
                {new Date(post.updatedAt).toLocaleString('en-UK', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </h3>
            </div>
          </Link>
          // </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

TagArticles.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default TagArticles;
