'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src="/c/images/ci_logo.svg" 
        alt="CI Logo"
        className="w-[200px] md:w-60" 
        
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} 
        animate={{ 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)" 
        }} 
        transition={{ 
          duration: 1.5, 
          delay: 0.5, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, delay: 1, ease: "linear" }}
      />
    </motion.div>
  );
};