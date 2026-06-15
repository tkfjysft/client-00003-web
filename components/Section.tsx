"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Section({ num, setActiveSection }: { num: number, setActiveSection: (n: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // 画面の50%に入ったら検知

  useEffect(() => {
    if (isInView) setActiveSection(num);
  }, [isInView, num, setActiveSection]);

  return (
    <section ref={ref} className="min-h-screen flex items-center p-20">
      <h1 className="text-clr-white text-8xl font-bold">Section {num}</h1>
    </section>
  );
}