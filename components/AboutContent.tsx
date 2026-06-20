import Link from 'next/link';
import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function AboutContent() {
  const data = SECTIONS.find(s => s.type === "about") as any;
  if (!data) return null;

  return (
    <div className="h-full flex flex-col justify-start pl-[6vw] pr-[8vw] py-20 contents-area mb-[100vh]">

      <div className="mb-16 border-l-[3px] border-clr-primary-1 pl-8 mb-40">
        <h2 className="text-[3rem] md:text-[9rem] uppercase !leading-none text-gradient">{data.title}</h2>
        <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">{data.subtitle}</p>
      </div>

  <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start max-w-[60vw] bg-clr-base-1/70 p-8 backdrop-blur-md mb-40">
        <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl">
          <CustomImage
		   src={data.photo}
		   alt="Greeting"
		   fill
          className="object-cover" 
          sizes="20vw" 
          priority 
		  />
        </div>

        <div>
          <p className="text-white text-xl font-light leading-relaxed mb-8">
            {data.body}
          </p>
          <Link href={data.links[0].href} className="text-clr-primary-1 border-b border-clr-primary-1 pb-1 hover:text-white transition-colors">
            {data.links[0].label} →
          </Link>
        </div>
      </div>
    </div>
  );
}