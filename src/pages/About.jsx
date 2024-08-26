import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedSection from '../components/AnimatedSection';

const Header = lazy(() => import('../components/Header'));
const Achievements = lazy(() => import('../components/Achievements'));
const Founders = lazy(() => import('../components/Founders'));
const Team = lazy(() => import('../components/Team'));
const Brands = lazy(() => import('../components/Brands'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const About = () => {
  return (
    <main
      className='w-full relative bg-gray flex flex-col items-start justify-start box-border font-plus-jakarta-sans overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>About Us</title>
        <meta name='description' content='About TechBug' />
        <meta
          name='keywords'
          content='App Development, Marketing, Digital Solution, Web development and design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Services, Team, Project, Founder, Brand, Collaboration'
        />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedSection>
          <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0'>
            <div className='flex-1 flex flex-col items-start justify-start px-[3.75rem] box-border gap-[5rem] md:gap-[10rem] lg:gap-[14rem] w-full'>
              <Header menu={'About'} theme={'dark'} />

              <section className='self-stretch bg-gray flex flex-col items-center justify-center px-0 lg:px-[3.75rem] pb-[5rem] lg:pb-[10rem] box-border w-full gap-[2rem] md:gap-[7.5rem] lg:gap-[15rem]'>
                <h1 className='m-0 relative leading-tight md:leading-[4.5rem] lg:leading-[6.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] text-center shrink-0 w-full text-[2rem] md:text-[4.5rem] lg:text-[6.375rem]'>
                  Turning your visionary ideas into reality
                </h1>
                <h1 className='px-[1rem] md:px-[6rem] lg:px-[8rem] mt-2 lg:mt-4 text-[1rem] md:text-[1.8rem] lg:text-[2.5rem] leading-[140%] text-center font-normal text-[#FFFFFF]'>
                  Our mission is simple–to increase the chance of success of
                  your digital product. With a future-proof design, clean code
                  and well-thought-out strategies, we turn ideas into products
                  people love to use.
                </h1>
              </section>
            </div>
          </section>
        </AnimatedSection>

        {/* <AnimatedSection> */}
        <Achievements />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <Founders />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <Team />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <Brands />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <FormContact theme={'white'} />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <Footer />
        {/* </AnimatedSection> */}
      </Suspense>
    </main>
  );
};

export default About;
