'use client';
import { useState, useEffect } from 'react';

export default function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
const handleScroll = () => {
  const contentAreas = Array.from(document.querySelectorAll('.contents-area'));
  
  // 画面の縦幅の中央値を取得
  const screenCenter = window.innerHeight / 2;
  // ロゴの高さの半分（h-60 = 240px なので、その半分は 120px）
  const logoHalfHeight = 120; 

  const isOverlapping = contentAreas.some((element) => {
    const rect = element.getBoundingClientRect();
    
    // コンテンツのトップが画面中央より上で、かつボトムが画面中央より下にある場合
    // もしくは、コンテンツがロゴの表示領域（中央±120px）に食い込んでいるか判定
    return rect.top < (screenCenter + logoHalfHeight) && rect.bottom > (screenCenter - logoHalfHeight);
  });
  
  setIsVisible(!isOverlapping);
};

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期判定

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

  <div 
  className={`fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-700 ease-in-out
    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
>
  <img src="c/images/ci_logo.svg" alt="CI Logo" className="h-60 w-auto" />
</div>
  );
}