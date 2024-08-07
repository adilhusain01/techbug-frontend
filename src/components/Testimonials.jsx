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
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pl-[3.75rem] pb-[2.5rem] box-border max-w-full shrink-0 text-center text-[2.5rem] text-white font-plus-jakarta-sans mq800:pl-[1.875rem] mq800:box-border`}
    >
      <div className='flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]'>
        <div className='self-stretch flex flex-row items-start justify-center py-[0rem]'>
          <h1 className='m-0 relative text-inherit font-medium font-inherit mq800:text-[2rem] mq450:text-[1.5rem]'>
            Our Testimonials
          </h1>
        </div>
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
        <div className='self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full'>
          <div className='h-[0.5rem] w-[38.625rem] bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full'>
            <div className='h-[0.688rem] w-[24.5rem] relative bg-gold max-w-[calc(100%_-_0px)]' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
