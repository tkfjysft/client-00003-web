'use client';
import { useState, useEffect } from 'react';

export default function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // requestAnimationFrameを使うことで、ブラウザが再描画する直前の最新状態で計算させる
      requestAnimationFrame(() => {
        const contentAreas = Array.from(document.querySelectorAll('.contents-area'));
        const screenCenter = window.innerHeight / 2;
        const logoHalfHeight = 120; 

        const isOverlapping = contentAreas.some((element) => {
          const rect = element.getBoundingClientRect();
          // rect.top 等が 0 になっていないか確認するためのガード
          if (rect.top === 0 && rect.bottom === 0) return false;

          return rect.top < (screenCenter + logoHalfHeight) && rect.bottom > (screenCenter - logoHalfHeight);
        });
        
        setIsVisible(!isOverlapping);
      });
    };

    // スクロール時
    window.addEventListener('scroll', handleScroll);
    
    // ロード直後の判定を確実にするため、少し時間をずらして何度か試す
    const intervals = [100, 300, 600].map(delay => setTimeout(handleScroll, delay));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      intervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-700 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <img src="c/images/ci_logo.svg" alt="CI Logo" className="w-[200px] md:w-60 h-auto" />
    </div>
  );
}