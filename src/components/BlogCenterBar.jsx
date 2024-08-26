import PropTypes from 'prop-types';
import AnimatedSection from '../components/AnimatedSection';
function BlogCenterBar({ post }) {
  if (!post.body) {
    return null;
  }

  return (
    <div
      className='mx-[1.5rem] md:mx-0 flex my-0 flex-col items-start justify-center md:col-span-6 box-border px-[0rem] lg:px-[4rem] blog-content gap-[1.25rem] md:gap-[1.5rem] lg:gap-[2rem] w-full max-w-full'
      dangerouslySetInnerHTML={{ __html: post.body }}
    />
  );
}

BlogCenterBar.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogCenterBar;
