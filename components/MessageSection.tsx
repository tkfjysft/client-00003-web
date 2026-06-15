import { siteConfig } from "@/config/site";

interface MessageSectionProps {
  className?: string;
}

export default function MessageSection({ className }: MessageSectionProps) {
  return (
    <>
      <div className="mb-100">
        <h1 className="text-3xl mb-50">
          {siteConfig.enCompamyName1} {siteConfig.enCompamyName2}
          &nbsp;&nbsp;&nbsp;- {siteConfig.companyName1}{" "}
          {siteConfig.companyName2} - は<br />
          {siteConfig.contact.address1}
          に店舗を構え、欧州車や国産車の中古車販売を行っております。
        </h1>
        <div className="space-y-20">
        <p className="text-clr-light-1">
          弊社で在庫していないお車でもご希望モデルや年式、ボディカラーやご予算等から最適な1台を探すお手伝いをさせて頂きます。
        </p>
        <p className="text-clr-light-1">
          また、{siteConfig.enCompamyName1} {siteConfig.enCompamyName2} -{" "}
          {siteConfig.companyName1} {siteConfig.companyName2} -
          では、洗車や自社コーティングの施工を始めました！
        </p>
        <p className="text-clr-light-1">
          お車だけではなくホイールやバイクなども対応しております。
        </p>
        <p className="text-clr-light-1">
          まだどんな車にしようかお悩みの方、すでに欲しい車が決まっている方も是非一度
          {siteConfig.enCompamyName2}にご相談下さい。
        </p>
      </div>
      </div>
    </>
  );
}
