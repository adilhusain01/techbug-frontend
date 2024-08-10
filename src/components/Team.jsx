function Team() {
  return (
    <section className='mt-[-1rem] py-[5rem] lg:py-[6rem] bg-white w-full flex flex-col items-center justify-between shrink-0'>
      <h1 className='text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold'>
        Our Team
      </h1>
      <div className='mt-8 flex-1 flex flex-col items-start justify-start shrink-0'>
        <div className='flex-1 flex flex-row items-start justify-between gap-[0.5rem] md:gap-[1rem] lg:gap-[12rem] z-[2]'>
          <img
            className='self-stretch h-[7rem] md:h-[15rem] lg:h-[25rem] w-[7rem] md:w-[15rem] lg:w-[25rem] relative shrink-0 object-cover'
            loading='lazy'
            alt='member1'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lxsknozh7b8zuvnxgyge'
          />
          <img
            className='self-stretch h-[7rem] md:h-[15rem] lg:h-[25rem] w-[7rem] md:w-[15rem] lg:w-[25rem] relative shrink-0 object-cover'
            loading='lazy'
            alt='member2'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lzv0gp00mvjgubvmeabq'
          />
          <img
            className='self-stretch h-[7rem] md:h-[15rem] lg:h-[25rem] w-[7rem] md:w-[15rem] lg:w-[25rem] relative shrink-0 object-cover'
            loading='lazy'
            alt='member3'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/bpka6wcgbn9k6zfhcjmd'
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
