"use client";

import { useLayoutEffect, useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import CustomImage from "@/components/CustomImage";
import dynamic from "next/dynamic";
import { SECTIONS, type SectionType } from "@/config/content";
import CiContent from "@/components/CiContent";
import HeroContent from "@/components/HeroContent";
import MessageContent from "@/components/MessageContent";
import CoatingContent from "@/components/CoatingContent";
import MaintenanceContent from "@/components/MaintenanceContent";
import AboutContent from "@/components/AboutContent";
import Pagination from "@/components/Pagination";
import CarImage from "../components/CarImage";



import Lenis from "lenis";
import { useMotionValueEvent } from "framer-motion";

// const carConfig: Record<string, { matrix: string, offsetY: string }> = {
//   "1": {
//     // matrix3d(a,b,c,d, e,f,g,h, i,j,k,l, m,n,o,p)
//     // この数値をいじることで、四隅を個別に引っ張れます
//     matrix: "matrix3d(1, 0.15, 0, 0,  -0.2, 0.7, 0, 0,  0, 0, 1, 0,  0, 0, 0, 1)",
//     offsetY: "-50%"
//   },
// };

type CarInfo = {
  name: string;
  trivia: string;
};

// 2. carData にその型を適用します
const carData: Record<string, CarInfo> = {
  "1": {
    name: "Ferrari 458 Italia",
    trivia:
      "Powered by a naturally aspirated 4.5L V8, the 458 Italia revs to 9,000 rpm, delivering a symphony of pure Italian performance.Designed by Pininfarina, the 458 Italia balances aerodynamic efficiency with a timeless, organic silhouette.A masterpiece of mid-engine engineering, designed to blur the line between road car and track weapon.",
  },
  "2": { name: "ランボルギーニ", trivia: "/images/car_section_2.png" },
  "3": { name: "フェラーリ黄色", trivia: "/images/car_section_3.png" },
  "4": { name: "マカン", trivia: "/images/car_section_4.png" },
  "5": { name: "BMW", trivia: "/images/car_section_5.png" },
};

const MotionImage = motion(CustomImage);

const Section = dynamic(() => import("./Section"), { ssr: false });

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(1);
  const [isSixActiveSection, setIsSixActiveSection] = useState(false);
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
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
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
      duration: 1.2, // スクロールの継続時間
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Appleのような自然なイージング
      smoothWheel: true, // マウスホイールの滑らか化
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

  const displayId = activeSection === 6 ? 1 : activeSection;


const sixSectionChange = (id: number) => {
    if (id === 6) {
    setActiveSection(1);
	
  } else {
    setActiveSection(id);
  }
}

  const handleSectionChange = (id: number) => {
    setIsScrolling(true);
    if (id === 6) {
    setActiveSection(1);
	setIsSixActiveSection(true);
  } else {
    setActiveSection(id);
  }

    const element = document.getElementById(`section-${id}`);
    if (element) {
      // smooth ではなく auto で瞬間移動させる
      element.scrollIntoView({ behavior: "smooth" });
    }

    // 少し待ってからロックを解除
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const currentCar = carData[String(activeSection)] || carData["1"];

  // 2. スクロールの後半（例：80%〜100%の間）でopacityを1から0に変える
  const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0]);

  return (
    <>
      <motion.div
        style={{
          opacity,
        }}
      >
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
                      style={{
                        objectFit: "cover",
                        filter: "brightness(1.5)", // 明度を50%にし、コントラストを上げる
                      }}
                    />
                    {/* <div 
    className="absolute inset-0 bg-[#001a4d] mix-blend-multiply opacity-60" 
  /> */}
                  </motion.div>
                ) : (
                  // 黒背景（通常時）
                  <motion.div
                    key="black-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 bg_dark_grad"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* コンテンツ層 */}
          <div className="relative z-20 h-auto">
            {SECTIONS.map((section: SectionType) => (
              <div id={`section-${section.id}`} key={section.id}>
                <Section
                  key={section.id}
                  num={section.id}
                  onInView={setActiveSection}
                >
                  {section.type === "ci" && <CiContent />}
                  {section.type === "hero" && section.items && <HeroContent />}
                  {section.type === "message" && <MessageContent />}
                  {section.type === "coating" &&
                    section.title &&
                    section.links && <CoatingContent />}
                  {section.type === "maintenance" &&
                    section.title &&
                    section.steps && <MaintenanceContent />}
                  {section.type === "about" &&
                    section.title &&
                    section.body &&
                    section.links && <AboutContent />}
                </Section>
              </div>
            ))}
          </div>

		  {/* 車両画像層 */}
		  
		  <CarImage
		  	activeSection={displayId} 
    		isHovered={isHovered}
		  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  		  />

        </div>
      </motion.div>

      <Pagination
        activeSection={activeSection}
        onNavigate={handleSectionChange}
        setActiveSection={setActiveSection}
		isSixActiveSection={isSixActiveSection}
      />
    </>
  );
}

// 		<div className="absolute top-0 w-full h-1/2">
// 		<MotionImage
// 			src={`/images/car_section_${activeSection}.png`}
// 			alt={`Car section ${activeSection}`}
// 			fill
// 			sizes="100vw"
// 			priority
// 			// ズーム演出はここに記述
// 			initial={{ opacity: 0, scale: 0.95 }}
// 			animate={{ opacity: 1, scale: 1 }}
// 			exit={{ opacity: 0, scale: 1.05 }}
// 			// ここを調整！
// 			transition={{
// 				duration: 0.8, // 出現時の時間はそのまま
// 				ease: [0.22, 1, 0.36, 1],
// 				exit: {
// 				duration: 0.3, // 消える時は0.3秒でサッと消す
// 				ease: "easeIn" // 消える時は直線的に消すとキレが出る
// 				}
//   			}}
// 			style={{ objectFit: "contain" }}
// 		/>
// 		</div>
// <div
//   className="absolute top-1/2 w-full h-1/2"
// >
// <motion.img
//   src={`/c/images/car_section_${activeSection}.png`}
//   alt="Reflection"
//   className="w-full h-full object-contain object-top opacity-30"
// style={{
//   transform: `scaleY(-1) ${carConfig[String(activeSection)]?.matrix} translateY(${carConfig[String(activeSection)]?.offsetY})`,
//   transformOrigin: 'top center',
// }}

// />
// </div>
