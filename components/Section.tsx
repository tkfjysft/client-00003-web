"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Section({ num, children, onInView }: any) {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    rootMargin: "20px 0px 0px 0px", 
  });




  useEffect(() => {
	console.log(`セクション ${num} の状態:`, inView);
    if (inView) {
      onInView(num); 
    }
  }, [inView, num, onInView]);


  return (
    <section ref={ref} id={`section-${num}`} className="min-h-[100vh] pt-[20vh] py-200">
      {children}
    </section>
  );
}