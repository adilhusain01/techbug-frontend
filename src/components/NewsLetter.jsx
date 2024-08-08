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
      className='w-full self-stretch overflow-hidden shrink-0 text-[2.5rem] py-[5rem]'
      style={{ backgroundColor: currentTheme.bg }}
    >
      <div className='flex flex-col items-center justify-start gap-[1rem]'>
        <h1
          className='p-0 m-0 mx-auto self-stretch font-semibold text-[3rem]'
          style={{ color: currentTheme.titleColor }}
        >
          Subscribe to Techbug's Newsletters
        </h1>
        <h2 className='p-0 m-0 mx-auto self-stretch text-[1.25rem] font-semibold text-[#ACACAC] text-center flex items-center justify-center shrink-0 tracking-wide'>
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
      <div className='mt-[4rem] flex flex-row items-start justify-center px-[5rem] gap-[4rem] text-[1rem]'>
        <div className='grid grid-cols-2 gap-[2rem]'>
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
              className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'
            >
              <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
                <img
                  className='w-[2.5rem] relative h-[2.5rem] object-cover'
                  alt=''
                  src={article.imageUrl}
                />
                <span className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                  <h2 className='m-0 self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                    {article.name}
                  </h2>
                  <h3 className='m-0 self-stretch relative text-[0.938rem] font-semibold text-[#6D6E72]'>
                    {article.description}
                  </h3>
                </span>
              </div>
              <img
                className='w-[2.125rem] relative h-[2.125rem] object-cover'
                alt='add'
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

        <div className='w-[23.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-text-brand-on-brand-secondary'>
          <div className='self-stretch h-[6rem] flex flex-col items-start justify-start gap-space-200'>
            <div
              className='self-stretch relative text-[1.25rem] leading-[140%] font-semibold'
              style={{ color: currentTheme.emailColor }}
            >
              Email
            </div>

            <input
              className='self-stretch flex-1 rounded-xl bg-whitesmoke [border:none] [outline:none] overflow-hidden flex flex-row items-center justify-start px-[1.5rem] min-w-[15rem] text-[1.125rem] text-lightslategray-900'
              placeholder='Enter your email id'
              value={email}
              onChange={handleEmailChange}
              autoComplete='off'
            />
          </div>
          <button
            className='self-stretch rounded-3xl bg-[#F9CA06] flex flex-row items-center justify-center py-[1rem] px-[1rem] box-border text-[1.25rem] text-black tracking-wider'
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
          <div className='self-stretch relative text-[0.875rem] font-semibold text-[#ACACAC] flex items-center h-[7.5rem] shrink-0'>
            <p className='m-0'>
              We're committed to your privacy. Techbug uses the information you
              provide to us to contact you about our relevant content, products,
              and services. You may unsubscribe from these communications at any
              time. For more information, check out our
            </p>
          </div>
          <div className='relative leading-[1.5rem] text-[#838383]'>
            Privacy policy
          </div>
        </div>
      </div>
    </section>
  );
}

NewsLetter.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NewsLetter;
