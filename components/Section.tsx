"use client";

// Section.tsx
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Section({ num, setActiveSection, isScrolling, activeSection, children }: any) {
  // 画面の真ん中あたりに来た時に判定する
  const { ref, inView } = useInView({
    threshold: 0.5, 
    rootMargin: "20px 0p	x 0px 0px", 
  });

  useEffect(() => {
    // クリック移動中は無視、かつ自分自身がアクティブでない時だけ更新
    if (!isScrolling && inView && activeSection !== num) {
      setActiveSection(num);
    }
  }, [inView, num, setActiveSection, isScrolling, activeSection]);

  return (
    <section ref={ref} id={`section-${num}`} className="min-h-[100vh] pt-[100vh]">
      {children}
    </section>
  );
}