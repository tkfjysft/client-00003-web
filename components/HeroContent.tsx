import { motion } from "framer-motion";

export default function HeroContent({ items, activeSection }: { items: any[], activeSection: number }) {
  const currentItem = items[activeSection];
  if (!currentItem) return null;

  return (
    // pointer-events-none はそのままに、fixed で位置を維持
    <div className="fixed inset-0 flex flex-col justify-center px-[10vw] pointer-events-none z-30">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        
        // 【追加】スクロールして画面半分以上過ぎたら透明にする
        whileInView={{ opacity: 1 }} 
        viewport={{ margin: "-50% 0px -50% 0px" }}
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