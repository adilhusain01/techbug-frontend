import AnimatedSection from '../components/AnimatedSection';

const Founders = () => {
  return (
    <section
      className={`mt-[-0.5rem] bg-white self-stretch flex flex-col items-center justify-center px-[1rem] md:px-[3rem] lg:px-[7.5rem] py-[2.5rem] box-border gap-[2.5rem] md:gap-[5rem] text-black`}
    >
      <AnimatedSection>
        <h1 className='m-0 relative text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold inline-block mx-auto'>
          Founders
        </h1>
      </AnimatedSection>
      <AnimatedSection>
        <div className='self-stretch flex flex-row items-start justify-center box-border gap-[2rem] lg:gap-[4rem]'>
          <img
            className='w-[10rem] md:w-[25rem] lg:w-[35rem] relative rounded-xl object-cover'
            loading='lazy'
            alt='Founder1'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/tj1w87bhm6iee3pafvgj'
          />

          <h2 className='m-0 self-stretch relative text-[0.9rem] md:text-[1.5rem] lg:text-[2.25rem] leading-tighter md:leading-normal lg:leading-wider font-normal font-[inherit] text-left'>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className='self-stretch flex flex-row items-start justify-center box-border gap-[2rem] lg:gap-[4rem]'>
          <h2 className='m-0 self-stretch relative text-[0.9rem] md:text-[1.5rem] lg:text-[2.25rem] leading-tighter md:leading-normal lg:leading-wider font-normal font-[inherit] text-right'>
            Lorem ipsum dolor sit amet consectetur. Consectetur suspendisse
            cursus eu sodales. Nisl non egestas vitae nisl in. Leo fringilla eu
            pellentesque enim suspendisse.
          </h2>

          <img
            className='w-[10rem] md:w-[25rem] lg:w-[35rem] relative rounded-xl object-cover'
            loading='lazy'
            alt='Founder2'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/jeagajwhx65ymyxkqn8o'
          />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Founders;
