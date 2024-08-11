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
    <section className='max-w-full z-1'>
      <div className='mt-[5rem] lg:mt-[8rem] px-[2rem] lg:px-[8rem] box-border text-2xl text-white flex flex-row items-start justify-start gap-[1rem] overflow-x-auto flex-auto md:flex-wrap'>
        <p
          className={`min-w-fit m-0 pb-[0.5rem] lg:pb-[1rem] relative font-medium ${
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

      <NewsSlider tag={selectedTag} />
      <LatestArticlesGroup />
    </section>
  );
}

export default BlogHead;
