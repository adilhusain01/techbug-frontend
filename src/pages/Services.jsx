import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));
const BrandLogoGrid = lazy(() => import('../components/BrandLogoGrid'));
const Canvas = lazy(() => import('../components/Canvas'));
const ServiceSection = lazy(() => import('../components/ServiceSection'));

const Services = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'>
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem]  box-border gap-[14.531rem] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Suspense fallback={<div>Loading...</div>}>
            <Header menu={'Services'} theme={'dark'} />
            <Canvas />
          </Suspense>
        </div>
      </section>

      <section className='w-full self-stretch flex flex-row items-center justify-center  box-border max-w-full mq825:pl-[1.875rem] mq825:pr-[1.75rem] mq825:box-border'>
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
