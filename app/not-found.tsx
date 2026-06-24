
import Link from 'next/link';
import FloatingLogo from "@/components/FloatingLogo";


export default function NotFound() {
  return (
    <div className="z-[99999] min-h-screen bg-clr-base-2 text-clr-main-1 flex flex-col items-center justify-center overflow-hidden px-6 contents-area">
      
      <div className="absolute inset-0 bg-bgclr-startup-dark pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-clr-primary-1/5 blur-[120px] rounded-full pointer-events-none" />



      <div className="relative z-10 text-center max-w-md">
        <p className="text-clr-primary-1 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Status: 404
        </p>
        
        <h1 className="text-clr-light-1 text-2xl sm:text-3xl font-bold tracking-wider mb-6 uppercase">
          Frontend Demo Site
        </h1>
        
        <p className="text-clr-light-1/70 text-sm leading-relaxed tracking-widest mb-12 text-left sm:text-left">
          当サイトはフロントエンドの実装サンプル（ポートフォリオ）として制作しているため、現在はトップページのみの実装となっております。<br className="hidden sm:inline" />
          メインのコンポーネントやアニメーションの挙動は、ぜひトップページにてご覧ください。
        </p>


        <Link 
          href="/"
          className="inline-block bg-transparent border border-clr-white/20 hover:border-clr-primary-1 text-clr-light-1 text-xs font-mono tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--clr-primary-1-rgb),0.05)]"
        >
          Return to Home View
        </Link>
      </div>
    </div>
  );
}