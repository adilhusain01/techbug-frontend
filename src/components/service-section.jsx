import ServiceCard from './service-card';
import axios from '../api/axios';
import { useState, useEffect } from 'react';

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await axios.get('/services');

      const data = response.data;
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div
      className={`my-32 w-full px-[12rem] flex-1 flex flex-col items-center justify-center max-w-full text-left text-[2.5rem] text-white gap-[8rem] font-plus-jakarta-sans `}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          image={service.image}
          description={service.description}
          features={service.features}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServiceSection;
