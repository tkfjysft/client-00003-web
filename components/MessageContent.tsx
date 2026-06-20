import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function MessageContent() {
  const data = SECTIONS.find(s => s.type === "message") as any;
  if (!data) return null;

  return (
    // justify-center を削除し、items-start (左上寄せ) に変更
    // mx-auto を削除し、左寄せを強制します

<div className="h-full flex flex-col justify-start pl-[6vw] pr-[8vw] py-20 contents-area mb-[100vh]">

  
  <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-8 mb-40"> 
        <h2 className="text-[3rem] md:text-[9rem] uppercase !leading-none text-gradient">{data.title}</h2>

    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start max-w-[60vw] bg-clr-base-1/70 p-8 backdrop-blur-md mb-40">
    
    <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
      <CustomImage
        src={data.photo}
        alt="Coating Service"
        fill
          className="object-cover" 
          sizes="20vw" 
          priority 
      />
    </div>

    <div className="space-y-12 bg-[#1A1625]/30 p-8 rounded-sm border-l border-clr-primary-1/50">
      <p className="text-[#C0C0C0] font-light leading-relaxed tracking-wide text-base md:text-lg">
        {data.intro}
      </p>
      
      <div className="space-y-8">
        {(data.details as any[]).map((item: any, idx: number) => (
          <div key={idx}>
            <h4 className="text-clr-primary-1 font-bold text-sm md:text-base tracking-[0.2em] uppercase mb-2">
              {item.label}
            </h4>
            <p className="text-[#C0C0C0] font-light text-base md:text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-16 pt-8 border-t border-clr-primary-1/20 w-full max-w-[1200px] mb-40">
    <p className="text-[#C0C0C0] text-base md:text-lg italic font-light tracking-wide">
      {data.footer}
    </p>
  </div>

</div>


  );
}