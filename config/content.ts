import { siteConfig } from "@/config/site";

export const SECTIONS = [
  {
    id: 1,
    type: "hero",
    items: [
      { en: "The best choice for the best one", ja: "最高の１台のために最高の選択を" },
      { en: "Cars all over the world are waiting for you", ja: "世界中の車があなたを待っている" },
      { en: "Come on, let's run", ja: "さあ、走りだそう" },
      { en: "Everywhere you want to be", ja: "あなたの目指す所へ" },
      { en: "PLUS ULTRA", ja: "もっと先へ" },
    ]
  },
  {
    id: 2,
    type: "message",
    title: "About Us",
    body: `${siteConfig.enCompamyName1} ${siteConfig.enCompamyName2} - ${siteConfig.companyName1} ${siteConfig.companyName2} - は${siteConfig.contact.address1}に店舗を構え、欧州車や国産車の中古車販売を行っております。ご希望モデルやご予算から最適な1台を探すお手伝いをいたします。また、洗車や自社コーティングの施工も承っております。お気軽にご相談ください。`,
  },
  {
    id: 3,
    type: "coating",
    title: "Coating Service",
    description: "プロの技術で、愛車の輝きを最大限に引き出します。",
    links: [
      { label: "コーティングについて", href: "/coating" },
      { label: "施工の流れ", href: "/process" },
      { label: "料金表", href: "/price" },
    ]
  },
  {
    id: 4,
    type: "maintenance",
    title: "Maintenance / Flow",
    steps: [
      { id: "Step.1", label: "お問合せ・ご相談", href: "/contact" },
      { id: "Step.2", label: "現車の確認・お見積もり", href: "/estimate" },
      { id: "Step.3", label: "諸費用のお支払い", href: "/payment" },
      { id: "Step.4", label: "車両のお引き渡し", href: "/delivery" },
    ]
  },
  {
    id: 5,
    type: "about",
    title: "Greeting",
    body: "ホームページをご覧頂きありがとうございます。国産車から輸入車まで幅広く対応しており、初めて輸入車を検討されている方や、車検・メンテナンスのご相談など、お気軽にお立ち寄りいただける会社作りを目指しています。",
    links: [
      { label: "アクセス（Find Us）", href: "/access" },
    ]
  }
];