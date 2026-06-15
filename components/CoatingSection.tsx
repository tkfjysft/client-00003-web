import { siteConfig } from "@/config/site";
import Link from "next/link";

interface CoatingSectionProps {
  className?: string;
}

export default function CoatingSection({ className }: CoatingSectionProps) {
  return (
    <>
      <h2 className="text-clr-white text-9xl !leading-[0.5]">
        Coating
        <br />
        <span className="text-sm text-clr-light-1">コーティング</span>
      </h2>
      <div className="space-y-20">
        <h3 className="text-clr-light-1">
          {siteConfig.enCompamyName1} {siteConfig.enCompamyName2}
          &nbsp;&nbsp;&nbsp;- {siteConfig.companyName1}{" "}
          {siteConfig.companyName2} - ではコーティングにも力を入れております
        </h3>
        <p className="text-clr-light-1">
          近年コーティングの需要が高まっており、値段も技術も様々で悩んでいるお客様も多いはずです。
        </p>
        <Link
          href="/"
          className="text-xs font-[200] tracking-[0.2em] border border-clr-white px-8 py-3 text-clr-white-1 hover:bg-clr-primary-1 hover:text-clr-base-1 transition-all duration-500 rounded-none"
        >
          LEARN MORE
        </Link>

        <h3 className="text-clr-light-1 text-xl">
          コーティング施工までの流れ
        </h3>
        <Link
          href="/"
          className="text-xs font-[200] tracking-[0.2em] border border-clr-white px-8 py-3 text-clr-white-1 hover:bg-clr-primary-1 hover:text-clr-base-1 transition-all duration-500 rounded-none"
        >
          LEARN MORE
        </Link>

        <h3 className="text-clr-light-1">
          コーティング料金表
        </h3>
        <Link
          href="/"
          className="text-xs font-[200] tracking-[0.2em] border border-clr-white px-8 py-3 text-clr-white-1 hover:bg-clr-primary-1 hover:text-clr-base-1 transition-all duration-500 rounded-none"
        >
          LEARN MORE
        </Link>
      </div>


{/* 
      <div className="flex flex-col gap-10 p-20 max-w-4xl">
  <div className="space-y-4">
    <h2 className="text-clr-white text-9xl font-bold tracking-tighter leading-[0.8] font-archivo">
      Coating
    </h2>
    <p className="text-lg text-clr-light-1 tracking-[0.3em] uppercase">
      コーティングサービス
    </p>
  </div>

  <div className="max-w-xl space-y-6">
    <h3 className="text-2xl text-clr-white leading-relaxed">
      {siteConfig.enCompamyName1} {siteConfig.enCompamyName2} では、<br />
      最高峰のコーティング技術で愛車を保護します。
    </h3>
    <p className="text-clr-light-1 leading-loose font-light">
      近年需要が高まるコーティング市場において、確かな技術と選び抜かれた商材で、お客様の大切な一台に最適なソリューションをご提案いたします。
    </p>
  </div>

  <div className="flex gap-8 pt-10">
    <Link href="/flow" className="text-[10px] tracking-[0.3em] border border-clr-white px-8 py-4 text-clr-white hover:bg-clr-white hover:text-clr-black transition-all duration-500 uppercase">
      施工の流れ
    </Link>
    <Link href="/price" className="text-[10px] tracking-[0.3em] border border-clr-white px-8 py-4 text-clr-white hover:bg-clr-white hover:text-clr-black transition-all duration-500 uppercase">
      料金表を見る
    </Link>
  </div>
</div> */}



    </>
  );
}
