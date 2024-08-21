import { useState, useEffect, lazy } from 'react';
import axios from '../../api/axios';
const ConfirmationModal = lazy(() => import('./ConfirmationModal'));
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const PostEditor = lazy(() => import('./PostEditor'));

function Blog() {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [postsMeta, setPostsMeta] = useState([]);
  const [postData, setPostData] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);

  const getPostsMeta = async () => {
    try {
      const response = await axios.get(`/blogposts/meta`);
      const data = response.data;
      setPostsMeta(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const response = await axios.get(`/blogposts/posts/${id}`);
      const data = response.data;
      setPostData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsMeta();
  }, []);

  const handleOpen = (post) => {
    setPostToDelete(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPostToDelete(null);
  };

  const deletePost = async () => {
    if (!postToDelete) return;

    try {
      await axios.delete(`/blogposts/posts/${postToDelete._id}`);
      setPostsMeta(postsMeta.filter((post) => post._id !== postToDelete._id));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    getPost(id);
    setIsEditing(true);
  };

  return isEditing ? (
    <PostEditor post={postData} />
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
      {/* <PostsList /> */}
      <div className='m-0 p-[2rem] grid grid-cols-4 gap-[2rem]'>
        {postsMeta.map((post) => (
          <article
            key={post._id}
            className='bg-white pb-[0.5rem] rounded-md shadow-lg flex flex-col gap-[0.75rem]'
          >
            <img
              className='w-full h-auto object-cover'
              src={post.thumbnail}
              alt={post.title}
            />

            <h3 className='m-0 px-[0.5rem] text-[1rem] font-medium text-overflow-ellipsis'>
              {post.title}
            </h3>
            <div className='px-[0.5rem] flex flex-row items-center justify-between'>
              <h4 className='m-0 text-[0.75rem] font-normal'>
                {new Date(post.updatedAt).toLocaleString('en-UK', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </h4>
              <span className='flex flex-row gap-[0.25rem]'>
                <CircleIcon
                  fontSize='small'
                  color={`${post.published ? 'success' : 'error'}`}
                />
                <EditIcon
                  fontSize='small'
                  onClick={() => handleEdit(post._id)}
                  className='cursor-pointer'
                />
                <DeleteIcon
                  fontSize='small'
                  onClick={() => handleOpen(post)}
                  className='cursor-pointer'
                />
              </span>
            </div>
          </article>
        ))}

        <ConfirmationModal
          open={open}
          handleClose={handleClose}
          handleDelete={deletePost}
          postTitle={postToDelete?.title}
          mode={'delete'}
        />
      </div>
    </section>
  );
}

export default Blog;
