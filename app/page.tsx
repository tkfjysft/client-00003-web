"use client";

import { useState } from "react";
import Image from "next/image"; // Next.jsのImageコンポーネントを使用
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
		<Portfolio />
    </main>
  );
}