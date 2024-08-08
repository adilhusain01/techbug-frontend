import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../api/axios';

const NewsSlider = ({ tag }) => {
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

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const getNews = async () => {
    try {
      const endpoint =
        tag === 'All Posts' ? '/blogposts/meta' : `/blogposts/meta/${tag}`;
      const response = await axios.get(endpoint);
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, [tag]);

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
    <section className='self-stretch w-full'>
      <div
        className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[5rem] box-border max-w-full text-left text-[3rem] text-[#FE8D4F] font-plus-jakarta-sans`}
      >
        <h1 className='mt-[2rem] flex-1 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-[1.813rem] mq825:text-[2.375rem]'>
          Explore News, Insightful Articles and Updates.
        </h1>
      </div>
      <div className='self-stretch flex flex-row items-start justify-start pl-[5rem] box-border max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:pl-[1.875rem] mq800:box-border'>
        <div className='flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]'>
          <div
            className='overflow-x-auto flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[1.25rem] max-w-full text-left text-[1.25rem] text-text-default-default'
            style={{
              overflowX: 'hidden',
              overflowY: 'auto',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            {posts.map((post) => (
              <Link
                className='w-[32.25rem] flex flex-col items-start justify-end box-border max-w-full shrink-0'
                key={post._id}
                to={`/blog/${post.slug}`}
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <img
                  className='w-full h-[13rem] relative object-cover z-[1] mq800:flex-1'
                  alt='News'
                  src={post.thumbnail}
                />
                <div className='p-[0.5rem] box-border w-full bg-[#FBEBD9]'>
                  <h2 className='text-black m-0 text-[1rem]'>{post.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

NewsSlider.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default NewsSlider;
