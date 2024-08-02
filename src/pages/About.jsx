import Header from '../components/header';
import Founders from '../components/founders';
import FormContact from '../components/form-contact';
import Footer from '../components/footer';
import Achievements from '../components/achievements';
import Team from '../components/team';

const Home = () => {
  return (
    <main className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto'>
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'>
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem]  box-border gap-[14.531rem] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Header menu={'About'} />

          <section className='self-stretch bg-gray flex flex-col items-start justify-start px-[3.75rem] box-border  max-w-full text-center text-[6.375rem] font-plus-jakarta-sans  mq800:pl-[1.875rem] mq800:pr-[1.875rem] mq800:box-border gap-[2.688rem]'>
            <div className='self-stretch flex flex-row items-start justify-center max-w-full'>
              <h1 className='m-0 w-[68.25rem] relative text-inherit leading-[6.563rem] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center shrink-0 max-w-full mq800:text-[3.188rem] mq800:leading-[3.938rem] mq450:text-[1.938rem] mq450:leading-[2.625rem]'>{`Turning your visionary ideas into reality `}</h1>
            </div>
          </section>

          <section className='self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5rem] box-border max-w-full text-center text-[4rem] text-white font-plus-jakarta-sans'>
            <div className='flex-1 rounded-xl bg-gray flex flex-row items-start justify-start py-[6.5rem] px-[5rem] box-border gap-[1.5rem] max-w-full mq800:pl-[2.5rem] mq800:pr-[2.5rem] mq800:box-border'>
              <div className='h-[41.125rem] w-[90rem] relative bg-gray hidden max-w-full' />

              <h1 className='m-0 flex-1 relative text-inherit leading-[140%] font-normal font-[inherit] inline-block max-w-full z-[1] mq800:text-[3.188rem] mq800:leading-[4.5rem] mq450:text-[2.375rem] mq450:leading-[3.375rem]'>
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
        <Achievements />
        <Founders />
      </section>

      <Team />

      <section className='w-full m-0 p-0'>
        <img
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/nz1zkcv1gln13yo7lghe'
          alt='companies'
          className='w-full'
          loading='lazy'
        />
      </section>

      <FormContact theme={'white'} />
      <Footer />
    </main>
  );
};

export default Home;
