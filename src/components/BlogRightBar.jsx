function BlogRightBar() {
  return (
    <div className='col-span-3 gap-[1rem] text-[1rem] px-[8rem]'>
      <img
        className='self-stretch h-[14.25rem] relative max-w-full overflow-hidden shrink-0 object-cover'
        loading='lazy'
        alt='about'
        src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/rxttnatldfyhcvibtlkw'
      />
      <div className='self-stretch flex flex-col items-start justify-start gap-[3.125rem]'>
        <div className='self-stretch flex flex-col items-start justify-start gap-[1rem]'>
          <div className='self-stretch relative inline-block min-h-[11.313rem]'>
            <p className='[margin-block-start:0] [margin-block-end:0.1px] [text-decoration:underline] font-semibold text-[#F9CA06]'>
              About Techbug
            </p>
            <p className='[margin-block-start:0] [margin-block-end:0.1px] font-medium'>
              &nbsp;
            </p>
            <p className='[margin-block-start:0] [margin-block-end:0.1px] font-medium'>
              Essential Web Page Elements of a Perfect Web Layout Most Popular
              Website Layouts Best Practices for Web Page Layout Design
            </p>
          </div>
          <h2 className='relative text-[0.625rem] font-semibold text-yellow inline-block min-w-[4.063rem] whitespace-nowrap cursor-pointer text-[#F9CA06]'>
            LEARN MORE
          </h2>
        </div>
        <div className='self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.937rem]'>
          <div className='flex-1 flex flex-col items-start justify-start gap-[0.562rem]'>
            <a className='[text-decoration:none] self-stretch relative text-[inherit]'>
              Share this article
            </a>
            <div className='flex flex-row items-start justify-start gap-[1rem]'>
              <img
                className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                loading='lazy'
                alt='Twitter'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ffhbq1vdrm87fd9xnkhr'
              />
              <img
                className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                loading='lazy'
                alt='Instagram'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/xxtxxdtd5s24v9gdohaj'
              />
              <img
                className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                loading='lazy'
                alt='Youtube'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/gz2akfvqeoinmxmxcxlm'
              />
              <img
                className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                loading='lazy'
                alt='LinkedIn'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/socials/ejf1cub7byf8xl8bbakt'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRightBar;
