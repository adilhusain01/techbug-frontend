// const AnimatedSection = lazy(() => import('./AnimatedSection'));
import './style/HeroSectionBtn.css'
const HeroSectionButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#contact-form').scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    // <AnimatedSection>
    <a
      href='#contact-form'
      onClick={handleClick}
      className='relative z-[9999] cursor-pointer py-0 md:py-[0.125rem] px-[0.25rem] bg-[transparent] md:w-[12.75rem] rounded-37xl box-border flex flex-row items-center justify-start gap-[0.75rem] border-[2px] border-solid border-[#F1CB47] hover:border-[#967f2b] duration-300 mx-auto  touch-btn hover:bg-[#F1CB47] 
       '
      style={{ textDecoration: 'none' }}
    >



      <div className="flex flex-row justify-center items-center gap-2 rounded-[50%] group duration-300">

        <div className="bg-[#F1CB47] rounded-[50%] h-[2rem] md:h-[3rem] w-[2rem] md:w-[3rem] flex items-center justify-center  duration-300 img ">
          <img
            className="relative overflow-hidden shrink-0"
            alt="arrow"
            src="https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/d2mftxvjta6wolfrnm4j"
          />
        </div>

        <h2 className="text-[1rem] md:text-[1.25rem] font-medium text-white relative transition-opacity group-hover:opacity-0  head">
          Get in Touch
        </h2>

      </div>



    </a>
    // </AnimatedSection>
  );
};

export default HeroSectionButton;
