import React, { lazy, Suspense } from 'react';

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
      <section className='px-[3.75rem] box-border lg:gap-[5rem] w-full'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header menu={'Services'} theme={'dark'} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Canvas />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <BrandLogoGrid />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FormContact theme={'black'} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Services;
