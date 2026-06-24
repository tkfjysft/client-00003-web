
import { motion } from "framer-motion";
import EdgeLine from "@/components/EdgeLine";

interface GroundPlaneProps {
  activeSection: number;
  isHovered: boolean;
}

type CarType =
  | "car_section_1"
  | "car_section_2"
  | "car_section_3"
  | "car_section_4"
  | "car_section_5";

type GroundConfig = {
  scaleY: number;
  skewX: number;
  bottom: number;
  bgColor: string;
  showGradient?: boolean;
};

const carGroundConfigs: Record<CarType, GroundConfig> = {
  car_section_1: { scaleY: 2.2, skewX: -84, bottom: -20, bgColor: '#000000', showGradient: false },
  car_section_2: { scaleY: 2.2, skewX: -84, bottom: -8, bgColor: '#000000', showGradient: false },
  car_section_3: { scaleY: 2.2, skewX: -83, bottom: -4, bgColor: '#000000', showGradient: false },
  car_section_4: { scaleY: 1, skewX: -83,   bottom: -35, bgColor: '#000000', showGradient: false },
  car_section_5: { scaleY: 1, skewX: -83,   bottom: -35, bgColor: 'none', showGradient: false },
};

export default function GroundPlane({
  activeSection,
  isHovered,
}: GroundPlaneProps) {
  const key = `car_section_${activeSection}` as CarType;
  const config = carGroundConfigs[key] || carGroundConfigs.car_section_1;

  return (
<div 
  className={`absolute left-[80%] w-full h-full transition-all duration-600 ease-in-out
	ground-plane-transition
  `}
  style={{
	bottom: `${config.bottom}%`,
    transform: `scaleY(${config.scaleY}) skewX(${config.skewX}deg) translateY(${isHovered ? "-30px" : "-30px"})`,
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

  }}
>
  <EdgeLine isHovered={isHovered} />
</div>
  );
}
