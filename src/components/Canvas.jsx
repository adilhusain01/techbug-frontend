const Canvas = () => {
  return (
    <section
      className={`mx-[1rem] md:mx-[2.5rem] lg:mx-0 my-[5rem] md:my-[7.5rem] lg:my-[5rem] max-w-full self-stretch flex flex-col items-center justify-center box-border gap-[2rem] lg:gap-[5rem]`}
    >
      <img
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/i5i7jzsvgjo8tv9fasb4'
        alt='canvas'
        className='self-stretch h-auto w-full max-w-[20.5rem] md:max-w-[46rem] lg:max-w-[100rem] rounded-[0.5rem] md:rounded-[1rem] lg:rounded-[2rem] object-cover mx-auto'
      />
      <h3 className='w-[100%] md:w-[90%] lg:w-[75%] m-0 text-[1.25rem] md:text-[2rem] lg:text-[4rem] relative leading-[1.25rem] md:leading-[2rem] lg:leading-[4rem] text-white font-semibold text-center'>
        Our rich design and technology expertise delivers top brands and digital
        experiences.
      </h3>
    </section>
  );
};

export default Canvas;
