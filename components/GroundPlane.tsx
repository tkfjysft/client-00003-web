// GroundPlane.tsx

import { motion } from "framer-motion";
import EdgeLine from "@/components/EdgeLine";

interface GroundPlaneProps {
  // 数値で受け取るように変更（型エラーを解消するため）
  activeSection: number;
  isHovered: boolean;
}

// 設定のキーを数値から生成するための型
type CarType =
  | "car_section_1"
  | "car_section_2"
  | "car_section_3"
  | "car_section_4"
  | "car_section_5";

// 型を定義
type GroundConfig = {
  scaleY: number;
  skewX: number;
  bottom: string;
  bgColor: string;
  showGradient?: boolean;
};

const carGroundConfigs: Record<CarType, GroundConfig> = {
  car_section_1: { scaleY: 2.2, skewX: -84, bottom: "0", bgColor: '#000000', showGradient: false },
  car_section_2: { scaleY: 2.2, skewX: -84, bottom: "0", bgColor: '#000000', showGradient: false },
  car_section_3: { scaleY: 2.2, skewX: -84, bottom: "0", bgColor: '#000000', showGradient: false },
  car_section_4: { scaleY: 1, skewX: -83,   bottom: "30%", bgColor: '#000000', showGradient: false },
  car_section_5: { scaleY: 1, skewX: -83, bottom: "30%", bgColor: 'none', showGradient: false },
};

export default function GroundPlane({
  activeSection,
  isHovered,
}: GroundPlaneProps) {
  // 数値からキー文字列（"car_section_1"など）を動的に生成
  const key = `car_section_${activeSection}` as CarType;
  const config = carGroundConfigs[key] || carGroundConfigs.car_section_1;

  return (
<div 
  className={`absolute -bottom-[${config.bottom}] left-[80%] w-[400%] h-full transition-all duration-600 ease-in-out
	ground-plane-transition
  `}
  style={{

    transform: `scaleY(${config.scaleY}) skewX(${config.skewX}deg) translateY(${isHovered ? "-10px" : "0px"})`,
    transformOrigin: "top center",
        backgroundImage: isHovered 
    ? 'linear-gradient(to right, #00000030 50%, #000000 100%), linear-gradient(to top, #00000030 90%, #000000 100%)' 
    : 'linear-gradient(to right, #ffffff25 20%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',
            maskImage: isHovered
				? 'linear-gradient(to right, #000000 10%, transparent 100%), linear-gradient(to top, #00000000 20%, transparent 100%)'
				: 'linear-gradient(to right, #00000030 60%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',
  WebkitMaskImage: isHovered
				? 'linear-gradient(to right, #000000 60%, transparent 100%), linear-gradient(to top, #00000000 20%, transparent 100%)'
				: 'linear-gradient(to right, #00000030 10%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',

    // transformOrigin: "top center",
    // transform: `scaleY(2) skewX(-83deg) translateY(${isHovered ? "-10px" : "0px"})`,
  }}
>
  <EdgeLine isHovered={isHovered} />
</div>
  );
}
