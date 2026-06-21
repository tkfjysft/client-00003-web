
import { label } from "framer-motion/client";

export type NavItem = {
  label: string;
  href: string;
  showInNav: boolean;
  children?: readonly { 
    label: string;
    href: string;
	showInNav: boolean;
  }[];
};

export type SubNavItem = {
  label: string;
  href: string;
  showInNav: boolean;
};


export const siteConfig = {
  companyName1: "カーサービス",
  companyName2: "LAC",
  enCompamyName1: "CAR SERVICE",
  enCompamyName2: "LAC",
  ownerName: "山田 太郎", 
  metaTitle: "",
  metaDescription: "CAR SERVICE LAC カーサービス ラックは東京都中央区の中古車販売(欧州車/国産車)です。モデル/年式/カラー/予算等から探します。洗車/コーティングも実施",
  heroTagline: "真昼の白に、夜のきらめきを。",
  description1: "多様な技術を駆使し、ビジネスの課題をシンプルな解決策へと導くデジタルパートナー。確かな技術力と柔軟な思考で、次世代のスタンダードを共創します。",
  description2: "",
  url: "/",
  contact: {
    postcode: "*******",
    address1: "東京都千代田区",
    address2: "丸の内１丁目",
	    tel: "0000000000",
    	fax: "00\u200c0000\u200c0000",
    	email: "",
  },
  location: {
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp",
  },	
  navItems: [
    { label: "Home", href: "/", showInNav: false },
    { label: "Category", href: "/category", showInNav: true,
		children: [
			{label: "すべての商品", href: `/category`, showInNav: true },
			{label: "リング", href: "/category", showInNav: true },
			{label: "ピアス", href: "/category", showInNav: true },
			{label: "イヤーカフ", href: "/category", showInNav: true },
			{label: "ネックレス", href: "/category", showInNav: true },
			{label: "ブレスレット", href: "/category", showInNav: true },
		] },
    { label: "Bridal", href: "/bridal", showInNav: true,
		children: [
			{label: "ブライダルについて", href: "/bridal", showInNav: true },
			{label: "婚約指輪", href: "/bridal", showInNav: true },
			{label: "女性用リング", href: "/bridal", showInNav: true },
			{label: "男性用リング", href: "/bridal", showInNav: true },
		] },
    { label: "Access", href: "/#access-section", showInNav: false },
	{ label: "Company", href: "/company", showInNav: true,
	children: [
		{label: "店舗情報", href: "/company", showInNav: true },
		{label: "アクセス", href: "#access-section", showInNav: true },
		{label: "最新情報", href: "/company", showInNav: true },
		{label: "会社概要", href: "/company", showInNav: true },
		{label: "特定商取引法に基づく表記", href: "/company", showInNav: true },
		{label: "お問い合せ", href: "/company", showInNav: true },
	] },
  ]as NavItem[],

  features: {
    showBlog: false,
    showCaseStudies: false,
    showMember: true,
  },

} as const;

export type SiteConfig = typeof siteConfig;




