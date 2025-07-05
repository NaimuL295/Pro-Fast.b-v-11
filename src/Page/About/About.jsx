import React from 'react';
import { FaTruckMoving, FaGlobeAsia, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
      >
        About Our Parcel Service
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
      >
        We are committed to delivering your parcels fast, safe, and reliably across every district in Bangladesh.
        Whether you’re a small business or an individual, our technology-driven service ensures transparency,
        real-time tracking, and excellent customer support.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[ 
          { icon: <FaTruckMoving />, title: 'Fast Delivery', text: 'Timely pickup and on-time delivery.' },
          { icon: <FaGlobeAsia />, title: 'Nationwide Coverage', text: 'We reach every district in Bangladesh.' },
          { icon: <FaSmile />, title: 'Trusted by Thousands', text: 'Over 10,000+ satisfied customers.' }
        ].map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <div className="text-4xl text-lime-500 mx-auto mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
