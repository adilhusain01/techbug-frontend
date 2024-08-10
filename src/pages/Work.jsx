import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const WorkMenu = lazy(() => import('../components/WorkMenu'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const Work = () => {
  return (
    <main
      className='w-full relative bg-white overflow-hidden flex flex-col items-start justify-start box-border leading-[normal] tracking-[normal] font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='w-full self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0'>
        <div className='w-full flex-1 flex flex-col items-start justify-start  box-border max-w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <Header menu={'Work'} theme={'light'} />
            <WorkMenu />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <FormContact theme={'black'} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Work;
