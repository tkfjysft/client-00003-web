import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function CoatingContent() {
  const data = SECTIONS.find(s => s.type === "coating") as any;
  if (!data) return null;

  return (
<div className="h-full flex flex-col justify-start pl-[6vw] pr-[8vw] py-20 contents-area mb-[100vh]">

  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-8 mb-40">
    <h2 className="text-[3rem] md:text-[9rem] uppercase !leading-none text-gradient">
      {data.title}
    </h2>
    {/* ここだけ小さく設定 */}
    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start max-w-[60vw] bg-clr-base-1/70 p-8 backdrop-blur-md mb-40">
    <div className="space-y-24">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
        <CustomImage 
          src={data.photo} 
          alt="Coating" 
          fill 
          className="object-cover" 
          sizes="20vw" 
          priority 
        />
      </div>
      
      <div className="flex flex-col gap-6 pt-4">
        {data.links.map((link: any, i: number) => (
          <Link 
            key={i} 
            href={link.href} 
            className="group flex items-center text-clr-primary-1 hover:text-white transition-colors duration-300 border-b border-clr-primary-1/20 pb-4 text-base md:text-lg"
          >
            <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    
    {/* 右側：説明と特徴 */}
    <div className="space-y-24">
      <p className="text-[#C0C0C0] text-base md:text-xl leading-relaxed border-b border-white/10 pb-10">
        {data.description}
      </p>
      {data.features.map((f: any, i: number) => (
        <div key={i} className="border-l border-clr-primary-1/30 pl-8">
          <h4 className="text-white font-bold mb-3 text-lg md:text-xl tracking-wide">
            {f.title}
          </h4>
          <p className="text-[#C0C0C0] text-base md:text-lg leading-relaxed">
            {f.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}