import { useState } from 'react';
import PortfolioContent from '../components/PortfolioContent';

function WorkMenu() {
  const [selectedMenu, setSelectedMenu] = useState('All Works');

  return (
    <section className='w-full'>
      <div className='m-0 self-stretch flex flex-row items-start justify-start box-border w-full'>
        <div className='py-[7rem] lg:py-[10rem] px-[1rem] md:px-[2rem] lg:px-0 flex-1 flex flex-col md:flex-row items-center justify-around box-border w-full'>
          <h1 className='p-0 lg:p-2 m-0 relative leading-[2.5rem] md:leading-[5rem] lg:leading-[6.5rem] font-semibold !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] [-webkit-text-fill-color:transparent] inline-block shrink-0 w-full md:w-[70%] text-[2.5rem] md:text-[4rem] lg:text-[6rem] text-center md:text-left'>
            Turning your visionary ideas into reality
          </h1>
          <div className='mt-[2rem] md:mt-0 flex flex-col items-center md:items-start justify-center gap-[0rem] md:gap-[0.75rem] lg:gap-[1rem]'>
            {[
              'All Works',
              'Website',
              'Apps',
              'Digital Marketing',
              'Smart Business Cards',
            ].map((menu) => (
              <article
                key={menu}
                className={`${
                  selectedMenu === menu
                    ? 'font-bold border-black1 border-b-[2px] border-solid box-border'
                    : 'font-normal'
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                <p className='m-0 p-[0.5rem] text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] relative'>
                  {menu}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className='pt-0 md:pt-[5rem] w-full self-stretch [background:linear-gradient(180deg,_#ffe9dd,_#fff)] overflow-hidden box-border'>
        <div className='py-[2rem] md:py-[8rem] self-stretch grid grid-cols-1 md:grid-cols-2 justify-items-center px-[2.5rem] lg:px-[5rem] box-border gap-[2rem] md:gap-[4rem] lg:gap-[8rem] lg:pt-[2.75rem] lg:pb-[2.75rem] lg:box-border'>
          <PortfolioContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </section>
  );
}

export default WorkMenu;
