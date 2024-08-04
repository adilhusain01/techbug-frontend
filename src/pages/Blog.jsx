import Header from '../components/header';
import FormContact from '../components/form-contact';
import Footer from '../components/footer';
import FrameComponent4 from '../components/frame-component4';
import BlogLeftBar from '../components/blogLeftBar';
import BlogCenterBar from '../components/blogCenterBar';
import BlogRightBar from '../components/blogRightBar';
import FrameComponent5 from '../components/frame-component5';

//images
import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';
import n4 from '../assets/n4.png';
import n5 from '../assets/n5.png';
import plus from '../assets/plus.svg';

const Blog = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full shrink-0 mq800:pb-[4.25rem] mq800:box-border mq1325:pb-[6.5rem] mq1325:box-border'>
        <div className="flex-1 flex flex-col items-start justify-start px-[3.75rem]  box-border bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border">
          <Header menu={'Blog'} theme={'dark'} />

          <div className='mt-[8rem] flex flex-row items-start justify-start py-[0rem] px-[5rem] box-border max-w-full'>
            <div className='flex flex-col items-start justify-start gap-[0.5rem] max-w-full'>
              <div className='text-white text-2xl flex flex-row items-start justify-start gap-[2rem] lg:flex-wrap'>
                <div className='relative font-medium text-[#F9CA06] inline-block min-w-[5.063rem] z-[1] mq450:text-[1rem]'>
                  All Posts
                </div>
                <div className='relative font-semibold inline-block min-w-[5.25rem] z-[1] mq450:text-[1rem]'>
                  WebDev
                </div>
                <a className='[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem] z-[1] mq450:text-[1rem]'>
                  AppDev
                </a>
                <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
                  Digital Marketing
                </div>
                <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
                  Smart Business Cards
                </div>
                <div className='relative font-semibold z-[1] mq450:text-[1rem]'>
                  Software Solutions
                </div>
              </div>
              <div className='w-[5.438rem] h-[0.125rem] relative border-[#F9CA06] border-t-[2px] border-solid box-border z-[1]' />
            </div>
          </div>
          <FrameComponent4 />
        </div>
      </section>
      <section className='mt-[8rem] pt-[6rem] w-full bg-white self-stretch flex flex-row items-center justify-center box-border-w-full text-left text-[1.031rem] text-black font-body-base mq825:pl-[1.375rem] mq825:pr-[1.375rem] mq825:box-border mq1425:pl-[2.75rem] mq1425:pr-[2.75rem] mq1425:box-border'>
        <div className='w-full flex flex-col items-end justify-start gap-[3.812rem] shrink-0 text-[1rem] text-black font-plus-jakarta-sans'>
          <div className='self-stretch flex flex-col items-start justify-start gap-[0.293rem] max-w-full'>
            <div className='self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full'>
              <div className='grid grid-cols-12 gap-[2rem] w-full'>
                <BlogLeftBar />
                <BlogCenterBar />
                <BlogRightBar />
              </div>
            </div>
          </div>
          {/* <Textbutton
            propHeight='unset'
            propPosition='unset'
            propDisplay='flex'
            propFlexDirection='row'
            propPadding='0rem 0rem 0rem 0rem'
            propPosition1='relative'
            propTop='unset'
            propLeft='unset'
            propMinWidth='unset'
            propHeight1='unset'
          /> */}
          <div className='w-full'>
            <div className='flex flex-row px-[8rem] py-0'>
              <h1 className='min-w-[25rem] self-stretch  text-[3rem] font-semibold mq450:text-[1.813rem] mq825:text-[2.375rem]'>
                Related Articles
              </h1>
              <div className='w-full border-black border-t-[2px] border-solid box-border' />
            </div>

            <FrameComponent5 />
          </div>
          <div className='w-full'>
            <div className='flex flex-row px-[8rem] py-0'>
              <h1 className='min-w-[25rem] self-stretch  text-[3rem] font-semibold mq450:text-[1.813rem] mq825:text-[2.375rem]'>
                Latest Articles
              </h1>
              <div className='w-full border-black border-t-[2px] border-solid box-border' />
            </div>

            <FrameComponent5 />
          </div>
        </div>
      </section>

      <section className='w-full self-stretch  overflow-hidden shrink-0 text-[2.438rem] text-yellow'>
        <div className='mt-[4rem] flex flex-col items-center justify-start gap-[1rem]'>
          <h1 className='p-0 m-0 mx-auto self-stretch  font-semibold text-[#F9CA06] text-[3rem]'>
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
                  src={n1}
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
                alt=''
                src={plus}
              />
            </div>
            <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
              <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
                <img
                  className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                  alt=''
                  src={n2}
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
                alt=''
                src={plus}
              />
            </div>
            <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
              <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
                <img
                  className='w-[2.5rem] relative h-[2.5rem] object-cover'
                  alt=''
                  src={n3}
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
                alt=''
                src={plus}
              />
            </div>

            <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem]'>
              <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
                <img
                  className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                  alt=''
                  src={n4}
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
                alt=''
                src={plus}
              />
            </div>
            <div className='self-stretch rounded-2xl bg-[#FFFFFF] border-[#DBE4EC] border-[1px] border-solid flex flex-row items-start justify-start p-[1.5rem] gap-[1rem] font-body-base'>
              <div className='flex flex-row items-start justify-start gap-[0.5rem]'>
                <img
                  className='w-[2.5rem] relative rounded-xl h-[2.5rem] object-cover'
                  alt=''
                  src={n5}
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
                alt=''
                src={plus}
              />
            </div>
          </div>

          <div className='w-[23.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-text-brand-on-brand-secondary'>
            <div className='self-stretch h-[6rem] flex flex-col items-start justify-start gap-space-200'>
              <div className='self-stretch relative text-[1.25rem] leading-[140%] font-semibold text-white'>
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

      <FormContact theme={'white'} />
      <Footer />
    </main>
  );
};

export default Blog;
