import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function CoatingContent() {
  const data = SECTIONS.find(s => s.type === "coating") as any;
  if (!data) return null;

  return (
<div className="h-full flex flex-col justify-start px-[6vw] py-20 mb-[20vh] contents-area md:mb-[100vh]">

  {/* タイトルエリア */}
  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-6 md:pl-8 mb-20 md:mb-40">
    <h2 className="text-[2rem] md:text-[5rem] lg:text-9xl uppercase leading-[1.1] text-gradient break-words">
      {data.title}
    </h2>
    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-[10px] md:text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  {/* グリッドレイアウト */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start w-full md:max-w-[80vw] bg-clr-base-1/70 p-6 md:p-8 backdrop-blur-md">
    
    {/* 左側：画像とリンク */}
    <div className="space-y-12 md:space-y-24">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
        <CustomImage 
          src={data.photo} 
          alt="Coating" 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 40vw" 
          priority 
        />
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6 pt-0 md:pt-4">
        {data.links.map((link: any, i: number) => (
          <Link 
            key={i} 
            href={link.href} 
            className="group flex items-center text-clr-primary-1 hover:text-white transition-colors duration-300 border-b border-clr-primary-1/20 pb-3 md:pb-4 text-sm md:text-lg"
          >
            <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    
    {/* 右側：説明と特徴 */}
    <div className="space-y-12 md:space-y-24">
      <p className="text-[#C0C0C0] text-sm md:text-xl leading-relaxed border-b border-white/10 pb-8 md:pb-10">
        {data.description}
      </p>
      
      <div className="space-y-8 md:space-y-12">
        {data.features.map((f: any, i: number) => (
          <div key={i} className="border-l border-clr-primary-1/30 pl-6 md:pl-8">
            <h4 className="text-white font-bold mb-2 md:mb-3 text-base md:text-xl tracking-wide">
              {f.title}
            </h4>
            <p className="text-[#C0C0C0] text-sm md:text-lg leading-relaxed">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}