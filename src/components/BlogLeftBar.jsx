import PropTypes from 'prop-types';
function BlogLeftBar({ post }) {
  const subheadings = post.body
    ? post.body.filter((item) => item.type === 'subheading')
    : [];

  return (
    <div className='col-span-3 box-border px-[8rem]'>
      <div className='self-stretch flex flex-col items-start justify-start gap-[0.1rem]'>
        {subheadings.map((subheading) => (
          <p key={subheading._id} className='self-stretch relative font-medium'>
            {subheading.subheading}
          </p>
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
