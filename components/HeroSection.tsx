import { siteConfig } from "@/config/site";
import Image from '@/components/CustomImage';


interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {

  return (
    <>
	<div className="mt-[110vh]">
    <div className="mb-[110vh]">
    <p className="text-clr-white text-7xl">The best choice for the best one</p>
    <p className="text-clr-light-1 text-base">最高の１台のために最高の選択を</p>
    </div>
    <div className="mb-[110vh]">
    <p className="text-clr-white text-7xl">Cars all over the world are waiting for you</p>
    <p className="text-clr-light-1 text-base">世界中の車があなたを待っている</p>
    </div>
    <div className="mb-[110vh]">
    <p className="text-clr-white text-7xl">Come on, let's run</p>
    <p className="text-clr-light-1 text-base">さあ、走りだそう</p>
    </div>
    <div className="mb-[110vh]">
    <p className="text-clr-white text-7xl">Everywhere you want to be</p>
    <p className="text-clr-light-1 text-base">あなたの目指す所へ</p>
    </div>
    <div className="mb-[110vh]">
    <p className="text-clr-white text-7xl">PLUS ULTRA</p>
    <p className="text-clr-light-1 text-base">もっと先へ</p>
    </div>
	</div>
    </>
  );
}
