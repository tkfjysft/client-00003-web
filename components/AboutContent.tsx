import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function AboutContent() {
  const data = SECTIONS.find(s => s.type === "about") as any;
  if (!data) return null;

  return (
    <div className="h-full flex flex-col justify-start pl-[100px] pr-[8vw] py-20">
      <div className="mb-16 border-l-[3px] border-[#416E98] pl-8">
        <h2 className="text-[3rem] md:text-[9rem] text-clr-light-2 uppercase">{data.title}</h2>
        <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">{data.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start max-w-[1200px]">
        {/* 写真枠 */}
        <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-[#416E98]/30 shadow-2xl">
          <CustomImage src={data.photo} alt="Greeting" fill className="object-cover" sizes="50vw" priority />
        </div>

        <div>
          <p className="text-white text-xl font-light leading-relaxed mb-8">
            {data.body}
          </p>
          <a href={data.links[0].href} className="text-[#416E98] border-b border-[#416E98] pb-1 hover:text-white transition-colors">
            {data.links[0].label} →
          </a>
        </div>
      </div>
    </div>
  );
}