// components/CarImage.tsx
'use client'; // motionを使うため必須

import { motion, AnimatePresence } from 'framer-motion';
import CustomImage from "@/components/CustomImage";
import GroundPlane from "@/components/GroundPlane";


const MotionImage = motion(CustomImage);



interface CarImageProps {
  activeSection: any; // 必要に応じて型を定義
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function CarImage({ activeSection, isHovered, onMouseEnter, onMouseLeave }: CarImageProps) {
  return (
    <>

          {/* 実車レイヤー（右下固定） */}
          <div
            className="fixed bottom-0 right-[6vw] z-30 cursor-pointer 
             w-[50vw] md:w-[30vw] h-auto"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* <div className="w-[20vw] fixed top-[10%] p-8">
				<p className="text-center">
      		{currentCar.name}
    	</p>
		<p className="text-xs">
      		{currentCar.trivia}
    	</p>
		</div> */}

            <div className="relative w-full h-auto overflow-visible">

              {/* <div className="w-full z-0"> */}
              <GroundPlane
                activeSection={activeSection}
                isHovered={isHovered}
              />
              {/* </div> */}

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
                      
                    >
                      <div className="relative w-full">
                      <img
                        src={`/c/images/car_section_${activeSection}-seethrough.png`}
                        alt={`Car section ${activeSection}`}
   
                        style={{ objectFit: "contain",
                          display: 'block', width: '100%', height: 'auto', 
                        }}
                      />
                      </div>
                    </motion.div>
                  ) : (
                    // 通常時は通常画像を表示
                    <motion.div
                      key={`normal-${activeSection}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      
                    >
                      <div className="relative w-full">
                      <img
                        src={`/c/images/car_section_${activeSection}.png`}
                        alt={`Car section ${activeSection}`}

                        
                        style={{ objectFit: "contain",
                          display: 'block', width: '100%', height: 'auto', }}
                      />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

    </>
  );
}