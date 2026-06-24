import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function AboutContent() {
  const data = SECTIONS.find(s => s.type === "about") as any;
  if (!data) return null;

  return (
<div className="h-full flex flex-col justify-start px-[6vw] py-20 mb-[20vh] contents-area md:mb-[100vh]">

  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-6 md:pl-8 mb-20 md:mb-40">
    <h2 className="text-[2rem] md:text-[5rem] lg:text-9xl uppercase leading-[1.1] text-gradient break-words">
      {data.title}
    </h2>
    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-[10px] md:text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start w-full md:max-w-[80vw] bg-clr-base-1/70 p-6 md:p-8 backdrop-blur-md">
    
    <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
      <CustomImage
        src={data.photo}
        alt="Greeting"
        fill
        className="object-cover" 
        sizes="(max-width: 768px) 100vw, 40vw" 
        priority 
      />
    </div>

    <div className="flex flex-col justify-center">
      <p className="text-white text-base md:text-xl font-light leading-relaxed mb-6 md:mb-8">
        {data.body}
      </p>
      <Link 
        href={data.links[0].href} 
        className="inline-block self-start text-clr-primary-1 border-b border-clr-primary-1 pb-1 hover:text-white transition-colors text-sm md:text-base"
      >
        {data.links[0].label} →
      </Link>
    </div>
  </div>
</div>
  );
}