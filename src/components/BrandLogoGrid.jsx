const BrandLogoGrid = () => {
  return (
    <section
      className={`py-[2rem] lg:py-[5rem] bg-white flex flex-col items-center justify-center box-border w-full`}
    >
      <h1 className='text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-medium font-inherit'>
        Proud to have worked with
      </h1>
      <div className='mt-[2rem] lg:mt-[4rem] w-full flex flex-row items-center justify-center gap-[0.5rem] md:gap-[2.5rem] lg:gap-[8rem] box-border relative  max-w-full z-[1]'>
        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/ozemajl81oupw1x51iwo'
        />
        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/fma0wojjczkct9sjqoap'
        />
        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/rm1rylv8nflbutryrqlk'
        />
        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/v2kk4zn8vykqpdbijcee'
        />
        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/ofx4bcc1bv8zqy9t55qp'
        />

        <img
          loading='lazy'
          alt='brand'
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/krpy0ympowqrgva6rejr'
        />
      </div>
    </section>
  );
};

export default BrandLogoGrid;
