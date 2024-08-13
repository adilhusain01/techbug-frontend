import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from '../api/axios';

function NewsLetter({ theme }) {
  const selectTheme = {
    light: {
      bg: '#FFFFFF',
      titleColor: '#313D4B',
      emailColor: '#1E1E1E',
    },
    dark: {
      bg: '#171717',
      titleColor: '#F9CA06',
      emailColor: '#FFFFFF',
    },
  };

  const currentTheme = selectTheme[theme] || selectTheme.dark;
  const checkMarkUrl =
    'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/i0izxkglywoleiml8igb';

  const [topics, setTopics] = useState([]);
  const [email, setEmail] = useState('');
  const [selectedArticles, setSelectedArticles] = useState({});

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddClick = (articleName) => {
    setTopics((prevTopics) => {
      if (prevTopics.includes(articleName)) {
        return prevTopics.filter((topic) => topic !== articleName);
      } else {
        return [...prevTopics, articleName];
      }
    });

    setSelectedArticles((prevState) => ({
      ...prevState,
      [articleName]: !prevState[articleName],
    }));

    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post('/newsletters', {
        email: email,
        topics: topics,
      });

      if (response.status === 201) {
        setSuccessMessage('Subscription successful!');
        setErrorMessage('');
        setEmail('');
        setTopics([]);
        setSelectedArticles({});
      } else {
        setErrorMessage(response.data.message || 'An error occurred.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred.');
      setSuccessMessage('');
    }
  };

  return (
    <section
      className='max-w-full self-stretch py-[2.5rem] lg:py-[5rem] md:px-0 lg:px-[10rem]'
      style={{ backgroundColor: currentTheme.bg }}
    >
      <div className='flex flex-col items-center justify-center gap-[0.5rem] md:gap-[1rem]'>
        <h1
          className='p-0 m-0 mx-auto self-stretch font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-center'
          style={{ color: currentTheme.titleColor }}
        >
          Subscribe to Techbug's Newsletters
        </h1>
        <h2 className='p-0 mx-[1rem] md:m-0 self-stretch text-[1rem] md:text-[1.25rem] font-semibold text-[#ACACAC] text-center flex items-center justify-center shrink-0 tracking-wide'>
          Get the best in industry news, delivered to your inbox.
        </h2>
        {successMessage && (
          <p className='text-[1rem] mt-4 mb-0 p-0 text-green-500'>
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className='text-[1rem] mt-4  mb-0 p-0 text-red-500'>
            {errorMessage}
          </p>
        )}
      </div>
      <div className='mt-[2.5rem] lg:mt-[4rem] grid grid-cols-1 md:grid-cols-12 px-[2.5rem] lg:px-[5rem] gap-[1rem] lg:gap-[4rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem] lg:gap-[2rem] md:col-span-8'>
          {[
            {
              name: 'DEF',
              description: 'The latest in business & tech',
              imageUrl:
                'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/in8m1j2ejd3jc4rny23y',
            },
            {
              name: 'ABC',
              description: 'vhckvjhjkvbfskjvhfskvbfbkhv',
              imageUrl:
                'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/ies9oukl5tfdc2qcggr7',
            },
            {
              name: 'XYZ',
              description: 'vhckvjhjkvbfskjvhfskvbfbkhv',
              imageUrl:
                'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/pqxa8yq2xcmkbtrwsd56',
            },
            {
              name: 'Trends',
              description: 'The latest data-backed busines strends & tech',
              imageUrl:
                'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/bwnkvik0os1zpguenmcb',
            },
            {
              name: 'Next in AI',
              description: 'Stay up to date on the latest AI news',
              imageUrl:
                'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/x4ometfqmwrqltdoth7q',
            },
          ].map((article) => (
            <article
              key={article.name}
              className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid px-[0.5rem] lg:px-[1.25rem] py-[0.5rem] md:py-[0rem] lg:py-[1.25rem] grid grid-cols-12'
            >
              <img
                className='m-0 p-0 h-[2rem] lg:h-[2.5rem] w-[2rem] lg:w-[2.5rem] relative object-cover col-span-2 my-auto'
                alt={article.name}
                src={article.imageUrl}
              />
              <div className='m-0 p-0 flex flex-col items-start justify-start gap-[0.25rem] lg:gap-[0.5rem] col-span-8 my-auto'>
                <h2 className='m-0 p-0 text-[0.9rem] md:text-[1.15rem lg:text-[1.5rem] self-stretch relative font-semibold flex items-center shrink-0'>
                  {article.name}
                </h2>
                <h3 className='m-0 p-0 text-[0.8rem] lg:text-[1rem] self-stretch relative font-normal text-[#6D6E72 overflow-hidden'>
                  {article.description}
                </h3>
              </div>
              <img
                className='m-0 p-0 h-[1.75rem] lg:h-[2.125rem] w-[1.75rem] lg:w-[2.125rem] object-cover col-span-2 my-auto'
                alt='Add'
                src={
                  selectedArticles[article.name]
                    ? checkMarkUrl
                    : 'https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
                }
                onClick={() => handleAddClick(article.name)}
              />
            </article>
          ))}
        </div>

        <div className='flex flex-col items-start justify-start gap-[0.75rem] lg:gap-[1rem] md:col-span-4'>
          <h3
            className='m-0 relative text-[1rem] md:text-[1.15rem] lg:text-[1.25rem] font-semibold'
            style={{ color: currentTheme.emailColor }}
          >
            Email
          </h3>

          <input
            className='self-stretch rounded-xl bg-whitesmoke [border:none] [outline:none] px-[1rem] lg:px-[1.5rem] py-[0.75rem] lg:py-[1.25rem] text-[1rem] md:text-[1.125rem]'
            placeholder='Enter your email id'
            value={email}
            onChange={handleEmailChange}
            autoComplete='off'
          />

          <button
            className='self-stretch rounded-3xl bg-[#F9CA06] flex flex-row items-center justify-center px-[1rem] py-[0.5rem] lg:py-[1rem] box-border text-[1.15rem] lg:text-[1.25rem] text-black tracking-wider'
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
          <div className='self-stretch relative text-[0.75rem] md:text-[0.875rem] font-semibold text-[#ACACAC] flex items-center shrink-0'>
            <p className='m-0'>
              We're committed to your privacy. Techbug uses the information you
              provide to us to contact you about our relevant content, products,
              and services. You may unsubscribe from these communications at any
              time. For more information, check out our
            </p>
          </div>
          <p className='m-0 relative leading-[1.5rem] text-[0.75rem] lg:text-[1rem] text-[#838383]'>
            Privacy policy
          </p>
        </div>
      </div>
    </section>
  );
}

NewsLetter.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NewsLetter;
