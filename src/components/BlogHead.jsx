import React, { useEffect, useState } from 'react';
import NewsSlider from './NewsSlider';
import LatestArticlesGroup from './LatestArticlesGroup';
import axios from '../api/axios';

function BlogHead() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All Posts');

  const getTags = async () => {
    try {
      const response = await axios.get('/tags');
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <section className='w-full'>
      <div className='mt-[8rem] flex flex-row items-start justify-start py-[0rem] px-[5rem] box-border max-w-full'>
        <div className='flex flex-col items-start justify-start gap-[0.5rem] max-w-full'>
          <div className='text-white text-2xl flex flex-row items-start justify-start gap-[1.5rem] lg:flex-wrap'>
            <p
              className={`min-w-fit m-0 pb-4 relative font-medium ${
                selectedTag === 'All Posts'
                  ? 'text-[#F9CA06] border-[#F9CA06] border-b-[2px] border-solid '
                  : ''
              }`}
              onClick={() => handleTagClick('All Posts')}
            >
              All Posts
            </p>
            {tags.map((tag) => (
              <p
                key={tag._id}
                className={`min-w-fit m-0 pb-4 relative font-semibold ${
                  selectedTag === tag.name
                    ? 'text-[#F9CA06] border-[#F9CA06] border-b-[2px] border-solid '
                    : ''
                }`}
                onClick={() => handleTagClick(tag.name)}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <NewsSlider tag={selectedTag} />
      <LatestArticlesGroup />
    </section>
  );
}

export default BlogHead;
