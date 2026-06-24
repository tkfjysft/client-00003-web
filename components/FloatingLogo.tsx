'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export default function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const contentAreas = Array.from(document.querySelectorAll('.contents-area'));
        const screenCenter = window.innerHeight / 2;
        const logoHalfHeight = 120; 

        const isOverlapping = contentAreas.some((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top === 0 && rect.bottom === 0) return false;

          return rect.top < (screenCenter + logoHalfHeight) && rect.bottom > (screenCenter - logoHalfHeight);
        });
        
        setIsVisible(!isOverlapping);
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    const intervals = [100, 300, 600].map(delay => setTimeout(handleScroll, delay));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      intervals.forEach(clearTimeout);
    };
  }, []);


const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      const contentAreas = Array.from(document.querySelectorAll('.contents-area'));
      const screenCenter = window.innerHeight / 2;
      const logoHalfHeight = 120; 

      const isOverlapping = contentAreas.some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < (screenCenter + logoHalfHeight) && rect.bottom > (screenCenter - logoHalfHeight);
      });
      setIsVisible(!isOverlapping);
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]); 





  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-700 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <img src="/c/images/ci_logo.svg" alt="CI LogoLogo" className="w-[200px] md:w-60 h-auto" />
    </div>
  );
}