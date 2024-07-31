import Header from '../components/header';
import HeroContent from '../components/hero-content';
import Expertise from '../components/expertise';
import ProgressContent from '../components/progress-content';
import ProgressContent1 from '../components/progress-content1';
import FrameComponent from '../components/frame-component';
import DesktopTablet from '../components/desktop-tablet';
import FormContact from '../components/form-contact';
import Footer from '../components/footer';

//images
import hero_img from '../assets/hero_img.jpg';
import office from '../assets/office.png';

const HomeLandingPage = () => {
  return (
    <div className='w-full h-[376.5rem] relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[20.687rem] box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto'>
      <section
        className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[10rem] box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'
        style={{
          backgroundImage: `url(${hero_img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '4rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust opacity (0.3 for 30% darkness)
          }}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3rem] px-[3.75rem] pb-[21.093rem] box-border gap-[14.531rem] bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Header />
          <HeroContent />
        </div>
      </section>
      <section className='w-[86.313rem] flex flex-row items-start justify-start pt-[0rem] px-[3.75rem] pb-[10rem] box-border max-w-full shrink-0 text-left text-[3.25rem] text-white font-plus-jakarta-sans mq800:pb-[6.5rem] mq800:box-border mq1325:pl-[1.875rem] mq1325:pr-[1.875rem] mq1325:box-border'>
        <div className='flex-1 flex flex-row items-start justify-start gap-[6.187rem] max-w-full mq800:gap-[3.063rem] mq450:gap-[1.563rem] mq1125:flex-wrap'>
          <img
            className='h-[36.938rem] flex-1 relative rounded-[60px] max-w-full overflow-hidden object-cover min-w-[25.938rem] mq800:min-w-full'
            loading='lazy'
            alt=''
            src={office}
          />
          <h1 className='m-0 w-[32.75rem] relative text-inherit leading-[150%] font-normal font-inherit flex items-center shrink-0 min-w-[32.75rem] max-w-full mq800:text-[2.625rem] mq800:leading-[3.875rem] mq800:min-w-full mq450:text-[1.938rem] mq450:leading-[2.938rem] mq1125:flex-1'>
            Delivering pioneer digital solutions and top-notch design support to
            ambitious startups and leading corporations since 2018
          </h1>
        </div>
      </section>
      <div className='w-[3.063rem] h-[2.188rem] relative overflow-hidden shrink-0 hidden z-[2]' />
      <Expertise />
      <section className='w-[55.688rem] h-[55.688rem] absolute !m-[0] right-[-27.875rem] bottom-[117.625rem] [filter:blur(500px)] rounded-[50%] bg-slateblue' />
      <section className='w-[55.688rem] h-[55.688rem] absolute !m-[0] top-[154.313rem] left-[-27.562rem] [filter:blur(500px)] rounded-[50%] bg-slateblue' />
      <section className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[3.75rem] pb-[11.5rem] box-border max-w-full shrink-0 mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:pb-[4.875rem] mq800:box-border mq1325:pb-[7.5rem] mq1325:box-border'>
        <div className='flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full'>
          <ProgressContent />
          <ProgressContent1 />
        </div>
      </section>
      <FrameComponent />
      <section className='overflow-hidden flex flex-row items-start justify-start pt-[2.75rem] pb-[3.25rem] pr-[0rem] pl-[1rem] box-border max-w-full shrink-0'>
        <DesktopTablet />
      </section>
      <FormContact />
      <Footer />
    </div>
  );
};

export default HomeLandingPage;
