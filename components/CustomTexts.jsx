'use client';

import { motion } from 'framer-motion';
import { textVariant2 } from '../utils/motion';

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[20px] text-white ${textStyles}`}
  >{title}
  </motion.h2>
);
