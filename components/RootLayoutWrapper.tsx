'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen'; 

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.main>
    </>
  );
}