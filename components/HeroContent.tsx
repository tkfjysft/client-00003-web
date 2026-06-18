import { SECTIONS } from "@/config/content";

export default function HeroSection() {
  const heroSection = SECTIONS.find((section) => section.type === "hero");

  if (!heroSection || !heroSection.items) return null;

  return (
    <div className="pt-20">
      {heroSection.items.map((item, index) => (
        <div key={index} className="mb-[110vh] px-[8vw]">
          {/* 左側の細いラインが「格式」を演出します */}
          <div className="border-l border-white/20 pl-8 md:pl-16 py-2">
            
            {/* コレクション番号：小さく、かつ文字間隔を広く取ることで洗練を表現 */}
            <span className="block text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 font-light">
              Collection {String(index + 1).padStart(2, '0')}
            </span>

            {/* メインタイトル：あえてイタリック（斜体）を使用し、動的な気品を出す */}
            <h1 className="text-[10vw] lg:text-[7rem] font-serif text-white tracking-[-0.03em] leading-[0.85] italic">
              {item.en}
            </h1>

            {/* サブテキスト：読みやすく、かつ主張しすぎないグレーのトーン */}
            <p className="mt-12 text-gray-400 text-sm md:text-base font-light tracking-[0.2em] leading-relaxed max-w-[450px]">
              {item.ja}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}