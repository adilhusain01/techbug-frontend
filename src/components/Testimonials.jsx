import { useState, useRef, useEffect } from 'react';
import axios from '../api/axios';
import Review from './Review';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const response = await axios.get('/testimonials');

      const data = response.data;
      setReviews([...data, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className='my-[1.25rem] md:my-[2.5rem] lg:my-[5rem] box-border max-w-full text-white '>
      <h1 className='py-[1rem] md:py-[1.5rem] lg:py-[2rem] self-stretch flex flex-row items-start justify-center text-7xl md:text-[2rem] lg:text-[3rem] font-medium'>
        Our Testimonials
      </h1>
      <div className='m-0 slides overflow-visible'>
        <div className='flex flex-row gap-[2rem] w-full text-[1.25rem] text-text-default-default slide-list'>
          {reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              designation={review.designation}
              image_uri={review.image_uri}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
