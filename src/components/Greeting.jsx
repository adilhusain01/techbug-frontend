const Greeting = () => {
  return (
    <section
      className={`py-[2.75rem] shrink-0 flex flex-row items-center justify-center gap-[0.3rem] md:gap-[1rem] lg:gap-[2rem] w-full overflow-hidden text-[3rem] md:text-[4rem] lg:text-[6rem] text-white box-border`}
    >
      <h1 className='m-0 text-inherit font-semibold inline-block'>Hello</h1>
      <div className='h-[1.25rem] w-[1.25rem] my-auto rounded-[50%] bg-white' />
      <h1 className='m-0 text-inherit font-semibold inline-block max-w-full'>
        Namaste
      </h1>
      <div className='h-[1.25rem] w-[1.25rem] my-auto  rounded-[50%] bg-white' />
      <h1 className='m-0 text-inherit font-semibold inline-block '>Ciao</h1>
      <div className='h-[1.25rem] w-[1.25rem] my-auto rounded-[50%] bg-white' />
      <h1 className='m-0 text-inherit font-semibold inline-block '>Hola</h1>
    </section>
  );
};

export default Greeting;
