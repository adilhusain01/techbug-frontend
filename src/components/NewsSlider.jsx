import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../api/axios';
import AnimatedSection from '../components/AnimatedSection';

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
        className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[2rem] lg:px-[8rem] box-border max-w-full text-[#FE8D4F]`}
      >
        <AnimatedSection>
          <h1 className='mt-[2rem] flex-1 relative text-[2.5rem] md:text-[3rem] font-semibold font-[inherit] inline-block max-w-full z-[1] text-center md:text-left leading-tighter md:leading-normal'>
            Explore News, Insightful Articles and Updates.
          </h1>
        </AnimatedSection>
      </div>
      <div className='pl-[2rem] lg:pl-[8rem] py-[1rem] w-full'>
        <AnimatedSection>
          <div
            className='overflow-x-auto flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[1.25rem] max-w-full text-[1.25rem] w-full text-white'
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            {posts.map((post) => (
              <Link
                className='w-full max-w-[20rem] md:max-w-[25rem] lg:max-w-[33.5rem] flex flex-col items-start justify-end box-border shrink-0'
                key={post._id}
                to={`/blog/${post.slug}`}
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <img
                  className='h-[9rem] md:h-[11rem] lg:h-[15rem] w-full max-w-[20rem] md:max-w-[25rem] lg:max-w-[33.5rem] relative object-cover z-[1]'
                  alt='News'
                  src={post.thumbnail}
                />
                <div className='p-[0.5rem] box-border w-full bg-[#FBEBD9] overflow-hidden leading-tight lg:leading-normal'>
                  <h2 className='text-black m-0 text-[0.85rem] lg:text-[1rem] text-overflow-ellipsis'>
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

NewsSlider.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default NewsSlider;
