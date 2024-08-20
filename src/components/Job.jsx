import React, { useState, useEffect, useRef } from 'react';

function Job() {
  const [blackLetters, setBlackLetters] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      const totalLetters = 112; //letters in the h1
      const blackLettersCount = Math.floor(scrollPercent * totalLetters);
      setBlackLetters(blackLettersCount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const text =
    'Delivering pioneer digital solutions and top-notch design support to ambitious startups and leading corporations since 2018';

  return (
    <section
      ref={sectionRef}
      className='px-[2rem] lg:px-[3.5rem] py-[5rem] lg:py-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2.5rem] lg:gap-[5rem]'
    >
      <img
        className='h-auto w-full max-w-[365px] md:max-w-[350px] lg:max-w-[600px] rounded-[20px] md:rounded-[60px] object-cover'
        loading='lazy'
        alt='office'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/wgdo3slwrcib7ltszr1x'
      />
      <h1 className='text-2xl md:text-11xl lg:text-29xl font-medium tracking-tight md:tracking-normal lg:tracking-wider leading-tighter md:leading-tight lg:leading-relaxed text-center md:text-right my-auto'>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{ color: index < blackLetters ? 'black' : 'white' }}
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
}

export default Job;
