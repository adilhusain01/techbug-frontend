import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedSection from '../components/AnimatedSection';

const Header = lazy(() => import('../components/Header'));
const WorkMenu = lazy(() => import('../components/WorkMenu'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Work = () => {
  const location = useLocation();
  const { selectedMenu } = location.state || { selectedMenu: 'All Works' };

  return (
    <main
      className='w-full relative bg-white flex flex-col items-start justify-start box-border font-plus-jakarta-sans overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>Work</title>
        <meta name='description' content='Techbug Portfolio and Work' />
        <meta
          name='keywords'
          content='Work, Portfolio, App Development, Web Development, Marketing, Digital Solutions, Web Development and Design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Service, Techbug'
        />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedSection>
          <section className='flex flex-col items-start justify-start px-[3.75rem] box-border gap-[5rem] md:gap-[10rem] lg:gap-[14rem] w-full'>
            <Header menu={'Work'} theme={'light'} />
          </section>
        </AnimatedSection>

        {/* <AnimatedSection> */}
        <WorkMenu selectedMenu={selectedMenu} />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <FormContact theme={'black'} />
        {/* </AnimatedSection> */}

        {/* <AnimatedSection> */}
        <Footer />
        {/* </AnimatedSection> */}
      </Suspense>
    </main>
  );
};

export default Work;
