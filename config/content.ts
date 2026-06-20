import { siteConfig } from "@/config/site";

export type SectionType = {
  id: number;
  type: "hero" | "message" | "coating" | "maintenance" | "about";
  title?: string;
  subtitle?: string; // 追加
  photo?: string;    // 追加
  intro?: string;    // 追加
  description?: string; // 追加
  body?: string;
  items?: { en: string; ja: string }[];
  links?: { label: string; href: string }[];
  steps?: { id: string; title: string; label: string; text: string; link: string }[];
  details?: { label: string; text: string }[]; // 追加
  footer?: string;   // 追加
  features?: { title: string; text: string }[]; // 追加
};

export const SECTIONS: SectionType[] = [
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
  title: "Philosophy & Commitment",
  subtitle: "至高のカーライフをご提案するために",
  intro: "私たちは、単なる車両の販売を超えた価値を創造します。",
  photo: "/images/carlineup.webp",
  details: [
    { label: "選定の美学", text: "厳しい基準をクリアした厳選車両のみをラインナップ。長年の知見で、あなたの理想を導き出します。" },
    { label: "洗練されたケア", text: "輝きを永続させる自社コーティングと、ディーラー水準のメンテナンス体制を完備。" }
  ],
  footer: "初めての方から拘りのある方まで。あなたと愛車の物語の、最初の一ページを私たちがサポートいたします。"
},
  {
  id: 3,
  type: "coating",
  title: "Coating Service",
  subtitle: "美しさを、纏い続ける。",
  photo: "/images/coating.webp",
  description: "単なる保護を超えた、息を呑むような輝きを。熟練の職人が、塗装の深みを引き出す最高峰のコーティングを施します。",
  features: [
    { title: "卓越した撥水性", text: "雨や汚れを寄せ付けない強固な被膜が、愛車の美しさを長期間維持します。" },
    { title: "鏡面仕上げ", text: "新車以上の輝きを再現するため、塗装の微細な傷までも丁寧に除去します。" }
  ],
  links: [
    { label: "コーティング詳細", href: "/coating" },
    { label: "施工プロセス", href: "/process" },
    { label: "プライスリスト", href: "/price" },
  ]
},
{
  id: 4,
  type: "maintenance",
  title: "Maintenance & Flow",
  subtitle: "透明性の高い、安心のパートナーシップ",
  photo: "/images/engine.webp",
  description: "車両探しから納車、そしてアフターケアまで。すべてはお客様との信頼関係から始まります。",
  steps: [
    { id: "01", title: "Consultation", label: "お問合せ・ご相談", text: "お客様のご希望やご予算を丁寧にヒアリングいたします。" ,link: "/consultation" },
    { id: "02", title: "Inspection", label: "現車確認・見積", text: "車両の状態を専門知識に基づいて細部までチェックします。" ,link: "/inspection"  },
    { id: "03", title: "Settlement", label: "ご契約・お支払い", text: "透明性の高い明細をご提示し、確実な手続きをサポートします。" ,link: "/settlement"  },
    { id: "04", title: "Delivery", label: "車両のお引き渡し", text: "隅々まで清掃し、最高のかたちで愛車をお届けします。" ,link: "/delivery"  },
  ]
},
{
  id: 5,
  type: "about",
  title: "Greeting",
  subtitle: "理想を現実に変える場所",
  photo: "/images/business.webp",
  body: "国産車から欧州車まで、私たちは「愛車との対話」を大切にする場所でありたいと考えています。初めての方にも、深い拘りをお持ちの方にも、ここに来れば何かが変わる。そんな安心と情熱を備えた店舗を目指しています。",
  links: [
    { label: "アクセスマップ", href: "/access" },
  ]
}
];