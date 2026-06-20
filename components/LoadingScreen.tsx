'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// ローディングコンポーネント
export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // 3秒後にローディングを完了させる
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 最後にフェードアウト
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* CIロゴのアニメーション */}
      <motion.img
        src="c/images/ci_logo.svg" // ロゴのパス
        alt="CI Logo"
        className="w-[200px] md:w-60" // サイズ調整
        
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // 初期状態：透明、縮小、ボカシ
        animate={{ 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)" 
        }} // 登場：不透明、標準サイズ、クッキリ
        transition={{ 
          duration: 1.5, 
          delay: 0.5, // 少し待ってから登場
          ease: [0.22, 1, 0.36, 1] 
        }}
      />
      
      {/* オプション：高級感を出す光の筋（もしあれば） */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, delay: 1, ease: "linear" }}
      />
    </motion.div>
  );
};