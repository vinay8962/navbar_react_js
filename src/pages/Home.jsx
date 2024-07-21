import React from 'react';
import Image from '../assets/milky-way-8149815.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='relative h-screen w-screen'>
       <img src={Image} className='object-cover w-full h-full' alt="Milky Way" />
       
       <div className='absolute inset-0 flex justify-center items-center'>
         
          <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >

<h1 className='text-white  font-bold'>Welcome to the Galaxy</h1>
    </motion.div>
       </div>
    </div>
  );
}

export default Home;
