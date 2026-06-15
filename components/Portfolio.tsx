"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import CustomImage from "@/components/CustomImage";


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // スクロール量の取得
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // スクロール位置に応じてセクション番号を算出 (5セクションの場合)
  // scrollYProgress(0〜1)を 1〜5 に変換
  // ※この数値はセクションの高さ調整で微調整可能です
  const section = useTransform(scrollYProgress,
      [0, 0.15, 0.35, 0.55, 0.75],
      [1, 2, 3, 4, 5]);

  // 値の変更を検知して state を更新
  section.on("change", (latest) => {
    setActiveSection(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 背景層（固定） */}
      <div className="fixed inset-0 z-0">
        <div className="relative w-full h-full">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <CustomImage 
                src={`/images/bg_section_${activeSection}.webp`} 
                alt="Night View" 
                fill 
                className="object-cover" 
                unoptimized
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* コンテンツ層 */}
<div className="relative z-20">
        {[1, 2, 3, 4, 5].map((num) => (
          <Section 
            key={num} 
            num={num} 
            setActiveSection={setActiveSection} 
          />
        ))}
      </div>

      {/* 実車レイヤー（右下固定） */}
      <div 
        className="fixed bottom-10 right-10 z-30 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-[600px] h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`car-${activeSection}-${isHovered}`} // キーを変えることで再描画をトリガー
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <CustomImage 
                src={`/images/car_section_${activeSection}${isHovered ? "-seethrough" : ""}.png`} 
                alt="Car" 
                fill 
                className="object-contain" 
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}