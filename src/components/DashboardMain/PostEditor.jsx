import { useEffect, useState, lazy } from 'react';
const Blog = lazy(() => import('./Blog'));
import { TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ImageIcon from '@mui/icons-material/Image';
import draftToHtml from 'draftjs-to-html';
import Select from 'react-select';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from '../../api/axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function PostEditor() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const getTags = async () => {
    try {
      const response = await axios.get('/tags');
      const data = response.data.map((tag) => ({
        value: tag._id,
        label: tag.name,
      }));
      setTags(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSelectChange = (selected) => {
    setSelectedTags(selected || []);
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'thumbnail');

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      console.log('Response Text:', responseText);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = JSON.parse(responseText);
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const tags = selectedTags.map((tag) => tag.label);
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    if (!title || !description || !author || !selectedImage || !body) {
      toast.error('All fields are required');
      return;
    }

    try {
      const thumbnailUrl = await uploadImageToCloudinary(selectedImage);

      const response = await axios.post('/blogposts/posts', {
        title,
        description,
        author,
        thumbnail: thumbnailUrl,
        tags,
        body,
      });

      if (response.status === 201) {
        toast.success('Blog post created successfully');
        setIsCancelled(true);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return isCancelled ? (
    <Blog />
  ) : (
    <section
      className='w-full max-w-full h-screen overflow-y-scroll box-border bg-[#F5F5F5] font-plus-jakarta-sans relative'
      style={{ scrollbarWidth: 'none' }}
    >
      <div className='flex flex-row items-center justify-between px-[2rem] py-[1rem] border-b border-solid'>
        <h2 className='m-0 p-0 font-normal'>New Blog Post</h2>

        <div className='flex flex-row gap-[0.5rem]'>
          <button
            className='text-white bg-[#FF6E1F] hover:bg-[#af5c24] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className='text-white bg-[#575757] hover:bg-[#272727] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
            onClick={() => setIsCancelled(true)}
          >
            Cancel
          </button>
        </div>
      </div>

      <section className='p-[2rem] flex flex-col gap-[2rem]'>
        <div className='flex flex-col px-[2rem] py-[1rem] bg-white rounded-md gap-[1rem]'>
          <h3 className='m-0 font-normal'>Basic Info</h3>
          <TextField
            required
            id='outlined-required-title'
            label='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            id='outlined-required-description'
            label='Description'
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            required
            id='outlined-required-author'
            label='Author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            required
            className='hidden'
            type='file'
            accept='image/*'
            id='image-upload'
            onChange={handleImageChange}
          />
          <div className='flex flex-row items-center justify-between'>
            <label htmlFor='thumbnail' className='text-slate-600'>
              Thumbnail <sup className='text-red-700'>*</sup>
            </label>
            <label
              htmlFor='image-upload'
              className='flex items-center text-[1rem] cursor-pointer text-slate-600'
            >
              <AddCircleIcon fontSize='small' /> &nbsp; Select
            </label>
          </div>

          {selectedImage ? (
            <div className='p-[2rem] border border-solid border-slate-300 rounded-sm flex items-center justify-center'>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt='Selected'
                className='max-w-full h-auto'
              />
            </div>
          ) : (
            <div className='p-[2rem] flex flex-col items-center justify-center border border-solid border-slate-300 gap-[1rem] rounded-sm text-slate-600'>
              <ImageIcon fontSize='large' />
              <h3 className='m-0 text-[0.75rem] font-normal'>
                No Image Selected
              </h3>
            </div>
          )}

          <label htmlFor='tags' className='text-slate-600'>
            Tags <sup className='text-red-700'>*</sup>
          </label>
          <Select
            required
            isMulti
            options={tags}
            value={selectedTags}
            onChange={handleSelectChange}
          />
        </div>
        <div className='flex flex-col px-[2rem] py-[1rem] bg-white rounded-md gap-[1rem]'>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName='demo-wrapper'
            editorClassName='demo-editor'
            placeholder='Start Writing ...'
          />
        </div>
        <span>
          <h4 className='m-0 p-0 font-normal text-center'>
            For<span className='text-red-500'>&nbsp;Headings</span>
            <span className='text-green-500'>&nbsp;'H2'</span>&nbsp;with Size
            <span className='text-green-500'>&nbsp;30</span>&nbsp;is Optimal
            Case
          </h4>
          <h4 className='m-0 p-0 font-normal text-center'>
            For&nbsp;<span className='text-red-500'>&nbsp;Plain text</span>
            <span className='text-green-500'>&nbsp;'Normal'</span>&nbsp;with
            Size
            <span className='text-green-500'>&nbsp;24</span>&nbsp;is Optimal
            Case
          </h4>
          <h4 className='m-0 p-0 font-normal text-center'>
            For&nbsp;
            <span className='text-red-500'>&nbsp;Images</span>
            <span className='text-green-500'>&nbsp;'Center'</span>&nbsp;is
            Optimal Case
          </h4>
        </span>

        {/* <textarea
          disabled
          className='min-h-[50rem]'
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </section>

      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </section>
  );
}

export default PostEditor;
