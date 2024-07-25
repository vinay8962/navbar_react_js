import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaInstagram, FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Avatar from '../assets/portrait-handsome-hipster-man-glasses-3d-rendering.jpg'




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
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -50 }}
          className="absolute inset-0 flex justify-center h-screen w-full items-center bg-black bg-opacity-50"

        >
          <motion.div
            initial={{ opacity: 0, x: 200 }} // Slide in from the right
            animate={{ opacity: 1, x: 0 }} // Center it
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 200 }} // Slide out to the right
            className="w-80   p-1 rounded-lg shadow-lg">

            <div className="text-center border rounded-lg   border-gray-700 ">
              <div className='bg-red-100 rounded-t-lg p-2 bg-opacity-50 '>
                <div className='flex justify-end  '>
                  <div onClick={hideProfile} >
                    <motion.div whileHover={{ scale: 1.2, rotate: 90, transition: { duration: 0.5 } }} transition={{ duration: 0.5 }} >
                      <RxCross1 className='size-5' />
                    </motion.div>
                  </div>
                </div>
                <div className=" relative top-12  flex justify-center ">
                  <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0, x: -400 }}
                    className="p-1 border-4 border-black rounded-full">
                    <img src={Avatar} alt="" className="size-24 rounded-full" />
                  </motion.div>
                </div>
              </div>
              <div className='bg-white  rounded-b-lg p-2 pt-8 pb-4 bg-opacity-50'>
                <h1 className="text-2xl font-bold my-4">Name</h1>
                <h3 className="text-xl font-bold my-4">+91-1234567890</h3>
                <h3 className="text-xl font-bold my-4">email1234@gmail.com</h3>
                <p className="text-lg font-bold my-4">Address</p>


                <motion.div
                  initial={{ opacity: 0, x: -400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0, x: -400 }}
                  className='flex justify-center bg-black bg-opacity-50 rounded-full p-2'>
                  <ul className='flex space-x-6'>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='  p-1 rounded-full hover:text-red-600'> <FaInstagram className='size-6' /></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='  p-1 rounded-full hover:text-blue-700'> <FaFacebookSquare className='size-6' /></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='  p-1 rounded-full hover:text-black'> <FaGithub className='size-6' /></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='  p-1 rounded-full hover:text-blue-700'> <FaLinkedin className='size-6' /></motion.li>

                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      )
      }


    </header >
  );
};

export default Navbar;
