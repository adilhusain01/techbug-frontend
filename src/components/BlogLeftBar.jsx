import PropTypes from 'prop-types';
import AnimatedSection from './AnimatedSection';
function BlogLeftBar({ post }) {
  const subheadings = post.body
    ? post.body.filter((item) => item.type === 'subheading')
    : [];

  return (
    <div className='m-0 hidden md:block md:col-span-3 box-border px-[2rem] lg:px-[8rem]'>
      <div className='m-0 p-0 self-stretch flex flex-col items-start justify-center gap-[0.75rem] lg:gap-[1rem]'>
        {subheadings.map((subheading) => (
          <AnimatedSection>
            <p
              key={subheading._id}
              className='text-[0.8rem] lg:text-[1rem] m-0 p-0 self-stretch relative font-medium'
            >
              {subheading.subheading}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

BlogLeftBar.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        subheading: PropTypes.string,
        _id: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default BlogLeftBar;
