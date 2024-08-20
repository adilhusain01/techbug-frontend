// import PropTypes from 'prop-types';
// // const AnimatedSection = lazy(() => import('./AnimatedSection'));
// function BlogLeftBar({ post }) {
//   const subheadings = post.body
//     ? post.body.filter((item) => item.type === 'subheading')
//     : [];

//   return (
//     <div className='m-0 hidden md:block md:col-span-3 box-border px-[2rem] lg:px-[8rem]'>
//       <div className='m-0 p-0 self-stretch flex flex-col items-start justify-center gap-[0.75rem] lg:gap-[1rem]'>
//         {subheadings.map((subheading) => (
//           // <AnimatedSection>
//           <p
//             key={subheading._id}
//             className='text-[0.8rem] lg:text-[1rem] m-0 p-0 self-stretch relative font-medium'
//           >
//             {subheading.subheading}
//           </p>
//           // </AnimatedSection>
//         ))}
//       </div>
//     </div>
//   );
// }

// BlogLeftBar.propTypes = {
//   post: PropTypes.shape({
//     body: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         subheading: PropTypes.string,
//         _id: PropTypes.string.isRequired,
//       })
//     ),
//   }).isRequired,
// };

// export default BlogLeftBar;
import PropTypes from 'prop-types';

function BlogLeftBar({ post }) {
  const extractHeadings = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = [];
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    headingElements.forEach((heading, index) => {
      headings.push({ content: heading.textContent, id: index });
    });

    return headings;
  };

  const subheadings = post.body ? extractHeadings(post.body) : [];

  return (
    <div className='m-0 hidden md:block md:col-span-3 box-border px-[2rem] lg:px-[8rem]'>
      <div className='m-0 p-0 self-stretch flex flex-col items-start justify-center gap-[0.75rem] lg:gap-[1rem]'>
        {subheadings.map((subheading) => (
          <p
            key={subheading.id}
            className='text-[0.8rem] lg:text-[1rem] m-0 p-0 self-stretch relative font-medium'
          >
            {subheading.content}
          </p>
        ))}
      </div>
    </div>
  );
}

BlogLeftBar.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogLeftBar;
