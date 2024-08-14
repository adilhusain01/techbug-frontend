import ServiceCard from './ServiceCard';
import axios from '../api/axios';
import { useState, useEffect } from 'react';
// const AnimatedSection = lazy(() => import('./AnimatedSection'));

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
      className={`max-w-full flex flex-col items-center justify-center py-[2.5rem] md:py-[5rem] lg:py-[8rem] text-white gap-[4rem] md:gap-[5rem] mx-auto`}
    >
      {services.map((service, index) => (
        // <AnimatedSection>
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
          description={service.description}
          features={service.features}
          index={index}
        />
        // </AnimatedSection>
      ))}
    </section>
  );
};

export default ServiceSection;
