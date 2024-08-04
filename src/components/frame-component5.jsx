import FrameComponent from './frame-component';

const FrameComponent5 = () => {
  return (
    <div className='flex flex-col justify-center pb-[4rem] px-[8rem] box-border max-w-full text-left text-[1rem] text-black font-plus-jakarta-sans'>
      <h1 className='text-right text-[#F9CA06]'>View All</h1>
      <div className='grid grid-cols-3 gap-[2rem] lg:grid-cols-2'>
        <FrameComponent />
      </div>
    </div>
  );
};

export default FrameComponent5;
