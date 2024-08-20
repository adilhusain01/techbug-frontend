import axios from '../../api/axios';
import { useState, useEffect, lazy } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const ConfirmationModal = lazy(() => import('./ConfirmationModal'));

function PostsList() {
  const [postsMeta, setPostsMeta] = useState([]);
  const [open, setOpen] = useState(false);
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

  return (
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
            <DeleteIcon
              fontSize='small'
              onClick={() => handleOpen(post)}
              className='cursor-pointer'
            />
          </div>
        </article>
      ))}

      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={deletePost}
        postTitle={postToDelete?.title}
      />
    </div>
  );
}

export default PostsList;
