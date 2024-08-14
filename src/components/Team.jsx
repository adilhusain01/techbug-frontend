import AnimatedSection from './AnimatedSection';

function Team() {
  return (
    <section className='mt-[-1rem] py-[5rem] lg:py-[6rem] bg-white w-full flex flex-col items-center justify-between shrink-0'>
      <AnimatedSection>
        <h1 className='text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold mx-auto'>
          Our Team
        </h1>
      </AnimatedSection>

      <div className='mt-8 shrink-0 flex flex-row items-start justify-between gap-[0.7rem] md:gap-[1rem] lg:gap-[12rem] z-[2]'>
        <AnimatedSection>
          <img
            className='self-stretch h-auto w-full max-w-[7rem] md:max-w-[15rem] lg:max-w-[25rem] relative object-cover'
            loading='lazy'
            alt='member1'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lxsknozh7b8zuvnxgyge'
          />
        </AnimatedSection>

        <AnimatedSection>
          <img
            className='self-stretch h-auto w-full max-w-[7rem] md:max-w-[15rem] lg:max-w-[25rem] relative object-cover'
            loading='lazy'
            alt='member2'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lzv0gp00mvjgubvmeabq'
          />
        </AnimatedSection>
        <AnimatedSection>
          <img
            className='self-stretch h-auto w-full max-w-[7rem] md:max-w-[15rem] lg:max-w-[25rem] relative object-cover'
            loading='lazy'
            alt='member3'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/bpka6wcgbn9k6zfhcjmd'
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Team;
