// Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button 
        className="fixed top-5 right-5 z-50 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "≡"}
      </button>

      <div className={`fixed inset-0 z-40 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
  <Link href="/" className="hover:text-clr-white transition">
    Home
  </Link>

  <Link href="/coating" className="hover:text-clr-white transition">
    Coating
  </Link>

  <Link href="/maintenance" className="hover:text-clr-white transition">
    Maintenance
  </Link>

  <Link href="/about" className="hover:text-clr-white transition">
    About
  </Link>

  <Link href="/contact" className="hover:text-clr-white transition">
    Contact
  </Link>
        </nav>
      </div>
    </>
  );
}