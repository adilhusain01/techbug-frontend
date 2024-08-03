import { useState } from 'react';
import PortfolioContent from '../components/portfolio-content';

function WorkMenu() {
  const [selectedMenu, setSelectedMenu] = useState('All Works');

  return (
    <>
      <section className='self-stretch flex flex-row items-start justify-start box-border max-w-full text-left text-[6rem] text-black font-plus-jakarta-sans mq450:pb-[2.125rem] mq450:box-border'>
        <div className='py-[10rem] flex-1 flex flex-row items-start justify-between py-[0rem] pl-[5.5rem] pr-[4.812rem] box-border max-w-full gap-[1.25rem] mq450:pl-[1.25rem] mq450:box-border mq825:pl-[2.75rem] mq825:pr-[2.375rem] mq825:box-border mq1400:flex-wrap'>
          <h1 className='p-2 m-0 w-[59.063rem] relative text-inherit leading-[6.563rem] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(104.08deg,_#ff6e1f,_#fad3be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-[1.813rem] mq450:leading-[2.625rem] mq825:text-[3rem] mq825:leading-[3.938rem]'>{`Turning your visionary ideas into reality `}</h1>
          <div className='flex flex-col items-start justify-center gap-[1rem] text-[1.25rem]'>
            {[
              'All Works',
              'Website',
              'Apps',
              'Digital Marketing',
              'Smart Business Cards',
            ].map((menu) => (
              <div
                key={menu}
                className={`flex flex-row items-center justify-center p-[0.5rem] ${
                  selectedMenu === menu
                    ? 'font-semibold border-black1 border-b-[2px] border-solid box-border'
                    : 'font-medium'
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                <div className='relative inline-block min-w-[5.5rem] mq450:text-[1rem]'>
                  {menu}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='w-full self-stretch [background:linear-gradient(180deg,_#ffe9dd,_#fff)] overflow-hidden flex flex-col items-center justify-center box-border max-w-full'>
        <div className='w-full py-[8rem] self-stretch grid grid-cols-2 justify-items-center px-[5.5rem] box-border max-w-full gap-[8rem] lg:pt-[2.75rem] lg:pb-[2.75rem] lg:box-border mq825:py-[1.813rem] mq825:px-[1.375rem] mq825:box-border mq1400:flex-wrap mq1400:pl-[2.75rem] mq1400:pr-[2.75rem] mq1400:box-border'>
          <PortfolioContent selectedMenu={selectedMenu} />
        </div>
      </section>
    </>
  );
}

export default WorkMenu;
