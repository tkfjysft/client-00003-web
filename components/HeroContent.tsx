import { motion } from "framer-motion";

export default function HeroContent({ items, activeSection }: { items: any[], activeSection: number }) {

  console.log("items:", items);
  console.log("activeSection:", activeSection);

  
  // 安全装置：currentItem が存在するか確認し、なければ null を返す
  const currentItem = items[activeSection];

  if (!currentItem) return null;

  return (
    <div className="h-screen flex flex-col justify-center px-[10vw] pointer-events-none">
      {/* ... 以降は同じコード ... */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-white/30 text-sm tracking-[0.3em] uppercase mb-4 block">
          Collection {String(activeSection + 1).padStart(2, '0')}
        </span>

        <h1 className="text-[12vw] md:text-[8rem] font-medium text-white tracking-[-0.05em] leading-[0.9]">
          {currentItem.en}
        </h1>

        <p className="text-gray-400 mt-8 max-w-md text-sm md:text-base font-light tracking-[0.1em] leading-relaxed border-l border-white/20 pl-6">
          {currentItem.ja}
        </p>
      </motion.div>
    </div>
  );
}