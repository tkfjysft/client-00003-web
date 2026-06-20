// GroundPlane.tsx

import { motion } from 'framer-motion';
import EdgeLine from "@/components/EdgeLine";




interface GroundPlaneProps {
  // 数値で受け取るように変更（型エラーを解消するため）
  activeSection: number; 
  isHovered: boolean;
}

// 設定のキーを数値から生成するための型
type CarType = 'car_section_1' | 'car_section_2' | 'car_section_3' | 'car_section_4' | 'car_section_5';

// 型を定義
type GroundConfig = { perspective: number; rotateX: number; height: string; bgColor: string; showGradient?: boolean;};

const carGroundConfigs: Record<CarType, GroundConfig> = {
  car_section_1: { perspective: 100, rotateX: 50, height: "570px", bgColor: '#000000', showGradient: false },
  car_section_2: { perspective: 100, rotateX: 50, height: "570px", bgColor: '#000000', showGradient: false },
  car_section_3: { perspective: 100, rotateX: 40, height: "570px", bgColor: '#000000', showGradient: false },
  car_section_4: { perspective: 100, rotateX: 60, height: "570px", bgColor: '#000000', showGradient: false },
  car_section_5: { perspective: 100, rotateX: 60, height: "570px", bgColor: 'none', showGradient: false },
};

export default function GroundPlane({ activeSection, isHovered }: GroundPlaneProps) {
  // 数値からキー文字列（"car_section_1"など）を動的に生成
  const key = `car_section_${activeSection}` as CarType;
  const config = carGroundConfigs[key] || carGroundConfigs.car_section_1;

  return (
    <motion.div 
      className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[250%] z-[1]"
      
	  initial={{ 
    transform: `perspective(${config.perspective}px) rotateX(${config.rotateX}deg) scale(1)`,
	backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(20,20,25,0.8) 30%, rgba(60,50,80,0.4) 70%, transparent 100%)',
	y: 0,
    opacity: 0 // 最初は隠しておくと「垂直」は見えません
  }}

      // keyによる「作り直し」ではなく「数値の更新によるアニメーション」を使います
      animate={{
        transform: `perspective(${config.perspective}px) rotateX(${config.rotateX}deg) scale(${isHovered ? 1 : 1})`,
		opacity: 1,
        backgroundImage: isHovered 
          ? 'linear-gradient(to top, #aaaaff60 20%, #aaaaff30 32%, #00001170 45%, #00000099 70%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(20,20,25,0.8) 30%, rgba(60,50,80,0.4) 70%, transparent 100%)',
        y: isHovered ? -10 : 0
      }}
      // アニメーションの挙動を統一（これで2回走るのを防ぐ）
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      
      style={{
        left: '50%',
        height: config.height,
        backgroundImage: isHovered 
    ? 'linear-gradient(to right, #00000030 50%, #000000 100%), linear-gradient(to top, #00000030 90%, #000000 100%)' 
    : 'linear-gradient(to right, #ffffff15 20%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',
            maskImage: isHovered
				? 'linear-gradient(to right, #000000 10%, transparent 100%), linear-gradient(to top, #00000000 20%, transparent 100%)'
				: 'linear-gradient(to right, #00000030 60%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',
  WebkitMaskImage: isHovered
				? 'linear-gradient(to right, #000000 60%, transparent 100%), linear-gradient(to top, #00000000 20%, transparent 100%)'
				: 'linear-gradient(to right, #00000030 10%, transparent 100%), linear-gradient(to top, #00000030 20%, transparent 100%)',
      } as React.CSSProperties}
    >
      <EdgeLine isHovered={isHovered} />
  
  </motion.div>

  );
}