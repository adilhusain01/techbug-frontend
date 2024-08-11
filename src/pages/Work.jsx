import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const WorkMenu = lazy(() => import('../components/WorkMenu'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Work = () => {
  return (
    <main
      className='w-full relative bg-white flex flex-col items-start justify-start box-border font-plus-jakarta-sans overflow-hidden'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='flex flex-col items-start justify-start px-[3.75rem] box-border gap-[5rem] md:gap-[10rem] lg:gap-[14rem] w-full'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header menu={'Work'} theme={'light'} />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <WorkMenu />
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

export default Work;
