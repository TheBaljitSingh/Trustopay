import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCities = () => {
  const cities = [`India's Digital Economy`, `India's Digitalization`, `India's Digital Revolution`, `Make in India`]; // Example cities
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3000); // Change city every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [cities.length]);

  return (
    
        <AnimatePresence mode="wait">
          <motion.span
            key={cities[currentCityIndex]} // Key to trigger animations on change
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 20, x: 0 }}
            transition={{ duration: 1.0 }}
            className="inline-block font-bold h-28 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-5xl text-[#0A86B7]"
          >
            {cities[currentCityIndex]}
          </motion.span>
        </AnimatePresence>
      
  );
};

export default AnimatedCities;
