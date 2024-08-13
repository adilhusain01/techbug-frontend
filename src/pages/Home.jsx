import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const HeroContent = lazy(() => import('../components/HeroContent'));
const Expertise = lazy(() => import('../components/Expertise'));
const ProgressContent = lazy(() => import('../components/ProgressContent'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const DesktopTablet = lazy(() => import('../components/DesktopTablet'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <main
      className='w-full relative flex flex-col bg-gray box-border font-plus-jakarta-sans overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>Techbug</title>
        <meta
          name='description'
          content='At Techbug we provide Development, Marketing and Custom Services and Solutions'
        />
        <meta
          name='keywords'
          content='App Development, Web Development, Marketing, Digital Solutions, Web Development and Design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Service, Techbug'
        />
      </Helmet>
      <section
        className='self-stretch flex flex-row items-start justify-start pb-[10rem] box-border max-w-full shrink-0'
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/zedaquuziqtgm1iporvx)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '1080px',
          width: '1920px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />
        <div className='w-full flex-1 flex flex-col items-start justify-start px-[3.75rem] pb-[21.093rem] box-border gap-[12rem] md:gap-[14.5rem]'>
          <Suspense fallback={<div>Loading...</div>}>
            <Header menu={'Home'} theme={'dark'} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <HeroContent />
          </Suspense>
        </div>
      </section>
      <section className='px-[2rem] lg:px-[3.5rem] py-[5rem] lg:py-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2.5rem] lg:gap-[5rem]'>
        <img
          className='h-[300px] md:h-[400px] lg:h-[600px] w-[365px] md:w-[350px] lg:w-[600px] rounded-[20px] md:rounded-[60px] object-cover'
          loading='lazy'
          alt='office'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/wgdo3slwrcib7ltszr1x'
        />

        <h1 className='text-2xl md:text-11xl lg:text-29xl font-medium text-white tracking-tight md:tracking-normal lg:tracking-wider leading-tighter md:leading-tight lg:leading-relaxed text-center md:text-right my-auto'>
          Delivering pioneer digital solutions and top-notch design support to
          ambitious startups and leading corporations since 2018
        </h1>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Expertise />
      </Suspense>

      <section className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1.5rem] md:px-[3.75rem] pb-[3.75rem] lg:pb-[11.5rem] box-border max-w-full shrink-0'>
        <div className='flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <ProgressContent />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>

      <section className='overflow-hidden flex flex-row items-start justify-start pt-[2.75rem] pb-[3.25rem] pr-[0rem] pl-[1rem] box-border min-w-full shrink-0'>
        <Suspense fallback={<div>Loading...</div>}>
          <DesktopTablet />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <FormContact theme={'white'} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
