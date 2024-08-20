import { useState, lazy } from 'react';
const PostEditor = lazy(() => import('./PostEditor'));
const PostsList = lazy(() => import('./PostsList'));

function Blog() {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <PostEditor />
  ) : (
    <section
      className='w-full max-w-full h-screen overflow-y-scroll box-border bg-[#F5F5F5]'
      style={{ scrollbarWidth: 'none' }}
    >
      <div className='flex flex-row items-center justify-between px-[2rem] py-[1rem] border-b border-solid'>
        <h2 className='m-0 p-0 font-normal'>Blog CMS</h2>
        <button
          className='text-white bg-[#FF6E1F] hover:bg-[#af5c24] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
          onClick={() => setIsEditing(true)}
        >
          Add New Blog
        </button>
      </div>
      <PostsList />
    </section>
  );
}

export default Blog;
