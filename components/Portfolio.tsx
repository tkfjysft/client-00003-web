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


type CarInfo = {
  name: string;
  trivia: string;
};

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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const height = container.scrollHeight;
    setPageHeight(height);

  }, []);

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
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const [isScrolling, setIsScrolling] = useState(false);





  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [activeSection]);




  const displayId = activeSection === 6 ? 1 : activeSection;







  const handleSectionChange = (id: number) => {
    setIsScrolling(true);
    if (id === 6) {
    setActiveSection(1);
  } else {
    setActiveSection(id);
  }

    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const currentCar = carData[String(activeSection)] || carData["1"];

  const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0]);


  useEffect(() => {
  const timer1 = setTimeout(() => setIsHovered(true), 400);
  
  const timer2 = setTimeout(() => setIsHovered(false), 2000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);




  return (
    <>
      <motion.div
        style={{
          opacity,
        }}
      >
        <div ref={containerRef} className="relative w-full">
          <div className="fixed inset-0 z-0">
            <div className="relative w-full h-full">
              <AnimatePresence initial={false}>
                {isHovered ? (
                  <motion.div
                    key={`city-bg-${displayId}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                  >
                    <CustomImage
                      src={`/images/bg_section_${displayId}.webp`} 
                      alt="City Night"
                      fill
                      sizes="100vw"
                      priority
                      style={{
                        objectFit: "cover",
                        filter: "brightness(1.5)", 
                      }}
                    />

                  </motion.div>
                ) : (
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

		  
		  <CarImage
		  	activeSection={displayId} 
    		isHovered={isHovered}
			onClick={() => setIsHovered(!isHovered)}
  		  />

        </div>
      </motion.div>

      <Pagination
        activeSection={activeSection}
        onNavigate={handleSectionChange}
        setActiveSection={setActiveSection}
      />
    </>
  );
}



