import { useState, useEffect } from 'react';
import PortfolioContent from '../components/PortfolioContent';
import AnimatedSection from '../components/AnimatedSection';

function WorkMenu({ selectedMenu }) {
  const [menu, setMenu] = useState(selectedMenu);

  useEffect(() => {
    setMenu(selectedMenu);
  }, [selectedMenu]);

  return (
    <section className='w-full'>
      <AnimatedSection>
        <div className='m-0 self-stretch flex flex-row items-start justify-start box-border w-full'>
          <div className='py-[7rem] lg:py-[10rem] px-[1rem] md:px-[2rem] lg:px-0 flex-1 flex flex-col md:flex-row items-center justify-around box-border w-full'>
            <h1 className='p-0 lg:p-2 m-0 relative leading-[2.5rem] md:leading-[5rem] lg:leading-[6.5rem] font-semibold !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] [-webkit-text-fill-color:transparent] inline-block shrink-0 w-full md:w-[70%] text-[2.5rem] md:text-[4rem] lg:text-[6rem] text-center md:text-left'>
              Turning your visionary ideas into reality
            </h1>
            <div className='mt-[2rem] md:mt-0 flex flex-col items-center md:items-start justify-center gap-[0rem] md:gap-[0.75rem] lg:gap-[1rem]'>
              {[
                'All Works',
                'Web Dev',
                'App Dev',
                'Digital Marketing',
                'Smart Business Cards',
                'Business Automation',
                'Custom Services',
              ].map((menuItem) => (
                <article
                  key={menuItem}
                  className={`${
                    menu === menuItem
                      ? 'font-bold border-black1 border-b-[2px] border-solid box-border'
                      : 'font-normal'
                  }`}
                  onClick={() => setMenu(menuItem)}
                >
                  <p className='m-0 p-[0.5rem] text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] relative'>
                    {menuItem}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <PortfolioContent selectedMenu={menu} />
    </section>
  );
}

export default WorkMenu;
