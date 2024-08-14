import { Helmet } from 'react-helmet';
import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedSection from '../components/AnimatedSection';

const Header = lazy(() => import('../components/Header'));
const Canvas = lazy(() => import('../components/Canvas'));
const ServiceSection = lazy(() => import('../components/ServiceSection'));
const BrandLogoGrid = lazy(() => import('../components/BrandLogoGrid'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Services = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden box-border font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <Helmet>
        <title>Services</title>
        <meta name='description' content='Techbug Services' />
        <meta
          name='keywords'
          content='App Development, Web Development, Marketing, Digital Solutions, Web Development and Design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Service, Techbug'
        />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedSection>
          <section className='px-[3.75rem] box-border lg:gap-[5rem] w-full'>
            <Header menu={'Services'} theme={'dark'} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <Canvas />
        </AnimatedSection>

        <AnimatedSection>
          <ServiceSection />
        </AnimatedSection>

        <AnimatedSection>
          <BrandLogoGrid />
        </AnimatedSection>

        <AnimatedSection>
          <FormContact theme={'black'} />
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </Suspense>
    </main>
  );
};

export default Services;
