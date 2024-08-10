import ServiceCard from './ServiceCard';
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
    <section
      className={`max-w-full flex flex-col items-center justify-center px-[1rem] md:px-[2rem] lg:px-[15rem] py-[5rem] lg:py-[8rem] text-[2.5rem] text-white gap-[4rem] md:gap-[5rem]`}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
          description={service.description}
          features={service.features}
          index={index}
        />
      ))}
    </section>
  );
};

export default ServiceSection;
