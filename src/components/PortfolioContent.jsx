import axios from '../api/axios';
import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import PropTypes from 'prop-types';

function PortfolioContent({ selectedMenu }) {
  const [works, setWorks] = useState([]);

  const getWorks = async () => {
    try {
      const endpoint =
        selectedMenu === 'All Works' ? '/works' : `/works/${selectedMenu}`;
      const response = await axios.get(endpoint);

      const data = response.data;
      setWorks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, [selectedMenu]);

  return (
    <section className='w-full py-[4rem] md:py-[8rem] lg:py-[12rem] self-stretch grid grid-cols-1 md:grid-cols-2 px-[1rem] lg:px-[5rem] gap-[2rem] lg:gap-[8rem] box-border [background:linear-gradient(180deg,_#ffe9dd,_#fff)] overflow-hidden mx-auto'>
      {works.map((work, index) => (
        <PortfolioCard key={index} work={work} index={index} />
      ))}
    </section>
  );
}

PortfolioContent.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
};

export default PortfolioContent;
