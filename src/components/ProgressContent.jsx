import axios from '../api/axios';
import { useEffect, useState } from 'react';
import ProgressCard from './ProgressCard';

const ProgressContent = () => {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const response = await axios.get('/cards');

      const data = response.data;
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <div
        className={`self-stretch grid grid-cols-2 flex-wrap items-start justify-start gap-[1.5rem] max-w-full text-left text-[2.375rem] text-white font-plus-jakarta-sans`}
      >
        {cards.slice(0, 4).map((card) => (
          <ProgressCard
            key={card._id}
            title={card.title}
            image_uri={card.image_uri}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressContent;