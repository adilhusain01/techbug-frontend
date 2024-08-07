import PropTypes from 'prop-types';

const BlogPostHead = ({ post }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start p-[5rem] box-border max-w-full text-left text-[3rem] text-[#FE8D4F] font-plus-jakarta-sans`}
    >
      <div className='flex-1 flex flex-col items-start justify-start max-w-full'>
        <div className='self-stretch flex flex-row items-start justify-start py-[0rem] box-border max-w-full'>
          <h1 className='mt-[2rem] flex-1 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-[1.813rem] mq825:text-[2.375rem]'>
            {post.title}
          </h1>
        </div>
        <div className='self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.812rem] pl-[0.25rem] pr-[0rem] box-border max-w-full text-[1.75rem] text-white'>
          <div className='flex-1 flex flex-col items-start justify-start gap-[1.375rem] max-w-full'>
            <h2 className='m-0 w-[38.25rem] relative text-inherit font-normal font-[inherit] flex items-center max-w-full z-[1] mq450:text-[1.375rem]'>
              {post.description}
            </h2>
            <div className='self-stretch relative text-[0.938rem] font-semibold text-lightslategray-200 z-[1]'>
              {post.author}
            </div>
            <div className='self-stretch relative text-[0.875rem] font-semibold text-lightslategray-700 z-[1]'>
              {post.createdAt}
            </div>
          </div>
        </div>
        <img
          className='mt-[2rem] self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]'
          loading='lazy'
          alt={post.title}
          src={post.thumbnail}
        />
      </div>
    </div>
  );
};

BlogPostHead.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPostHead;
