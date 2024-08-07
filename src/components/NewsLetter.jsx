import PropTypes from 'prop-types';

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

  return (
    <section
      className='w-full self-stretch overflow-hidden shrink-0 text-[2.5rem] py-[5rem]'
      style={{ backgroundColor: currentTheme.bg }}
    >
      <div className='flex flex-col items-center justify-start gap-[1rem]'>
        <h1
          className='p-0 m-0 mx-auto self-stretch  font-semibold text-[3rem]'
          style={{ color: currentTheme.titleColor }}
        >
          Subscribe to Techbug's Newsletters
        </h1>
        <h2 className='p-0 m-0 mx-auto self-stretch  text-[1.25rem] font-semibold text-[#ACACAC] text-center flex items-center justify-center shrink-0 tracking-wide'>
          Get the best in industry news, delivered to your inbox.
        </h2>
      </div>
      <div className='mt-[4rem] flex flex-row items-start justify-center px-[5rem] gap-[4rem] text-[1rem]'>
        <div className='grid grid-cols-2 gap-[2rem]'>
          <div className='self-stretch rounded-2xl  bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem] font-body-base'>
            <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
              <img
                className='w-[2.5rem] relative h-[2.5rem] object-cover'
                alt='n1'
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/in8m1j2ejd3jc4rny23y'
              />
              <div className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                <div className='self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                  DEF
                </div>
                <div className='self-stretch relative text-[0.938rem] font-semibold text-dimgray flex items-center h-[1.25rem] shrink-0 text-[#6D6E72]'>
                  The latest in business & tech
                </div>
              </div>
            </div>
            <img
              className='w-[2.125rem] relative h-[2.125rem] object-cover'
              alt='add'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
            />
          </div>
          <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
            <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
              <img
                className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                alt=''
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/ies9oukl5tfdc2qcggr7'
              />
              <div className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                <div className='self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                  ABC
                </div>
                <div className='self-stretch relative text-[0.938rem] font-semibold flex items-center h-[1.25rem] shrink-0 text-[#6D6E72]'>
                  vhckvjhjkvbfskjvhfskvbfbkhv
                </div>
              </div>
            </div>
            <img
              className='w-[2.125rem] relative h-[2.125rem] object-cover'
              alt='add'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
            />
          </div>
          <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
            <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
              <img
                className='w-[2.5rem] relative h-[2.5rem] object-cover'
                alt=''
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/pqxa8yq2xcmkbtrwsd56'
              />
              <div className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                <div className='self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                  XYZ
                </div>
                <div className='self-stretch relative text-[0.938rem] font-semibold flex items-center h-[1.25rem] shrink-0 text-[#6D6E72]'>
                  vhckvjhjkvbfskjvhfskvbfbkhv
                </div>
              </div>
            </div>
            <img
              className='w-[2.125rem] relative h-[2.125rem] object-cover'
              alt='add'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
            />
          </div>

          <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
            <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
              <img
                className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                alt=''
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/bwnkvik0os1zpguenmcb'
              />
              <div className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                <div className='self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                  Trends
                </div>
                <div className='self-stretch relative text-[0.938rem] font-semibold text-[#6D6E72]'>
                  The latest data-backed busines strends & tech
                </div>
              </div>
            </div>
            <img
              className='w-[2.125rem] relative h-[2.125rem] object-cover'
              alt='add'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
            />
          </div>
          <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem] font-body-base'>
            <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
              <img
                className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                alt=''
                src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/x4ometfqmwrqltdoth7q'
              />
              <div className='w-[14.625rem] flex flex-col items-start justify-start gap-[0.5rem]'>
                <div className='self-stretch relative font-semibold flex items-center h-[1.313rem] shrink-0'>
                  Next in AI
                </div>
                <div className='self-stretch relative text-[0.938rem] font-semibold text-[#6D6E72]'>
                  Stay up to date on the latest AI news
                </div>
              </div>
            </div>
            <img
              className='w-[2.125rem] relative h-[2.125rem] object-cover'
              alt='add'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/v1/newsletter/fy5csggzf3ot8sf930nw'
            />
          </div>
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
            />
          </div>
          <button className='self-stretch rounded-3xl bg-[#F9CA06] flex flex-row items-center justify-center py-[1rem] px-[1rem] box-border text-[1.25rem] text-black tracking-wider'>
            Subscribe
          </button>
          <div className='self-stretch relative text-[0.875rem] font-semibold text-[#ACACAC] flex items-center h-[7.5rem] shrink-0'>
            <span>
              <p className='m-0'>
                We're committed to your privacy. Techbug uses the
              </p>
              <p className='m-0'>
                information you provide to us to contact you about
              </p>
              <p className='m-0'>
                our relevant content, products, and services. You
              </p>
              <p className='m-0'>
                may unsubscribe from these communications at
              </p>
              <p className='m-0'>
                any time. For more information, check out our
              </p>
            </span>
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
