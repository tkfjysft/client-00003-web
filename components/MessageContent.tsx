import { siteConfig } from "@/config/site";

export default function MessageContent() {
  return (
    <div className="h-full flex flex-col justify-center px-[10vw]">
      <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
        About Us
      </h2>
      <p className="mt-8 text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
        {siteConfig.enCompamyName1} {siteConfig.enCompamyName2} -{" "}
        {siteConfig.companyName1} {siteConfig.companyName2} - は
        {siteConfig.contact.address1}に店舗を構え、欧州車や国産車の中古車販売を行っております。
        <br />
        <br />
        ご希望モデルやご予算から最適な1台を探すお手伝いをいたします。
        また、洗車や自社コーティングの施工も承っております。お気軽にご相談ください。
      </p>
    </div>
  );
}