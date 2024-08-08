import PropTypes from 'prop-types';

function BlogCenterBar({ post }) {
  if (!post.body) {
    return null;
  }

  return (
    <div className='col-span-6 box-border px-[4rem]'>
      <div className='self-stretch flex flex-col items-start justify-start'>
        {post.body.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return (
                <p
                  key={index}
                  className='self-stretch relative font-medium text-[1.5rem]'
                >
                  {`${item.content}`}
                </p>
              );
            case 'subheading':
              return (
                <h2
                  key={index}
                  className='self-stretch relative font-semibold text-[2rem]'
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
                  className='self-stretch relative my-[2rem]'
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

BlogCenterBar.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogCenterBar;
