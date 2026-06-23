import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Playfair_Display, Noto_Serif_JP, Archivo } from "next/font/google";
import { Arsenal } from "next/font/google";
import SnsLinks from "@/components/SnsLinks";
import RootLayoutWrapper from "@/components/RootLayoutWrapper";

import Header from "@/components/Header";

import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  subsets: ["latin"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-zen-kaku",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["200", "300", "400", "500", "700"],
});

const bebas = Arsenal({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.metaTitle}`,
  },
  description: siteConfig.metaDescription,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.metaTitle,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: `${bebas.style.fontFamily}, ${zenKaku.style.fontFamily}, sans-serif`,
        }}
      >
        <RootLayoutWrapper>
          <Header />
          {children}
<footer
  className="relative text-clr-white w-full py-20 px-[6vw] mt-[100vh] contents-area overflow-hidden"
>
  {/* 背景レイヤー */}
  <div 
    className="absolute inset-0 z-0"
    // style={{
    //   backgroundImage: "url(/c/images/bg_footer.webp)",
    //   backgroundSize: "cover",
    //   // 画像の左側を大きく見せるために 20% に変更
    //   backgroundPosition: "20% center", 
    //   maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
    //   WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
    // }}
  />

  {/* コンテンツレイヤー：mx-auto を外し、左寄せにする */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 p-6 lg:p-12 w-full max-w-[1440px] mx-auto">
    
    {/* 左: ブランド */}
    <div className="space-y-3 lg:border-l lg:pl-4 border-clr-white/30 text-base">
      <h3 className="text-lg lg:text-xl font-bold tracking-widest mb-4">
        {siteConfig.companyName1} {siteConfig.companyName2}
      </h3>
      <p>〒{siteConfig.contact.postcode}</p>
      <p>{siteConfig.contact.address1}</p>
      <p>{siteConfig.contact.address2}</p>
      <p>TEL : <a href={`tel:${siteConfig.contact.tel}`} className="hover:opacity-70">{siteConfig.contact.tel}</a></p>
      <p>FAX : {siteConfig.contact.fax}</p>
      <p>営業時間: 10:00 - 19:00 (定休日: 火曜)</p>
    </div>

    {/* 中央: サイトマップ */}
    <div className="flex flex-col space-y-3 lg:space-y-4 text-base border-t lg:border-t-0 lg:border-l lg:pl-4 pt-6 lg:pt-0 uppercase tracking-[0.2em] border-clr-white/30">
      <Link href="/coating" className="hover:text-clr-primary-1 transition-colors">Coating</Link>
      <Link href="/maintenance" className="hover:text-clr-primary-1 transition-colors">Maintenance</Link>
      <Link href="/about" className="hover:text-clr-primary-1 transition-colors">About</Link>
      <Link href="/contact" className="hover:text-clr-primary-1 transition-colors">Contact</Link>
      <Link href="/privacy" className="hover:text-clr-primary-1 transition-colors">Privacy Policy</Link>
      <Link href="/terms" className="hover:text-clr-primary-1 transition-colors">Terms of Service</Link>
    </div>

    {/* 右: コンタクト */}
    <div className="border-t lg:border-t-0 lg:border-l lg:pl-4 pt-6 lg:pt-0 border-clr-white/30">
      <div className="w-full">
        <SnsLinks />
      </div>

      <div className="mt-8 text-[10px] lg:text-xs text-white/60">
        &copy; 2026 {siteConfig.enCompamyName1}{" "}
        {siteConfig.enCompamyName2} Inc. All Rights Reserved.
      </div>
    </div>
  </div>  
</footer>
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
