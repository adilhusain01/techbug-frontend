import { Link } from 'react-router-dom';

function BlogRightBar() {
  return (
    <div className='md:col-span-3 gap-[1rem] text-[1rem] px-[1.5rem] md:px-[2rem] lg:px-[8rem]'>
      <img
        className='h-[12.5rem] w-[20.5rem] md:h-[7rem] md:w-[7rem] lg:h-[14rem] lg:w-[14rem] object-cover'
        loading='lazy'
        alt='about'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/rxttnatldfyhcvibtlkw'
      />
      <div className='mt-[0.5rem] flex flex-col items-start justify-start gap-[1rem]'>
        <p className='text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] p-0 m-0 font-semibold text-[#F9CA06]'>
          About Techbug
        </p>
        <p className='text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] p-0 m-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam,
          laudantium amet necessitatibus ducimus rem quisquam illum vel
          reiciendis nihil? Sequi ut itaque beatae?
        </p>
        <Link
          to={'/about'}
          className='text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] m-0 p-0 font-semibold cursor-pointer text-[#F9CA06]'
        >
          Learn more
        </Link>

        <div className='flex flex-col gap-0 md:gap-[0.5rem]'>
          <p className='text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] font-medium'>
            Share this article
          </p>
          <div className='flex flex-row gap-[1rem]'>
            <img
              className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem] relative object-cover'
              loading='lazy'
              alt='Twitter'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ffhbq1vdrm87fd9xnkhr'
            />
            <img
              className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem] relative object-cover'
              loading='lazy'
              alt='Instagram'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/xxtxxdtd5s24v9gdohaj'
            />
            <img
              className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem] relative object-cover'
              loading='lazy'
              alt='Youtube'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/gz2akfvqeoinmxmxcxlm'
            />
            <img
              className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem] relative object-cover'
              loading='lazy'
              alt='LinkedIn'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ejf1cub7byf8xl8bbakt'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRightBar;
