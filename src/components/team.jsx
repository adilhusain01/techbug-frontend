function Team() {
  return (
    <section className='mt-[-1rem] pt-24 pb-24 bg-white w-full flex flex-col items-center justify-between max-w-full shrink-0'>
      <h1 className='text-35xl font-semibold font-[inherit] inline-block z-[2] mq800:text-[3.188rem] mq450:text-[2.375rem] font-plus-jakarta-sans'>
        Our Team
      </h1>
      <div className='mt-8 flex-1 flex flex-col items-start justify-start shrink-0 max-w-full '>
        <div className='self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.437rem] box-border max-w-full'>
          <div className='flex-1 overflow-x-auto flex flex-row items-start justify-between max-w-full gap-[12rem] z-[2]'>
            <img
              className='self-stretch w-[25rem] relative max-h-full shrink-0 object-cover min-h-[25rem] max-w-full'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lxsknozh7b8zuvnxgyge'
            />
            <img
              className='self-stretch w-[25rem] relative max-h-full shrink-0 object-cover min-h-[25rem] max-w-full'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/lzv0gp00mvjgubvmeabq'
            />
            <img
              className='self-stretch w-[25rem] relative max-h-full shrink-0 object-cover min-h-[25rem] max-w-full'
              loading='lazy'
              alt=''
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/team-founders/bpka6wcgbn9k6zfhcjmd'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
