const Canvas = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-left text-[0.75rem] text-gray-100 font-plus-jakarta-sans lg:pb-[2.625rem] lg:box-border`}
    >
      <div className='w-[59.375rem] flex flex-col items-center justify-center  max-w-full '>
        <img
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/i5i7jzsvgjo8tv9fasb4'
          alt='canvas'
          className='rounded-[2rem]'
        />
        <div className='mt-[4rem] self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.812rem] box-border max-w-full text-center text-[3rem] text-white lg:pl-[1.375rem] lg:pr-[1.375rem] lg:box-border'>
          <h3 className='m-0 flex-1 relative text-inherit leading-[3.75rem] font-semibold font-[inherit] inline-block max-w-full z-[1]'>
            Our rich design and technology expertise delivers top brands and
            digital experiences.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Canvas;
