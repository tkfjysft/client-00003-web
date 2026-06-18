"use client";

import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CustomImage from "@/components/CustomImage";
import dynamic from 'next/dynamic';
import { SECTIONS } from "@/config/content";
import HeroContent from "@/components//HeroContent";
import MessageContent from "@/components//MessageContent";
import CoatingContent from "@/components//CoatingContent";
import MaintenanceContent from "@/components//MaintenanceContent";
import AboutContent from "@/components//AboutContent";
import Pagination from "@/components/Pagination";
import Lenis from 'lenis';

import { useMotionValueEvent } from "framer-motion";

const MotionImage = motion(CustomImage);

type SectionType = {
  id: number;
  type: string;
  items?: any[];
  title?: string;
  body?: string;
  links?: any[];
  steps?: any[];
};

const Section = dynamic(() => import('./Section'), { ssr: false });

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState<number>(0);

useLayoutEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  // 最初の一回だけ計算して固定する（何度も setPageHeight しない）
  const height = container.scrollHeight;
  setPageHeight(height);
  
  // ResizeObserver は今回の場合、逆にスクロール位置を狂わせる原因になるので
  // 一度高さが決まったら更新しないようにするか、計算方法を検討してください。
}, []);

  // スクロール量の取得
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });








useEffect(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
}, []);


const [isReady, setIsReady] = useState(false);

useEffect(() => {
  // マウント時に少しだけ遅延させることで、ブラウザの初期スクロール位置検知を回避
  const timer = setTimeout(() => setIsReady(true), 100);
  return () => clearTimeout(timer);
}, []);



useEffect(() => {
  const timer = setTimeout(() => {
    setIsInitialLoad(false);
  }, 1000); // 1秒間は判定を無視する
  return () => clearTimeout(timer);
}, []);





useEffect(() => {
    // Lenisの初期化
    const lenis = new Lenis({
      duration: 1.2,       // スクロールの継続時間
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Appleのような自然なイージング
      smoothWheel: true,   // マウスホイールの滑らか化
    });

    // アニメーションループの作成
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // クリーンアップ処理（コンポーネントが消える時にLenisを止める）
    return () => lenis.destroy();
  }, []);



const [isScrolling, setIsScrolling] = useState(false);


  // スクロール位置に応じてセクション番号を算出 (5セクションの場合)
  // scrollYProgress(0〜1)を 1〜5 に変換
  // ※この数値はセクションの高さ調整で微調整可能です
//   const section = useTransform(scrollYProgress,
//       [0, 0.15, 0.35, 0.55, 0.75],
//       [1, 2, 3, 4, 5]);

  // 値の変更を検知して state を更新
// useMotionValueEvent(section, "change", (latest) => {
//   const newSection = Math.round(latest);
//   if (activeSection !== newSection) {
//     setActiveSection(newSection);
//   }
// });

// useMotionValueEvent(section, "change", (latest) => {
//   // ★重要：クリック移動中は、スクロール位置による自動更新を完全に無視する
//   if (isScrolling) return;

//   const newSection = Math.round(latest);
//   if (activeSection !== newSection) {
//     setActiveSection(newSection);
//   }
// });


const [isImageLoaded, setIsImageLoaded] = useState(false);

useEffect(() => {
  setIsImageLoaded(false);
}, [activeSection]);


const handleSectionChange = (id: number) => {
  setIsScrolling(true);
  setActiveSection(id);
  
  const element = document.getElementById(`section-${id}`);
  if (element) {
    // smooth ではなく auto で瞬間移動させる
    element.scrollIntoView({ behavior: 'auto' }); 
  }

  // 少し待ってからロックを解除
  setTimeout(() => {
    setIsScrolling(false);
  }, 1000);
};






  // SECTIONS 配列から items を持つものだけを抽出して一つにまとめる
  const allCarItems = SECTIONS
    .filter(section => section.items) // itemsがあるセクションだけ選ぶ
    .flatMap(section => section.items); // それを平坦な一つの配列にする





  return (
	<>
    <div ref={containerRef} className="relative w-full">
      {/* 背景層（固定） */}
      <div className="fixed inset-0 z-0">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false}>
  {isHovered ? (
    // 都市夜景（ホバー時）：セクションごとの夜景画像
    <motion.div
      key={`city-bg-${activeSection}`} // セクションごとにユニークなキーにする
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
      <CustomImage 
        src={`/images/bg_section_${activeSection}.webp`} // 以前の命名規則に合わせました
        alt="City Night" 
        fill 
		sizes="100vw"
		priority
        style={{ objectFit: "cover" }} 
      />
    </motion.div>
  ) : (
    // 黒背景（通常時）
    <motion.div
      key="black-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 z-0 bg-black"
    />
  )}
