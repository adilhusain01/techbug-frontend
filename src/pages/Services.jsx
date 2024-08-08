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
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal]'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0'>
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem]  box-border gap-[14.531rem] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Header menu={'Services'} theme={'dark'} />
            <Canvas />
          </Suspense>
        </div>
      </section>

      <section className='w-full self-stretch flex flex-row items-center justify-center  box-border max-w-full'>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceSection />
        </Suspense>
      </section>

      <section className='bg-[#ffffff] w-full py-[4rem]'>
        <Suspense fallback={<div>Loading...</div>}>
          <BrandLogoGrid />
          <FormContact theme={'black'} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Services;
