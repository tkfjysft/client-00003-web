import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function MaintenanceContent() {
  const data = SECTIONS.find(s => s.type === "maintenance") as any;
  if (!data) return null;

  return (
<div className="h-full flex flex-col justify-start px-[6vw] py-20 mb-[20vh] contents-area md:mb-[100vh]">

  {/* ヘッダー */}
  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-6 md:pl-8 mb-20 md:mb-40">
    <h2 className="text-[2rem] md:text-[5rem] lg:text-9xl uppercase leading-[1.1] text-gradient break-words">
      {data.title}
    </h2>
    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-[10px] md:text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start w-full md:max-w-[80vw] bg-clr-base-1/70 p-6 md:p-8 backdrop-blur-md">
    
    <div className="space-y-8 md:space-y-24">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
        <CustomImage 
          src={data.photo} 
          alt="Maintenance" 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 40vw" 
          priority 
        />
      </div>
      <p className="text-[#C0C0C0] text-sm md:text-xl leading-relaxed">
        {data.description}
      </p>
    </div>

    {/* ステップフロー */}
    <div className="grid grid-cols-1 gap-6 md:gap-24">
      {data.steps.map((step: any) => (
        <Link 
          key={step.id} 
          href={step.link}
          className="group block bg-[#1A1625]/30 p-6 md:p-8 border-l-2 border-clr-primary-1 hover:border-[#ffffff] transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <span className="text-clr-primary-1 group-hover:text-white font-bold text-base md:text-lg transition-colors">
              {step.id}
            </span>
            <span className="text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase">
              {step.title}
            </span>
          </div>
          <h4 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">{step.label}</h4>
          <p className="text-[#C0C0C0] text-sm md:text-base leading-relaxed">
            {step.text}
          </p>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
}