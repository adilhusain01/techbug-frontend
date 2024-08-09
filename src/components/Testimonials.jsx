import { useState, useRef, useEffect } from 'react';
import axios from '../api/axios';
import Review from './Review';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

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

  const getReviews = async () => {
    try {
      const response = await axios.get('/testimonials');

      const data = response.data;
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

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
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pl-[1.5rem] md:pl-[3.75rem] pb-[2.5rem] box-border max-w-full shrink-0 text-center text-white font-plus-jakarta-sans`}
    >
      <div className='flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full'>
        <h1 className='self-stretch flex flex-row items-start justify-center py-[0rem] m-0 relative text-7xl md:text-13xl lg:text-21xl font-medium'>
          Our Testimonials
        </h1>

        <div
          className='overflow-x-auto flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[1.25rem] w-full text-left text-[1.25rem] text-text-default-default'
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
          {reviews.map((review) => (
            <Review
              key={review._id}
              name={review.name}
              designation={review.designation}
              image_uri={review.image_uri}
              review={review.review}
            />
          ))}
        </div>
        <div className='mx-auto h-[0.5rem] w-[20rem] md:w-[38rem] bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full'>
          <div className='h-[0.5rem] w-[10rem] md:w-[19rem] relative bg-gold' />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
