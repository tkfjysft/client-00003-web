import Link from 'next/link';
import FloatingLogo from "@/components/FloatingLogo";


export default function Header() {
  return (
    <>
<header className="fixed top-0 w-full z-50 px-[8vw] py-12 flex justify-start items-center bg-clr-base-1/50">
  {/* 右上のナビゲーション */}
<nav className="flex gap-8 text-clr-light-1 text-base uppercase tracking-[0.2em]">
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

{/* ロゴの配置（ヘッダー下、車画像の上付近） */}
<FloatingLogo />

</header>


</>
  );
}