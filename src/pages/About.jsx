import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('../components/Header'));
const Achievements = lazy(() => import('../components/Achievements'));
const Founders = lazy(() => import('../components/Founders'));
const Team = lazy(() => import('../components/Team'));
const FormContact = lazy(() => import('../components/FormContact'));
const Footer = lazy(() => import('../components/Footer'));

const About = () => {
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
            <Header menu={'About'} theme={'dark'} />
          </Suspense>

          <section className='self-stretch bg-gray flex flex-col items-start justify-start px-[3.75rem] box-border  max-w-full text-center text-[6.375rem] font-plus-jakarta-sans'>
            <div className='self-stretch flex flex-row items-start justify-center max-w-full'>
              <h1 className='m-0 w-[68.25rem] relative text-inherit leading-[6.563rem] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center shrink-0 max-w-full'>{`Turning your visionary ideas into reality `}</h1>
            </div>
          </section>

          <section className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5rem] box-border max-w-full text-center text-[4rem] text-white font-plus-jakarta-sans'>
            <div className='flex-1 rounded-xl bg-gray flex flex-row items-start justify-start py-[6.5rem] px-[5rem] box-border gap-[1.5rem] max-w-full'>
              <div className='h-[41.125rem] w-[90rem] relative bg-gray hidden max-w-full' />

              <h1 className='m-0 flex-1 relative text-inherit leading-[140%] font-normal font-[inherit] inline-block max-w-full z-[1]'>
                Our mission is simple–to increase the chance of success of your
                digital product. With a future-proof design, clean code and
                well-thought-out strategies, we turn ideas into products people
                love to use.
              </h1>
            </div>
          </section>
        </div>
      </section>

      <section className='pl-10 pt-24 pb-8 self-stretch flex flex-col items-start justify-start box-border gap-[2rem] max-w-full text-left text-[9.375rem] text-black bg-white font-plus-jakarta-sans'>
        <Suspense fallback={<div>Loading...</div>}>
          <Achievements />
          <Founders />
        </Suspense>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>

      <section className='w-full m-0 p-0'>
        <img
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/nz1zkcv1gln13yo7lghe'
          alt='companies'
          className='w-full'
          loading='lazy'
        />
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <FormContact theme={'white'} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default About;
