import Header from '../components/header';
import FormContact from '../components/form-contact';
import Footer from '../components/footer';
import WorkMenu from '../components/work-menu';

const Work = () => {
  return (
    <main
      className='w-full relative bg-white overflow-hidden flex flex-col items-start justify-start box-border leading-[normal] tracking-[normal] mq1125:h-auto'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='w-full self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'>
        <div className='w-full flex-1 flex flex-col items-start justify-start  box-border max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border'>
          <Header menu={'Work'} theme={'light'} />

          <WorkMenu />
        </div>
      </section>

      <FormContact theme={'black'} />
      <Footer />
    </main>
  );
};

export default Work;
