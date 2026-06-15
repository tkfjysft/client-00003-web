"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// ※このファイルは "use client" があるため、Next.js はSSRで中身を無理やり計算しようとしません
export default function Section({ num, setActiveSection, children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -80% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveSection(num);
    }
  }, [isInView, num, setActiveSection]);

  return (
    <motion.section 
      ref={ref} 
      className="min-h-screen flex items-center p-20"
    >
      {children}
    </motion.section>
  );
}