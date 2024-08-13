import PropTypes from 'prop-types';

function BlogCenterBar({ post }) {
  if (!post.body) {
    return null;
  }

  return (
    <div className='mx-[1.5rem] md:mx-0 flex flex-col items-start justify-center md:col-span-6 box-border px-[0rem] lg:px-[4rem] gap-[1rem] md:gap-[1.5rem] lg:gap-[2rem]'>
      {post.body.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className='text-[0.9rem] md:text-[1.1rem] lg:text-[1.25rem] leading-relaxed m-0 p-0 self-stretch relative'
              >
                {`${item.content}`}
              </p>
            );
          case 'subheading':
            return (
              <h2
                key={index}
                className='text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] self-stretch relative font-semibold m-0 p-0'
              >
                {item.subheading}
              </h2>
            );
          case 'image':
            return (
              <img
                key={index}
                src={item.image_uri}
                alt={post.title}
                className='self-stretch relative'
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

BlogCenterBar.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogCenterBar;
