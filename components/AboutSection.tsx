
// import { siteConfig } from "@/config/site";
import { useEffect, useRef } from "react";
import Image from '@/components/CustomImage';


interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {

  return (
    <>
    <div className="mb-100">
    <p>PLUS ULTRA</p>
    <p>もっと先へ</p>
    </div>
    </>
  );
}
