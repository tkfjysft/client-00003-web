"use client";
import { useState } from 'react';
import Link from 'next/link';
import FloatingLogo from "@/components/FloatingLogo";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  return (
    <>
      <header className={`fixed top-0 w-full z-50 px-[8vw] py-12 flex justify-between items-center
	  bg-transparent md:bg-clr-base-1/50 transition-opacity duration-300
			`}
	  >
        
        {/* PC用ナビゲーション（md未満ではhidden） */}
        <nav className="hidden md:flex gap-8 text-clr-light-1 text-base uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-clr-white transition">Home</Link>
          <Link href="/coating" className="hover:text-clr-white transition">Coating</Link>
          <Link href="/maintenance" className="hover:text-clr-white transition">Maintenance</Link>
          <Link href="/about" className="hover:text-clr-white transition">About</Link>
          <Link href="/access" className="hover:text-clr-white transition">access</Link>
          <Link href="/contact" className="hover:text-clr-white transition">Contact</Link>
        </nav>

        {/* スマホ用ハンバーガーボタン（md以上ではhidden） */}
        <button 
          className="md:hidden text-clr-white z-50 p-2 mt-[-20px]"
          onClick={() => setIsDrawerOpen(true)}
        >
          MENU
        </button>

        <FloatingLogo />
      </header>

      {/* スマホ用ドロワーメニュー（右側から半分） */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-clr-base-1 z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-12 gap-8 text-clr-light-1 mt-20 uppercase">
          <button onClick={() => setIsDrawerOpen(false)} className="self-end mb-8">CLOSE</button>
          <Link href="/" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link href="/coating" onClick={() => setIsDrawerOpen(false)}>Coating</Link>
          <Link href="/maintenance" onClick={() => setIsDrawerOpen(false)}>Maintenance</Link>
          <Link href="/about" onClick={() => setIsDrawerOpen(false)}>About</Link>
          <Link href="/access" onClick={() => setIsDrawerOpen(false)}>access</Link>
          <Link href="/contact" onClick={() => setIsDrawerOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* ドロワーを開いている時の背景オーバーレイ（任意） */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsDrawerOpen(false)} 
        />
      )}
    </>
  );
}