import axios from '../api/axios';
import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import PropTypes from 'prop-types';
import AnimatedSection from './AnimatedSection';

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
    <>
      {works.map((work, index) => (
        <PortfolioCard key={index} work={work} index={index} />
      ))}
    </>
  );
}

PortfolioContent.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
};

export default PortfolioContent;
