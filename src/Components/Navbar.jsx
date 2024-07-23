import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleSelectChange = (option) => {
    setSelectedValue(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  function showprofile() {
    setProfile(true)
  }
  function hideProfile() {
    setProfile(false)
  }

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
            className='w-28 h-12 flex justify-center items-center rounded-full cursor-pointer text-white hover:bg-green-500 transition duration-1000'
          >
            Home
          </motion.li>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center  text-white items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000'
          >
            About
          </motion.li>
          <motion.li
            initial={{ backgroundColor: "transparent" }}
            whileHover={{
              backgroundColor: "white",
              color: "black",
              transition: { duration: 1 }
            }}
            className='w-28 h-12 flex justify-center  text-white items-center rounded-full cursor-pointer hover:bg-green-500 transition duration-1000'
          >
            Contact
          </motion.li>


        </ul>
        <div className='profile-icon w-8 h-8 flex  text-white justify-center items-center mt-2 ml-28 border-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={showprofile} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

        </div>

      </div>
      {profile && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="absolute inset-0 flex justify-center h-screen w-full items-center bg-black bg-opacity-50"
          onClick={hideProfile}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg bg-opacity-50">
            <h1 className="text-2xl font-bold">Hi, I am User</h1>

            <h1>User Name</h1>
            <p>User Details</p>

          </div>
        </motion.div>
      )}


    </header>
  );
};

export default Navbar;
