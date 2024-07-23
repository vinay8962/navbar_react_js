import React from 'react';
import Image from '../assets/milky-way-8149815.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='relative h-screen w-full'>
      <img src={Image} className='object-cover w-full h-full' alt="Milky Way" />

      <div className='absolute inset-0 flex justify-center items-center'>

      </div>
    </div>
  );
}

export default Home;
