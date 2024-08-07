import Header from '../components/Header';
import TagArticles from '../components/TagArticles';
import NewsLetter from '../components/NewsLetter';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import BlogHead from '../components/BlogHead';

const BlogPost = () => {
  return (
    <main
      className='w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start box-border gap-[0.187rem] leading-[normal] tracking-[normal] mq1125:h-auto font-plus-jakarta-sans'
      style={{
        userSelect: 'none',
      }}
    >
      <section className='flex-1 flex flex-col items-start justify-start px-[3.75rem] mb-[10rem]  box-border max-w-full mq800:gap-[7.25rem] mq800:pt-[1.25rem] mq800:px-[1.875rem] mq800:pb-[8.875rem] mq800:box-border mq450:gap-[3.625rem] mq1125:pt-[1.938rem] mq1125:pb-[13.688rem] mq1125:box-border'>
        <Header menu={'Blog'} theme={'dark'} />

        <BlogHead />
      </section>

      <section className='mb-[-1rem] w-full bg-white'>
        <TagArticles
          title={'Customer Experience'}
          tags={'Customer Experience'}
        />
        <TagArticles
          title={'Instagram Marketing'}
          tags={'Instagram Marketing'}
        />
        <TagArticles title={'Marketing Strategy'} tags={'Marketing Strategy'} />
        <TagArticles
          title={'Business Automation'}
          tags={'Business Automation'}
        />
        <TagArticles title={'Custom Solutions'} tags={'Custom Solutions'} />
      </section>

      <NewsLetter theme={'light'} />

      <FormContact theme={'white'} />
      <Footer />
    </main>
  );
};

export default BlogPost;
