import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";


export default function HeroSection() {
  const heroSection = SECTIONS.find((section) => section.type === "hero");

  if (!heroSection || !heroSection.items) return null;

  return (
    <div className="pt-[10vh] contents-area">
      {heroSection.items.map((item, index) => (
        <div key={index} className="mb-[70vh] px-[8vw]">
          <div className="border-l border-white/20 pl-8 md:pl-16 py-2">
            
            <span className="block text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 font-light">
              Collection {String(index + 1).padStart(2, '0')}
            </span>

            <h1 className="text-[10vw] lg:text-8xl text-white tracking-[-0.03em] leading-[1.5] text-gradient">
              {item.en}
            </h1>

            <p className="mt-12 text-gray-400 text-sm md:text-base font-light tracking-[0.2em] leading-relaxed max-w-[450px]">
              {item.ja}
            </p>
			



          </div>

		  			<div className="relative ml-[10vw] mt-[10vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw]
					aspect-video overflow-hidden rounded-sm border border-clr-primary-1/30 shadow-2xl"
							style={{
							borderRadius: '5%',
				}}
			>
			<CustomImage
				src={item.photo}
				alt="Greeting"
				fill
				className="object-cover" 
				sizes="(max-width: 768px) 100vw, 40vw" 
				priority

			/>
			</div>
        </div>
      ))}
    </div>
  );
}