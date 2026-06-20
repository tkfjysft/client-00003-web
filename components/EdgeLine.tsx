import { motion } from 'framer-motion';

interface EdgeLineProps {
  isHovered: boolean;
}

export default function EdgeLine({ isHovered }: EdgeLineProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ width: '8px', opacity: 1 }}
      animate={{ 
        width: isHovered ? '8px' : '8px',
        // 色の戻りが唐突なら、ここにも transition を書くか、親の transition を継承させる
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
    // 左端に配置
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    pointerEvents: 'none',
    
    // ここで背景色とグラデーションを適用
    background: 'white',
    
    // 【重要】奥（上方向）に行くほど透明にするマスク
    // bottom が 0% (線が濃い)、top が 100% (透明)
    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
    
    // ぼかしを追加したい場合はここ
    filter: 'blur(20px)', 
  }}
    />
  );
}