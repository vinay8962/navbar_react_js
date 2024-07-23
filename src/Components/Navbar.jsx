import { motion } from 'framer-motion';
import React, { useState } from 'react';


const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};
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
          <div className="w-80 bg-white p-1 rounded-lg shadow-lg bg-opacity-50">
            <div className="text-center border p-3 border-gray-700 rounded-md">
              <div className="mb-3  flex justify-center">
                {/* Admin icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>



              </div>
              <h1 className="text-2xl font-bold my-4">Name</h1>
              <h3 className="text-xl font-bold my-4">+91-1234567890</h3>
              <h3 className="text-xl font-bold my-4">email1234@gmail.com</h3>
              <p className="text-lg font-bold my-4">Address</p>
            </div>
          </div>

        </motion.div>
      )}


    </header>
  );
};

export default Navbar;
