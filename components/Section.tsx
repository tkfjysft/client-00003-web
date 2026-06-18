"use client";

// Section.tsx
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Section({ num, children, onInView }: any) {
  // 画面の真ん中あたりに来た時に判定する
  const { ref, inView } = useInView({
    threshold: 0.1, 
    rootMargin: "20px 0px 0px 0px", 
  });




  useEffect(() => {
	console.log(`セクション ${num} の状態:`, inView);
    if (inView) {
      onInView(num); // 親に「今の番号」を伝える
    }
  }, [inView, num, onInView]);


  return (
    <section ref={ref} id={`section-${num}`} className="min-h-[100vh] pt-[100vh]">
      {children}
    </section>
  );
}