import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function MaintenanceContent() {
  const data = SECTIONS.find(s => s.type === "maintenance") as any;
  if (!data) return null;

  return (
<div className="h-full flex flex-col justify-start pl-[6vw] pr-[8vw] py-20 contents-area mb-[100vh]">

  {/* ヘッダー */}
  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-8 mb-40">
    <h2 className="text-[3rem] md:text-[9rem] uppercase !leading-none text-gradient">
      {data.title}
    </h2>
    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start max-w-[60vw] bg-clr-base-1/70 p-8 backdrop-blur-md mb-40">
    <div className="space-y-24">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
        <CustomImage 
          src={data.photo} 
          alt="Maintenance" 
          fill 
          className="object-cover" 
          sizes="20vw" 
          priority 
        />
      </div>
      <p className="text-[#C0C0C0] text-base md:text-xl leading-relaxed">
        {data.description}
      </p>
    </div>

    {/* 右側：ステップフロー */}
    <div className="grid grid-cols-1 gap-24">
      {data.steps.map((step: any) => (
        <Link 
          key={step.id} 
          href={step.link}
          className="group block bg-[#1A1625]/30 p-8 border-l-2 border-clr-primary-1 hover:border-[#ffffff] transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-clr-primary-1 group-hover:text-white font-bold text-lg transition-colors">
              {step.id}
            </span>
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase">
              {step.title}
            </span>
          </div>
          <h4 className="text-white text-xl font-bold mb-3">{step.label}</h4>
          <p className="text-[#C0C0C0] text-base leading-relaxed">
            {step.text}
          </p>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
}