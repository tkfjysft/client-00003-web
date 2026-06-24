'use client'; 

import { motion, AnimatePresence } from 'framer-motion';
import CustomImage from "@/components/CustomImage";
import GroundPlane from "@/components/GroundPlane";


const MotionImage = motion(CustomImage);



interface CarImageProps {
  activeSection: any; 
  isHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: () => void;
}

export default function CarImage({ activeSection, isHovered, onMouseEnter, onMouseLeave, onClick }: CarImageProps) {
  return (
    <>

          <div
            className="fixed bottom-0 right-[6vw] z-30 cursor-pointer 
             w-[50vw] md:w-[30vw] h-auto touch-manipulation
			 "

			onClick={onClick}
          >


            <div className="relative w-full h-auto overflow-visible">

              <GroundPlane
                activeSection={activeSection}
                isHovered={isHovered}
              />

              <div className="relative w-full h-full z-10
			  transition-transform duration-500 hover:translate-y-2
			 ease-out hover:scale-[0.98] active:scale-[0.96]
			  ">
                <AnimatePresence mode="wait">


                  {isHovered ? (
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