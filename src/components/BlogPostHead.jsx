import PropTypes from 'prop-types';
import AnimatedSection from './AnimatedSection';

const BlogPostHead = ({ post }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start px-[1.5rem] md:px-[3rem] lg:px-[8.75rem] py-[1.75rem] md:py-[2.5rem] lg:py-[5rem] box-border max-w-full`}
    >
      <div className='flex flex-col items-start justify-start max-w-full'>
        <AnimatedSection>
          <h1 className='text-[1.65rem] md:text-[2.5rem] lg:text-[3rem] mt-[2rem] font-semibold text-[#FE8D4F]'>
            {post.title}
          </h1>
        </AnimatedSection>

        <div className='flex flex-col items-start justify-start gap-[0.75rem] lg:gap-[1.375rem] max-w-full'>
          <AnimatedSection>
            <h2 className='text-[0.9rem] md:text-[1.5rem] lg:text-[1.75rem] text-white m-0 font-normal flex-wrap'>
              {post.description}
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className='text-[0.75rem] md:text-[1rem] lg:text-[1.15rem] m-0 font-semibold text-[#838DAA]'>
              {post.author}
            </h3>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className='text-[0.65rem] md:text-[0.85rem] lg:text-[1rem] m-0 font-semibold text-[#838DAA]'>
              {post.createdAt}
            </h3>
          </AnimatedSection>
        </div>

        {/* example */}
        <AnimatedSection>
          <img
            className='self-stretch h-auto w-full max-w-[20.5rem] md:max-w-[46rem] lg:max-w-[102.5rem] mt-[2rem] relative overflow-hidden object-cover mx-auto'
            loading='lazy'
            alt={post.title}
            src={post.thumbnail}
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

BlogPostHead.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPostHead;