</AnimatePresence>
        </div>
      </div>

      {/* コンテンツ層 */}
<div className="fixed inset-0 z-30 pointer-events-none">
        <HeroContent 
          items={allCarItems} 
          activeSection={activeSection - 1} 
        />
      </div>

	  		<div className="relative z-20 h-auto pt-[100vh]">
				{SECTIONS.map((section) => (
					<div id={`section-${section.id}`} key={section.id}>
					<Section key={section.id} num={section.id} onInView={setActiveSection}>
						{section.type === "message" && <MessageContent />}
						{section.type === "coating" && section.title && section.links && (
						<CoatingContent title={section.title} links={section.links} />
						)}
						{section.type === "maintenance" && section.title && section.steps && (
						<MaintenanceContent title={section.title} steps={section.steps} />
						)}
						{section.type === "about" && section.title && section.body && section.links && (
						<AboutContent title={section.title} body={section.body} links={section.links} />
						)}
					</Section>
					</div>
				))}
   			 </div>


      {/* 実車レイヤー（右下固定） */}
      <div 
        className="fixed bottom-10 right-10 z-30 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-[600px] h-[300px] overflow-visible">

{/* ★修正：地面レイヤー（独立させる） */}
<motion.div
  key="ground-plane"
  initial={false}
  className="absolute bottom-[-10px] left-[10%] w-[80%] h-[30px] bg-white/40 blur-2xl rounded-full z-[5]"
  animate={{ 
    opacity: isHovered ? 0.8 : 0.7,
    scale: isHovered ? 1.15 : 1, // 少しだけ強めに広げる
    y: isHovered ? -15 : 0      // 少し高く浮かせる
  }}
  // 動きの曲線を「滑らかな減速」にする
  transition={{ 
    duration: 0.6, 
    ease: [0.22, 1, 0.36, 1] // Appleなどが使う非常に滑らかなイージング
  }}
/>


<div className="relative w-full h-full z-10">
  <AnimatePresence mode="wait">
{/* <div className="fixed inset-0 w-full h-full flex items-center justify-center p-20 z-0"> */}

{/* </div> */}
    {isHovered ? (
      // ホバー時は常にシースルーを表示（スクロールしても即座に次のシースルーへ）
      <motion.div
        key={`seethrough-${activeSection}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
		<MotionImage
			src={`/images/car_section_${activeSection}-seethrough.png`}
			alt={`Car section ${activeSection}`}
			fill
			sizes="100vw"
			priority
			// ズーム演出はここに記述
			initial={{ scale: 0.95 }}
			animate={{ scale: 1 }}
			exit={{ scale: 1.05 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
			style={{ objectFit: "contain" }}
		/>
      </motion.div>
    ) : (
      // 通常時は通常画像を表示
      <motion.div
        key={`normal-${activeSection}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
		<MotionImage
			src={`/images/car_section_${activeSection}.png`}
			alt={`Car section ${activeSection}`}
			fill
			sizes="100vw"
			priority
			// ズーム演出はここに記述
			initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.05 }}
  // ここを調整！
  transition={{
    duration: 0.8, // 出現時の時間はそのまま
    ease: [0.22, 1, 0.36, 1],
    exit: {
      duration: 0.3, // 消える時は0.3秒でサッと消す
      ease: "easeIn" // 消える時は直線的に消すとキレが出る
    }
  }}
			style={{ objectFit: "contain" }}
			/>
      </motion.div>
    )}
  </AnimatePresence>
</div>



        </div>
      </div>


    </div>

	<Pagination
	 activeSection={activeSection}
	 onNavigate={handleSectionChange}
	 setActiveSection={setActiveSection} />
	</>
  );
}