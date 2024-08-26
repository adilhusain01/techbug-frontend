import ServiceCard from './ServiceCard';
import axios from '../api/axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const { x, y } = useMousePosition();

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
      className={`w-full max-w-full flex flex-col items-center justify-center`}
    >
      <motion.div className=' mask'>
        animate=
        {{
          WebkitMaskPosition: `${x}px ${y}px`,
        }}
      </motion.div>
      <div className='max-w-full flex flex-col items-center justify-center text-white gap-[4rem] md:gap-[5rem] mx-auto'>
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
      </div>
    </section>
  );
};

export default ServiceSection;
