const BrandLogoGrid = () => {
  return (
    <section
      className={`bg-white self-stretch flex flex-col items-center justify-center  box-border max-w-full`}
    >
      <h1 className='mb-[4rem] text-[2.5rem] font-medium font-inhrit font-plus-jakarta-sans  mq800:text-[2rem] mq450:text-[1.5rem]'>
        Proud to have worked with
      </h1>
      <div className='w-full flex flex-row items-center justify-center gap-[8rem] box-border relative  max-w-full z-[1] mq825:flex-wrap  mq825:pl-[3.063rem] mq825:pr-[3.063rem] mq825:box-border  mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border'>
        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/ozemajl81oupw1x51iwo'
        />
        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/fma0wojjczkct9sjqoap'
        />
        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/rm1rylv8nflbutryrqlk'
        />
        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/v2kk4zn8vykqpdbijcee'
        />
        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/ofx4bcc1bv8zqy9t55qp'
        />

        <img
          loading='lazy'
          alt=''
          src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/brands/krpy0ympowqrgva6rejr'
        />
      </div>
    </section>
  );
};

export default BrandLogoGrid;