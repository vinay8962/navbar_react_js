import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectChange = (option) => {
    setSelectedValue(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <header className='absolute inset-x-0 top-0 z-50 flex justify-center'>
      <div className='bg-black/50 w-9/12 flex justify-center h-12 mt-8 rounded-full'>
        <ul className='flex justify-center gap-10'>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ 
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000'
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ 
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000'
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ 
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000'
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ 
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000 relative'
          >
            <div onClick={toggleDropdown} className="cursor-pointer">Select</div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  
                  className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-sm mt-1 overflow-hidden z-50"
                >
                  {options.map((option) => (
                    <motion.li
                      key={option.value}
                      className=" p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectChange(option.value)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {option.label}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
           
        </ul> 
        <div className='profile-icon w-8 h-8 flex justify-center items-center mt-2 ml-28 border-2 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

        </div>
       
      </div>
    </header>
  );
};

export default Navbar;
