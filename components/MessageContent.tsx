import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function MessageContent() {
  const data = SECTIONS.find(s => s.type === "message") as any;
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

  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start w-full md:max-w-[80vw] bg-clr-base-1/70 p-6 md:p-8 backdrop-blur-md mb-20 md:mb-40">
    
    <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
      <CustomImage
        src={data.photo}
        alt="Message Image"
        fill
        className="object-cover" 
        sizes="(max-width: 768px) 100vw, 40vw" 
        priority 
      />
    </div>

    <div className="space-y-8 md:space-y-12 bg-[#1A1625]/30 p-6 md:p-8 rounded-sm border-l border-clr-primary-1/50">
      <p className="text-[#C0C0C0] font-light leading-relaxed tracking-wide text-sm md:text-lg">
        {data.intro}
      </p>
      
      <div className="space-y-6 md:space-y-8">
        {(data.details as any[]).map((item: any, idx: number) => (
          <div key={idx}>
            <h4 className="text-clr-primary-1 font-bold text-xs md:text-base tracking-[0.2em] uppercase mb-1 md:mb-2">
              {item.label}
            </h4>
            <p className="text-[#C0C0C0] font-light text-sm md:text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-8 pt-8 border-t border-clr-primary-1/20 w-full max-w-[1200px]">
    <p className="text-[#C0C0C0] text-sm md:text-lg italic font-light tracking-wide leading-relaxed">
      {data.footer}
    </p>
  </div>

</div>


  );
}