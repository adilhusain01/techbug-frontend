import React, { useEffect, useState, useRef } from 'react';
import NewsSlider from './NewsSlider';
import LatestArticlesGroup from './LatestArticlesGroup';
import axios from '../api/axios';
import AnimatedSection from '../components/AnimatedSection';

function BlogHead() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All Posts');

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

  const getTags = async () => {
    try {
      const response = await axios.get('/tags');
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

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
    <section className='max-w-full z-1'>
      <AnimatedSection>
        <div
          className='mt-[2.5rem] md:mt-[5rem] lg:mt-[8rem] mx-[2rem] lg:mx-[8rem] box-border text-white flex flex-row items-start justify-start gap-[0.5rem] md:gap-[1rem] overflow-x-auto flex-auto md:flex-wrap'
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
          <p
            className={`text-[0.9rem] md:text-[1rem] lg:text-[1.25rem] min-w-fit m-0 pb-[0.5rem] lg:pb-[1rem] relative font-medium ${
              selectedTag === 'All Posts'
                ? 'text-[#F9CA06] border-[#F9CA06] border-b-[2px] border-solid '
                : ''
            }`}
            onClick={() => handleTagClick('All Posts')}
          >
            All Posts
          </p>
          {tags.map((tag) => (
            <p
              key={tag._id}
              className={`text-[0.9rem] md:text-[1rem] lg:text-[1.25rem] min-w-fit m-0 pb-4 relative font-semibold ${
                selectedTag === tag.name
                  ? 'text-[#F9CA06] border-[#F9CA06] border-b-[2px] border-solid '
                  : ''
              }`}
              onClick={() => handleTagClick(tag.name)}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </AnimatedSection>

      <NewsSlider tag={selectedTag} />
      <LatestArticlesGroup />
    </section>
  );
}

export default BlogHead;
