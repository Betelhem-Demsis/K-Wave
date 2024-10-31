'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`mx-auto max-w-5xl ${styles.xPaddings} py-4 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01 rounded-[40px]" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <h2 className="font-extrabold text-[24px] leading-[30px] text-slate-500">
            K-WAVE
          </h2>
          <div className="relative">
            <img
              src="/menu.svg"
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={handleMenuClick} 
            />
            {isDropdownOpen && (
              <div className="absolute right-0 bg-gray-400 shadow-lg rounded-[10px] mt-2 z-10">
                <Link href="/signup">
                  <button className="block px-6 py-3 text-slate-700 hover:bg-slate-500 hover:rounded w-[150px] text-center">
                    Sign Up
                  </button>
                </Link>
                <Link href="/login">
                  <button className="block px-6 py-3 text-slate-700 hover:bg-slate-500 w-[150px] text-center">
                    Log In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
