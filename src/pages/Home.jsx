import Header from '../components/Header';
import HeroContent from '../components/HeroContent';
import Expertise from '../components/Expertise';
import ProgressContent from '../components/ProgressContent';

import Testimonials from '../components/Testimonials';
import DesktopTablet from '../components/DesktopTablet';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto'
      style={{
        userSelect: 'none',
      }}
    >
      <section
        className='self-stretch flex flex-row items-start justify-start pb-[10rem] box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'
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
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem] pb-[21.093rem] box-border gap-[14.531rem] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Header menu={'Home'} theme={'dark'} />
          <HeroContent />
        </div>
      </section>

      <section className='py-32'>
        <div className='grid grid-cols-2 gap-1'>
          <div className='flex flex-col items-center justify-center'>
            <img
              className='h-[600px] w-[600px] rounded-[60px] object-cover'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/wgdo3slwrcib7ltszr1x'
            />
          </div>

          <div className='py-8 px-32'>
            <h1 className='text-37xl font-medium text-white tracking-wider leading-relaxed font-plus-jakarta-sans'>
              Delivering pioneer digital solutions and top-notch design support
              to ambitious startups and leading corporations since 2018
            </h1>
          </div>
        </div>
      </section>

      <Expertise />

      <section className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[3.75rem] pb-[11.5rem] box-border max-w-full shrink-0 mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:pb-[4.875rem] mq800:box-border mq1325:pb-[7.5rem] mq1325:box-border'>
        <div className='flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full'>
          <ProgressContent />
        </div>
      </section>

      <Testimonials />

      <section className='overflow-hidden flex flex-row items-start justify-start pt-[2.75rem] pb-[3.25rem] pr-[0rem] pl-[1rem] box-border min-w-full shrink-0'>
        <DesktopTablet />
      </section>

      <FormContact theme={'white'} />
      <Footer />
    </main>
  );
};

export default Home;
