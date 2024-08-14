import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Header = lazy(() => import('../components/Header'));
const HeroContent = lazy(() => import('../components/HeroContent'));
const Job = lazy(() => import('../components/Job'));
const Expertise = lazy(() => import('../components/Expertise'));
const ProgressContent = lazy(() => import('../components/ProgressContent'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Greeting = lazy(() => import('../components/Greeting'));
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

      <Suspense fallback={<div>Loading...</div>}>
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
            <Header menu={'Home'} theme={'dark'} />
            <HeroContent />
          </div>
        </section>

        <Job />

        <AnimatedSection>
          <Expertise />
        </AnimatedSection>

        <ProgressContent />

        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <Greeting />
        </AnimatedSection>

        <FormContact theme={'white'} />

        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
